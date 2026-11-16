import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import FeedbackForm from '@/components/feedback/FeedbackForm';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Share feedback | Mataam Shinwari', robots: { index: false, follow: false }, referrer: 'no-referrer' };

export default async function FeedbackPage({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  const { code } = await searchParams;
  const allowed = !!process.env.FEEDBACK_ACCESS_CODE && code === process.env.FEEDBACK_ACCESS_CODE;
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-2xl px-5 pb-24 pt-32">
        <h1 className="font-playfair text-4xl text-charcoal">Share your experience</h1>
        <p className="mt-4 mb-10 text-main/70">Your feedback helps us make every visit better.</p>
        {allowed ? <FeedbackForm accessCode={code!} /> : <p>To leave feedback, please scan the QR code at the restaurant.</p>}
      </main>
      <Footer />
    </div>
  );
}
