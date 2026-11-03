'use client';

import { motion } from 'framer-motion';

interface TraditionalDividerProps {
  color?: 'flame' | 'maroon';
  className?: string;
}

export default function TraditionalDivider({ color = 'flame', className = '' }: TraditionalDividerProps) {
  const fillColor = color === 'flame' ? '#E85B27' : '#8E2026';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
      className={`flex justify-center items-center w-full my-8 ${className}`}
    >
      <svg 
        className="w-48 md:w-64 h-6" 
        viewBox="0 0 256 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0 11.5H108L112 7.5L128 23.5L144 7.5L148 11.5H256V12.5H148L144 16.5L128 0.5L112 16.5L108 12.5H0V11.5Z" 
          fill={fillColor}
        />
        <path 
          d="M128 5L134 11H122L128 5Z" 
          fill={fillColor}
        />
        <path 
          d="M128 19L134 13H122L128 19Z" 
          fill={fillColor}
        />
      </svg>
    </motion.div>
  );
}
