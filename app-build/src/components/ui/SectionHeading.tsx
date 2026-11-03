'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  urduTitle: string;
  englishTitle: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  urduTitle,
  englishTitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <h2 
        dir="rtl" 
        className={`font-gulzar text-3xl md:text-4xl mb-2 ${light ? 'text-flame' : 'text-maroon'}`}
      >
        {urduTitle}
      </h2>
      <h3 
        className={`font-playfair text-2xl md:text-3xl uppercase tracking-wide mb-4 ${light ? 'text-warm-white' : 'text-charcoal'}`}
      >
        {englishTitle}
      </h3>
      <div className="w-20 h-[2px] bg-flame/50" />
    </motion.div>
  );
}
