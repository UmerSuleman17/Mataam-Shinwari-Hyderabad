import { timingSafeEqual } from 'node:crypto';

export function authorize(header, password) {
  if (!password || !header?.startsWith('Basic ')) return false;
  const decoded = Buffer.from(header.slice(6), 'base64').toString('utf8');
  const expected = Buffer.from(`admin:${password}`);
  const actual = Buffer.from(decoded);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
