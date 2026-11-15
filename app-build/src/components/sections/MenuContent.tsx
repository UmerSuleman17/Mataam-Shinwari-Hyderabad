'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { signatureDishes } from '@/data/dishes';
import { menuCategories } from '@/data/categories';
import { fullMenu } from '@/data/full-menu';

export default function MenuContent() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <section aria-labelledby="full-menu-heading" className="mb-20">
        <h2 id="full-menu-heading" className="font-playfair text-3xl md:text-4xl text-center text-charcoal uppercase tracking-wider">Our Menu</h2>
        <p className="mt-4 text-center font-inter text-main/60">Prices in PKR, excluding tax.</p>
        <nav aria-label="Menu categories" className="mt-8 flex flex-wrap justify-center gap-2">
          {fullMenu.map((category, index) => (
            <a key={category.name} href={`#menu-category-${index}`} className="rounded-full border border-maroon/30 px-4 py-2 font-inter text-sm text-maroon hover:bg-maroon hover:text-warm-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon">
              {category.name}
            </a>
          ))}
        </nav>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 mt-12">
          {fullMenu.map((category, index) => (
            <section key={category.name} id={`menu-category-${index}`} className="scroll-mt-24">
              <h3 className="font-playfair text-2xl text-maroon border-b border-flame/30 pb-3">{category.name}</h3>
              <ul className="mt-2">
                {category.items.map(([name, price]) => (
                  <li key={name} className="flex justify-between gap-4 py-3 border-b border-charcoal/10 font-inter text-sm sm:text-base">
                    <span className="text-charcoal">{name}</span>
                    <span className="text-maroon text-right shrink-0 max-w-[60%]">{price}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
      <h2 className="font-playfair text-3xl text-center text-charcoal uppercase tracking-wider mb-12">Signature Selection</h2>
      {signatureDishes.map((dish, index) => {
        const isOdd = index % 2 === 0;

        return (
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] as const }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24"
          >
            <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ${!isOdd ? 'lg:order-2' : ''}`}>
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.6 }} className="w-full h-full relative">
                <Image
                  src={dish.image}
                  alt={dish.englishName}
                  fill
                  className="object-cover"
                  quality={85}
                />
              </motion.div>
            </div>
            
            <div className={`flex flex-col ${!isOdd ? 'lg:order-1' : ''}`}>
              <div className="flex flex-col">
                <h3 className="font-gulzar text-2xl md:text-3xl text-maroon mt-2" dir="rtl">
                  {dish.urduName}
                </h3>
                <h4 className="font-playfair text-xl md:text-2xl uppercase tracking-wider text-charcoal mt-2">
                  {dish.englishName}
                </h4>
              </div>
              
              <div className="w-12 h-[2px] bg-flame/40 my-4" />
              
              <p className="font-inter text-base text-main/60 leading-relaxed">
                {dish.description}
              </p>
              
              <div>
                <span className="inline-block mt-4 font-manrope text-xs tracking-wider uppercase text-flame/70 bg-flame/5 px-3 py-1 rounded-full border border-flame/10">
                  {menuCategories.find(c => c.id === dish.category)?.englishName || dish.category}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
