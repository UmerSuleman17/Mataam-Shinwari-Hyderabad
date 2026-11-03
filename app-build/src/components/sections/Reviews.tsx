'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ReviewCard from '@/components/ui/ReviewCard';
import { reviews } from '@/data/reviews';
import { restaurantInfo } from '@/data/restaurant';
import { Star, StarHalf } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
};

export default function Reviews() {
  const displayedReviews = reviews.slice(0, 5);

  return (
    <section className="py-20 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          urduTitle="ہمارے مہمان"
          englishTitle="WHAT OUR GUESTS SAY"
        />

        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="font-playfair text-5xl text-charcoal">4.3</span>
          <span className="font-manrope text-lg text-main/40">/5</span>
          <div className="flex text-flame text-2xl">
            <Star className="fill-current w-6 h-6" />
            <Star className="fill-current w-6 h-6" />
            <Star className="fill-current w-6 h-6" />
            <Star className="fill-current w-6 h-6" />
            <StarHalf className="fill-current w-6 h-6" />
          </div>
          <span className="font-manrope text-sm text-main/50">100+ reviews</span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {displayedReviews.map((review) => (
            <motion.div key={review.id} variants={itemVariants}>
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
