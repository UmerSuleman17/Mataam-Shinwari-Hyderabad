import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const source = await readFile(new URL('../netlify/edge-functions/feedback-page-limit.js', import.meta.url), 'utf8');
const { config } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));

test('rate limit covers access-code checks on the feedback page', () => {
  assert.equal(config.path, '/feedback');
  assert.equal(config.method, 'GET');
  assert.deepEqual(config.rateLimit.aggregateBy, ['ip', 'domain']);
  assert.ok(config.rateLimit.windowLimit > 0 && config.rateLimit.windowSize <= 180);
});
