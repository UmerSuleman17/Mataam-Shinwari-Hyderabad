export default function adminFeedbackLimit() {}

export const config = {
  path: '/admin/feedback',
  method: 'GET',
  rateLimit: { windowLimit: 10, windowSize: 60, aggregateBy: ['ip', 'domain'] },
};
