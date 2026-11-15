export function validateReview(input) {
  if (!input || typeof input !== 'object') return null;
  const { billId, name, rating, text } = input;
  if (typeof billId !== 'string' || typeof name !== 'string' || typeof text !== 'string' || !Number.isInteger(rating) || rating < 1 || rating > 5) return null;
  const review = { billId: billId.trim(), name: name.trim(), rating, text: text.trim() };
  if (!review.billId || review.billId.length > 80 || !review.name || review.name.length > 80 || !review.text || review.text.length > 1000) return null;
  return review;
}

export function publicReview({ id, name, rating, text, createdAt }) {
  return { id, name, rating, text, createdAt };
}
