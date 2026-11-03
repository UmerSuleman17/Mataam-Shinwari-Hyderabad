'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-charcoal"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <Image
          src="/images/dum-pukht.jpeg"
          alt="Dum Pukht"
          fill
          priority
          quality={85}
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/50 to-charcoal/80" />

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-[family-name:var(--font-manrope)] text-xs tracking-[0.3em] uppercase text-warm-white/60 mb-4"
        >
          AUTHENTIC SHINWARI CUISINE
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-gulzar)] text-4xl sm:text-5xl md:text-7xl text-warm-white mb-4"
          dir="rtl"
        >
          <bdi>ذائقہ روایت کا</bdi>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl italic text-warm-white/80"
        >
          The Taste of Tradition
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-16 h-[1px] bg-flame mx-auto my-6"
        />
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={scrollToStory}
          className="font-[family-name:var(--font-manrope)] text-xs tracking-[0.2em] uppercase px-8 py-3 border border-warm-white/40 text-warm-white rounded-none hover:bg-flame hover:border-flame hover:text-warm-white transition-all duration-300"
        >
          Discover Mataam ↓
        </motion.button>
      </div>
    </section>
  );
}
