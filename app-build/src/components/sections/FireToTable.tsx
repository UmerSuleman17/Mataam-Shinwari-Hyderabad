'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const galleryItems = [
  {
    src: '/images/dum-pukht.jpeg',
    alt: 'Dum Pukht',
    name: 'Dum Pukht',
    className: 'col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 aspect-square md:aspect-auto',
  },
  {
    src: '/images/peshawari-karahi.jpeg',
    alt: 'Peshawari Karahi',
    name: 'Peshawari Karahi',
    className: 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 aspect-square',
  },
  {
    src: '/images/gola-kabab.jpeg',
    alt: 'Gola Kabab',
    name: 'Gola Kabab',
    className: 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 aspect-square',
  },
  {
    src: '/images/white-karahi.jpeg',
    alt: 'White Karahi',
    name: 'White Karahi',
    className: 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 aspect-video md:aspect-square',
  },
  {
    src: '/images/chicken-bihari.jpeg',
    alt: 'Chicken Bihari',
    name: 'Chicken Bihari',
    className: 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1 aspect-video md:aspect-auto',
  },
];

export default function FireToTable() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Subtle flame glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-flame)_0%,transparent_70%)] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          urduTitle="آگ سے دسترخوان تک" 
          englishTitle="FROM FIRE TO TABLE" 
          light={true} 
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] as const }}
              className={`relative rounded-xl overflow-hidden group ${item.className}`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full h-full"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-warm-white font-[family-name:var(--font-cormorant)] text-lg md:text-xl tracking-wider">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
