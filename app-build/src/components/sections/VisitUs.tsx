'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { restaurantInfo } from '@/data/restaurant';
import { MapPin, Phone, Clock } from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function VisitUs() {
  return (
    <section id="visit" className="py-20 md:py-32 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          urduTitle="ہم سے ملیں"
          englishTitle="COME. SIT. EXPERIENCE."
          light={true}
        />

        <div className="max-w-3xl mx-auto mt-16 bg-charcoal border border-warm-white/10 rounded-2xl p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <h3 className="font-playfair text-2xl md:text-3xl text-warm-white tracking-wider uppercase">
              {restaurantInfo.name}
            </h3>
            <h4 className="font-gulzar text-xl text-flame/70 mt-2" dir="rtl">
              {restaurantInfo.urduName}
            </h4>
            <div className="w-16 h-[1px] bg-flame/40 mx-auto my-8" />
          </motion.div>

          <div className="flex flex-col gap-6 text-warm-white/70">
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              <MapPin className="w-6 h-6 text-flame" />
              <p className="font-manrope text-sm max-w-sm">{restaurantInfo.address}</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            >
              <Clock className="w-6 h-6 text-flame" />
              <div className="font-manrope text-sm flex flex-col gap-1">
                <p>Weekdays: {restaurantInfo.hours.weekdays}</p>
                <p>Weekends: {restaurantInfo.hours.weekends}</p>
              </div>
              <p className="text-warm-white/30 text-xs italic mt-1">*Hours to be confirmed with management</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            >
              <Phone className="w-6 h-6 text-flame" />
              <a
                href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="font-manrope text-sm hover:text-flame transition"
              >
                {restaurantInfo.phone}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <a
              href={restaurantInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-manrope text-xs tracking-[0.25em] uppercase px-10 py-4 bg-flame text-warm-white rounded-none hover:bg-flame/90 transition mt-10"
            >
              GET DIRECTIONS
            </a>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <a href={restaurantInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-warm-white/50 hover:text-flame transition">
              <InstagramIcon />
            </a>
            <a href={restaurantInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-warm-white/50 hover:text-flame transition">
              <FacebookIcon />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
