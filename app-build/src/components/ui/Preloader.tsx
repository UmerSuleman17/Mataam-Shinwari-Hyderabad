'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const subscribe = () => () => {};

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {hydrated && loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream"
        >
          <div className="relative flex flex-col items-center">
            {/* Subtle radial gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-flame/10 rounded-full blur-3xl animate-pulse" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[160px] h-[160px] rounded-full overflow-hidden shadow-2xl mb-8"
            >
              <Image
                src="/images/logo.jpeg"
                alt="Mataam Shinwari Logo"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center space-y-4"
            >
              <span className="font-gulzar text-maroon text-2xl" dir="rtl">
                ذائقہ روایت کا
              </span>
              
              <span className="font-playfair tracking-[0.3em] text-charcoal text-sm uppercase">
                Mataam Shinwari
              </span>
              
              <div className="w-[60px] h-[1px] bg-flame mt-4" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
