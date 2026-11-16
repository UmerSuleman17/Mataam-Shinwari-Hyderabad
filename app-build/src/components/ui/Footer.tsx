"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/#story" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Visit Us", href: "/#visit" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/logo.jpeg"
                  alt="Mataam Shinwari"
                  fill
                  className="object-contain rounded-full"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-lg tracking-[0.15em] uppercase text-warm-white">
                  Mataam Shinwari
                </p>
                <p
                  className="font-[family-name:var(--font-gulzar)] text-base text-flame/80"
                  dir="rtl"
                >
                  {restaurantInfo.urduName}
                </p>
              </div>
            </div>
            <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-warm-white/50 mb-2">
              {restaurantInfo.taglineEnglish}
            </p>
            <p
              className="font-[family-name:var(--font-gulzar)] text-xl text-flame/50"
              dir="rtl"
            >
              {restaurantInfo.taglineUrdu}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-[family-name:var(--font-manrope)] text-xs tracking-[0.2em] uppercase text-flame mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-manrope)] text-sm text-warm-white/60 hover:text-flame transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-[family-name:var(--font-manrope)] text-xs tracking-[0.2em] uppercase text-flame mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-center gap-3 text-warm-white/60 hover:text-flame transition-colors duration-300"
              >
                <Phone size={16} />
                <span className="font-[family-name:var(--font-manrope)] text-sm">
                  {restaurantInfo.phone}
                </span>
              </a>
              <div className="flex items-start gap-3 text-warm-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span className="font-[family-name:var(--font-manrope)] text-sm">
                  {restaurantInfo.address}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-[family-name:var(--font-manrope)] text-xs tracking-[0.2em] uppercase text-flame mb-6">
              Social
            </h3>
            <div className="flex gap-4">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-warm-white/20 flex items-center justify-center text-warm-white/60 hover:text-flame hover:border-flame transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-warm-white/20 flex items-center justify-center text-warm-white/60 hover:text-flame hover:border-flame transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="font-[family-name:var(--font-gulzar)] text-sm text-warm-white/30"
              dir="rtl"
            >
              ذائقہ روایت کا
            </p>
            <p className="font-[family-name:var(--font-manrope)] text-xs text-warm-white/30 tracking-wider">
              © 2026 Mataam Shinwari. All Rights Reserved by Wisdom Tech.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
