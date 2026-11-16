import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createFeedbackHandlers } from '../src/lib/feedback-handlers.mjs';

const valid = { accessCode: 'secret', billId: 'B123', name: 'Guest', rating: 4, text: 'Good meal' };
const request = data => new Request('http://localhost/api/feedback', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
function setup() {
  const records = [];
  const handlers = createFeedbackHandlers({ accessCode: 'secret', save: async value => records.push(value), list: async () => records });
  return { records, ...handlers };
}
test('only a valid access code can submit and public responses exclude bill IDs', async () => {
  const { records, POST, GET } = setup();
  assert.equal((await POST(request({ ...valid, accessCode: 'wrong' }))).status, 403);
  assert.equal(records.length, 0);
  assert.equal((await POST(request(valid))).status, 201);
  assert.equal(records[0].billId, 'B123');
  const body = await (await GET()).json();
  assert.equal(body.reviews[0].text, 'Good meal');
  assert.equal('billId' in body.reviews[0], false);
});
test('rejects invalid data and fails closed when not configured', async () => {
  const { POST } = setup();
  assert.equal((await POST(request({ ...valid, text: '' }))).status, 400);
  const disabled = createFeedbackHandlers({ accessCode: '', save: async () => {}, list: async () => [] });
  assert.equal((await disabled.POST(request({ ...valid, accessCode: '' }))).status, 503);
});
test('storage failures do not report a successful submission', async () => {
  const { POST } = createFeedbackHandlers({ accessCode: 'secret', save: async () => { throw Error('offline'); }, list: async () => [] });
  assert.equal((await POST(request(valid))).status, 503);
});
test('rejects oversized bodies without storing a review', async () => {
  const { records, POST } = setup();
  const response = await POST(request({ ...valid, text: 'x'.repeat(10000) }));
  assert.equal(response.status, 413);
  assert.equal(records.length, 0);
});
