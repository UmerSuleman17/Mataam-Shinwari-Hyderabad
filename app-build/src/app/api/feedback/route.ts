import { getStore } from '@netlify/blobs';
import { createFeedbackHandlers } from '@/lib/feedback-handlers.mjs';

export const dynamic = 'force-dynamic';

function handlers() {
  const storeName = process.env.FEEDBACK_STORE_NAME;
  if (!storeName || !/^[a-zA-Z0-9_-]{1,64}$/.test(storeName)) throw new Error('Feedback store is not configured');
  const store = getStore(storeName);
  return createFeedbackHandlers({
    accessCode: process.env.FEEDBACK_ACCESS_CODE || '',
    save: async (review) => {
      await store.setJSON(`${review.createdAt}/${review.id}`, review);
    },
    list: async () => {
      const { blobs } = await store.list();
      const keys = blobs.map(blob => blob.key).sort().reverse().slice(0, 50);
      const reviews = await Promise.all(keys.map(key => store.get(key, { type: 'json', consistency: 'strong' })));
      return reviews.filter(Boolean);
    },
  });
}

export async function POST(request: Request) {
  try { return await handlers().POST(request); }
  catch { return Response.json({ error: 'Feedback is unavailable.' }, { status: 503 }); }
}

export async function GET() {
  try { return await handlers().GET(); }
  catch { return Response.json({ error: 'Feedback is unavailable.' }, { status: 503 }); }
}
