'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function BrandIntro() {
  return (
    <section id="story" className="py-20 md:py-32 bg-cream paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          urduTitle="ہماری کہانی" 
          englishTitle="A TASTE ROOTED IN TRADITION" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-main/80 leading-relaxed">
              At Mataam Shinwari, every dish tells a story of tradition. Rooted in the rich culinary heritage of Shinwari cuisine, we bring the authentic flavours of the frontier to the heart of Hyderabad.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-base text-main/60 mt-6">
              From our signature Peshawari Karahi prepared over open flames to our slow-cooked Dum Pukht, every recipe is a tribute to generations of culinary mastery. We don&apos;t just serve food &mdash; we serve an experience.
            </p>
            <p className="font-[family-name:var(--font-manrope)] text-xs text-main/30 italic mt-8">
              *Restaurant story to be finalized with the owner
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
          >
            <Image
              src="/images/peshawari-karahi.jpeg"
              alt="Peshawari Karahi"
              fill
              quality={85}
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
