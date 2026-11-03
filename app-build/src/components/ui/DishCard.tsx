'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Dish {
  urduName: string;
  englishName: string;
  description: string;
  image: string;
}

interface DishCardProps {
  dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col group border-b-2 border-flame/20 pb-4"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <Image
            src={dish.image}
            alt={dish.englishName}
            fill
            quality={85}
            className="object-cover"
          />
        </motion.div>
      </div>
      <div className="flex flex-col space-y-2 px-2">
        <h3 className="font-gulzar text-xl text-maroon" dir="rtl">
          {dish.urduName}
        </h3>
        <h4 className="font-playfair text-lg uppercase tracking-wider text-charcoal">
          {dish.englishName}
        </h4>
        <p className="font-inter text-sm text-main/70">
          {dish.description}
        </p>
      </div>
    </motion.div>
  );
}
