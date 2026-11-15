'use client';

import { useState } from 'react';

export default function FeedbackForm({ accessCode }: { accessCode: string }) {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setStatus('');
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessCode, billId: data.get('billId'), name: data.get('name'), rating: Number(data.get('rating')), text: data.get('text') }),
      });
      if (!response.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setStatus('We could not send your feedback. Please try again.');
    } finally {
      setSending(false);
    }
  }

  if (submitted) return <p role="status" className="text-maroon text-lg">Thank you for sharing your feedback.</p>;

  const field = 'mt-2 w-full rounded-md border border-charcoal/30 bg-warm-white px-4 py-3 text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon';
  return (
    <form onSubmit={submit} className="space-y-6">
      <p className="text-sm text-main/70">Your name, rating and feedback will be public. Your bill ID is for the restaurant’s records and will not be displayed.</p>
      <label className="block font-inter text-sm text-charcoal">Bill ID <input className={field} name="billId" required maxLength={80} autoComplete="off" /></label>
      <label className="block font-inter text-sm text-charcoal">Name to display <input className={field} name="name" required maxLength={80} autoComplete="name" /></label>
      <label className="block font-inter text-sm text-charcoal">Rating <select className={field} name="rating" required defaultValue=""><option value="" disabled>Select a rating</option>{[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} {n === 1 ? 'star' : 'stars'}</option>)}</select></label>
      <label className="block font-inter text-sm text-charcoal">Your feedback <textarea className={field} name="text" required maxLength={1000} rows={5} /></label>
      {status && <p role="alert" className="text-maroon">{status}</p>}
      <button disabled={sending} className="bg-maroon px-6 py-3 text-warm-white disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon">{sending ? 'Sending…' : 'Submit feedback'}</button>
    </form>
  );
}
