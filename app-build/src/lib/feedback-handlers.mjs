import { randomUUID } from 'node:crypto';
import { publicReview, validateReview } from './review.mjs';

export function createFeedbackHandlers({ accessCode, save, list }) {
  return {
    async POST(request) {
      if (!accessCode) return Response.json({ error: 'Feedback is unavailable.' }, { status: 503 });
      let input;
      try {
        const reader = request.body?.getReader();
        if (!reader) throw new Error('Missing body');
        const decoder = new TextDecoder();
        let bytes = 0;
        let body = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          bytes += value.byteLength;
          if (bytes > 8192) {
            await reader.cancel();
            return Response.json({ error: 'Submission too large.' }, { status: 413 });
          }
          body += decoder.decode(value, { stream: true });
        }
        input = JSON.parse(body + decoder.decode());
      } catch {
        return Response.json({ error: 'Invalid submission.' }, { status: 400 });
      }
      if (input?.accessCode !== accessCode) return Response.json({ error: 'Invalid access code.' }, { status: 403 });
      const review = validateReview(input);
      if (!review) return Response.json({ error: 'Invalid submission.' }, { status: 400 });
      try {
        await save({ ...review, id: randomUUID(), createdAt: new Date().toISOString() });
        return Response.json({ ok: true }, { status: 201 });
      } catch {
        return Response.json({ error: 'Feedback is unavailable.' }, { status: 503 });
      }
    },
    async GET() {
      try {
        const reviews = (await list()).map(publicReview);
        return Response.json({ reviews }, { headers: { 'Cache-Control': 'no-store' } });
      } catch {
        return Response.json({ error: 'Feedback is unavailable.' }, { status: 503 });
      }
    },
  };
}
