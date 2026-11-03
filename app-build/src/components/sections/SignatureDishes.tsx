'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import DishCard from '@/components/ui/DishCard';
import { signatureDishes } from '@/data/dishes';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
};

export default function SignatureDishes() {
  const displayedDishes = signatureDishes.slice(0, 6);

  return (
    <section className="py-20 md:py-32 bg-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          urduTitle="ہمارے خاص پکوان"
          englishTitle="SIGNATURE DISHES"
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16"
        >
          {displayedDishes.map((dish) => (
            <motion.div key={dish.id} variants={itemVariants}>
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-block font-manrope text-sm tracking-[0.2em] uppercase text-flame hover:text-maroon transition pb-1 border-b border-flame/40"
          >
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
