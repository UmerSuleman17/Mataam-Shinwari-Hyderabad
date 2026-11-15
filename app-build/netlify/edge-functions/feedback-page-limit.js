export default function feedbackPageLimit() {}

export const config = {
  path: '/feedback',
  method: 'GET',
  rateLimit: {
    windowLimit: 60,
    windowSize: 60,
    aggregateBy: ['ip', 'domain'],
  },
};
