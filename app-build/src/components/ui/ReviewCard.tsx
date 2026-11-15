'use client';

import { motion } from 'framer-motion';

interface Review {
  text: string;
  rating: number;
  author: string;
  date?: string;
}

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative bg-warm-white rounded-2xl p-6 md:p-8 border-l-4 border-maroon shadow-sm"
    >
      <span className="absolute top-4 right-6 font-playfair text-6xl text-flame/20 leading-none">
        &quot;
      </span>
      <div className="flex space-x-1 mb-4 text-flame">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-lg">
            {i < review.rating ? '★' : '☆'}
          </span>
        ))}
      </div>
      <p className="font-inter text-main italic text-base mb-6 relative z-10">
        &quot;{review.text}&quot;
      </p>
      <div className="flex flex-col">
        <span className="font-manrope text-sm text-main/60 font-medium">
          {review.author}
        </span>
        {review.date && (
          <span className="font-manrope text-xs text-main/40 mt-1">
            {review.date}
          </span>
        )}
      </div>
    </motion.div>
  );
}
