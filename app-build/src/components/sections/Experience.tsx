'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const experienceImages = [
  { src: '/images/chicken-tikka.jpeg', name: 'Chicken Tikka' },
  { src: '/images/malai-kabab.jpeg', name: 'Malai Kabab' },
  { src: '/images/chicken-cheese-handi.jpeg', name: 'Chicken Cheese Handi' },
  { src: '/images/peshawari-karahi.jpeg', name: 'Peshawari Karahi' },
];

export default function Experience() {
  return (
    <section className="py-20 md:py-32 bg-cream paper-texture">
      <div className="max-w-[100vw] overflow-hidden">
        <SectionHeading 
          urduTitle="صرف کھانا نہیں" 
          englishTitle="MORE THAN A MEAL" 
        />

        <div className="flex overflow-x-auto lg:overflow-hidden gap-4 mt-16 px-4 md:px-8 pb-8 no-scrollbar">
          {experienceImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
              className="relative rounded-xl overflow-hidden aspect-[3/4] min-w-[250px] flex-1 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full h-full"
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <span className="text-warm-white font-[family-name:var(--font-manrope)] text-sm tracking-wider uppercase">
                  {img.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-main/70 italic text-center max-w-2xl mx-auto mt-12 px-4"
        >
          &quot;A place where families gather, conversations flow, and every meal becomes a memory worth keeping.&quot;
        </motion.p>
      </div>
    </section>
  );
}
