import { getStore } from '@netlify/blobs';
import { authorize, escapeHtml as e } from '@/lib/admin-feedback.mjs';

export const dynamic = 'force-dynamic';
const headers = { 'Cache-Control': 'no-store, private', 'X-Robots-Tag': 'noindex, nofollow', 'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'", 'X-Content-Type-Options': 'nosniff' };

export async function GET(request: Request) {
  const password = process.env.FEEDBACK_ADMIN_PASSWORD || '';
  const storeName = process.env.FEEDBACK_STORE_NAME || '';
  if (password.length < 24 || !/^[a-zA-Z0-9_-]{1,64}$/.test(storeName)) return new Response('Admin feedback is not configured.', { status: 503, headers });
  if (!authorize(request.headers.get('authorization'), password)) return new Response('Sign in required.', { status: 401, headers: { ...headers, 'WWW-Authenticate': 'Basic realm="Mataam feedback", charset="UTF-8"' } });
  try {
    const store = getStore(storeName);
    const { blobs } = await store.list();
    const keys = blobs.map(blob => blob.key);
    keys.sort().reverse();
    const reviews = await Promise.all(keys.map(key => store.get(key, { type: 'json', consistency: 'strong' })));
    const rows = reviews.filter(Boolean).map((r: { createdAt: string; name: string; billId: string; rating: number; text: string }) => `<tr><td>${e(r.createdAt)}</td><td>${e(r.name)}</td><td>${e(r.billId)}</td><td>${e(r.rating)}/5</td><td>${e(r.text)}</td></tr>`).join('');
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Guest feedback | Mataam Shinwari</title><style>body{font:16px system-ui;background:#f7f1e5;color:#252321;margin:0;padding:2rem}main{max-width:1100px;margin:auto}h1{font-family:Georgia,serif}p{color:#574a40}.table{overflow-x:auto;background:#fffdf8;border:1px solid #e8d8bd;border-radius:8px}table{border-collapse:collapse;width:100%;text-align:left}th,td{padding:1rem;border-bottom:1px solid #e8d8bd;vertical-align:top}th{background:#efe4d1}td:last-child{min-width:14rem;white-space:pre-wrap;overflow-wrap:anywhere}</style></head><body><main><p>MATAAM SHINWARI · STAFF</p><h1>Guest feedback</h1><p>Private bill references and guest comments</p>${rows ? `<div class="table"><table><thead><tr><th>Date (UTC)</th><th>Guest</th><th>Bill ID</th><th>Rating</th><th>Feedback</th></tr></thead><tbody>${rows}</tbody></table></div>` : '<p>No feedback yet.</p>'}</main></body></html>`;
    return new Response(html, { headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } });
  } catch {
    return new Response('Feedback could not be loaded. Please try again.', { status: 503, headers });
  }
}
