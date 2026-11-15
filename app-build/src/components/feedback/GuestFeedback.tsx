'use client';

import { useEffect, useState } from 'react';
import ReviewCard from '@/components/ui/ReviewCard';

type Review = { id: string; name: string; rating: number; text: string; createdAt: string };

export default function GuestFeedback() {
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/feedback', { signal: controller.signal })
      .then(response => response.ok ? response.json() : null)
      .then(data => { if (Array.isArray(data?.reviews)) setReviews(data.reviews); })
      .catch(() => {});
    return () => controller.abort();
  }, []);
  if (!reviews.length) return null;
  return (
    <section aria-labelledby="guest-feedback-heading" className="mt-16">
      <h3 id="guest-feedback-heading" className="font-playfair text-2xl text-charcoal text-center">Recent guest feedback</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {reviews.map(review => <ReviewCard key={review.id} review={{ author: review.name, rating: review.rating, text: review.text, date: new Date(review.createdAt).toLocaleDateString('en-GB') }} />)}
      </div>
    </section>
  );
}
