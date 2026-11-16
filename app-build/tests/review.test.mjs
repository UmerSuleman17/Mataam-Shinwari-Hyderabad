import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateReview, publicReview } from '../src/lib/review.mjs';

test('validates feedback and keeps bill IDs private', () => {
  const review = validateReview({ billId: ' 123 ', name: ' Guest ', rating: 4, text: ' Good food ' });
  assert.deepEqual(review, { billId: '123', name: 'Guest', rating: 4, text: 'Good food' });
  assert.deepEqual(publicReview({ ...review, id: 'one', createdAt: '2026-01-01' }), { id: 'one', name: 'Guest', rating: 4, text: 'Good food', createdAt: '2026-01-01' });
});
test('rejects missing, malformed, or excessive input', () => {
  const valid = { billId: '1', name: 'Guest', rating: 5, text: 'Good' };
  for (const input of [{ ...valid, billId: '' }, { ...valid, rating: 6 }, { ...valid, rating: '5' }, { ...valid, text: 'x'.repeat(1001) }, null]) {
    assert.equal(validateReview(input), null);
  }
});
