import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import MenuContent from '@/components/sections/MenuContent';

export const metadata: Metadata = {
  title: 'Signature Menu | Mataam Shinwari',
  description: 'Explore our curated selection of signature Shinwari dishes...',
};

export default function MenuPage() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Banner */}
        <section className="relative h-[40vh] md:h-[50vh] bg-charcoal flex items-center justify-center">
          <Image
            src="/images/white-karahi.jpeg"
            alt="Mataam Shinwari Signature Menu"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
          
          <div className="relative z-10 text-center flex flex-col items-center mt-16">
            <h1 className="font-gulzar text-3xl md:text-5xl text-warm-white" dir="rtl">
              ہمارے خاص پکوان
            </h1>
            <h2 className="font-playfair text-xl md:text-2xl text-warm-white/70 tracking-wider uppercase mt-4">
              Our Signature Selection
            </h2>
            <div className="w-24 h-[1px] bg-flame/50 mt-6" />
          </div>
        </section>

        {/* Menu Content (Client Component) */}
        <MenuContent />
      </main>

      <Footer />
    </div>
  );
}
