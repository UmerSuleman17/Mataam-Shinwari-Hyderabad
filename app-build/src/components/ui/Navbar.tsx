"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#hero", isSection: true },
  { label: "Our Story", href: "/#story", isSection: true },
  { label: "Menu", href: "/menu", isSection: false },
  { label: "Gallery", href: "/#gallery", isSection: true },
  { label: "Visit Us", href: "/#visit", isSection: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  useEffect(() => {
    if (!isMobileOpen) return;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>('button')?.focus();
    return () => {
      document.body.style.overflow = "";
      menuButton?.focus();
    };
  }, [isMobileOpen]);

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setIsMobileOpen(false);
    }
    if (event.key === "Tab") {
      const items = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!items?.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);

    // If we're on the homepage and clicking a section link, smooth scroll
    if (isHome && href.startsWith("/#")) {
      const sectionId = href.replace("/", "");
      const el = document.querySelector(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // Otherwise, navigate via Link (handled by the Link component)
  };

  // On menu page, navbar should always have a solid background
  const showSolidBg = isScrolled || !isHome;

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-cream focus:text-charcoal focus:px-4 focus:py-3 focus:outline-2 focus:outline-maroon">Skip to main content</a>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          showSolidBg
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: isHome ? 2.2 : 0.2 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/images/logo.jpeg"
                  alt="Mataam Shinwari"
                  fill
                  className="object-contain rounded-full"
                  sizes="48px"
                />
              </div>
              <div className="hidden sm:block">
                <p
                  className={`font-[family-name:var(--font-playfair)] text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                    showSolidBg ? "text-charcoal" : "text-warm-white"
                  }`}
                >
                  Mataam Shinwari
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                // Section links on homepage use button for smooth scroll
                if (link.isSection && isHome) {
                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className={`font-[family-name:var(--font-manrope)] text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-flame ${
                        showSolidBg ? "text-charcoal" : "text-warm-white"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                }

                // All other cases use Link for navigation
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-[family-name:var(--font-manrope)] text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-flame ${
                      showSolidBg ? "text-charcoal" : "text-warm-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                showSolidBg ? "text-charcoal" : "text-warm-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            tabIndex={-1}
            onKeyDown={handleMenuKeyDown}
            className="fixed inset-0 z-50 bg-charcoal"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] as const }}
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-5 right-5 text-warm-white p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col items-center justify-center h-full gap-8">
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="Mataam Shinwari"
                  fill
                  className="object-contain rounded-full"
                  sizes="80px"
                />
              </div>

              {navLinks.map((link, i) => {
                if (link.isSection && isHome) {
                  return (
                    <motion.button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="font-[family-name:var(--font-playfair)] text-2xl text-warm-white tracking-wider uppercase hover:text-flame transition-colors duration-300"
                    >
                      {link.label}
                    </motion.button>
                  );
                }

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="font-[family-name:var(--font-playfair)] text-2xl text-warm-white tracking-wider uppercase hover:text-flame transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.p
                className="font-[family-name:var(--font-gulzar)] text-xl text-flame/60 mt-6"
                dir="rtl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                ذائقہ روایت کا
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
