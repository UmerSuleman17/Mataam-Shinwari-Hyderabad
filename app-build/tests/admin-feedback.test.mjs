import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { authorize, escapeHtml } from '../src/lib/admin-feedback.mjs';

test('admin access fails closed and requires the correct separate password', () => {
  const auth = (password) => `Basic ${Buffer.from(`admin:${password}`).toString('base64')}`;
  assert.equal(authorize(auth('secret'), ''), false);
  assert.equal(authorize(null, 'secret'), false);
  assert.equal(authorize(auth('wrong'), 'secret'), false);
  assert.equal(authorize(auth('secret'), 'secret'), true);
  assert.equal(escapeHtml('<script>"&'), '&lt;script&gt;&quot;&amp;');
});
