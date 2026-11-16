export default function feedbackLimit() {}

export const config = {
  path: '/api/feedback',
  method: 'POST',
  rateLimit: {
    windowLimit: 30,
    windowSize: 60,
    aggregateBy: ['ip', 'domain'],
  },
};
