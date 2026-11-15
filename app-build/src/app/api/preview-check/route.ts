import { getStore } from '@netlify/blobs';

export const dynamic = 'force-dynamic';
export async function GET(request: Request) {
  const code = new URL(request.url).searchParams.get('code');
  if (process.env.FEEDBACK_STORE_NAME !== 'guest-feedback-preview' || !process.env.FEEDBACK_ACCESS_CODE || code !== process.env.FEEDBACK_ACCESS_CODE) return new Response(null, { status: 404 });
  const record = await getStore('guest-feedback-preview').get('2026-11-15T21:10:54.965Z/071407bd-657c-4b54-8c43-3a8a9967ed74', { type: 'json', consistency: 'strong' }) as { billId?: string } | null;
  return Response.json({ testBillReferenceStored: record?.billId === 'PREVIEW-TEST-001' }, { headers: { 'Cache-Control': 'no-store' } });
}
