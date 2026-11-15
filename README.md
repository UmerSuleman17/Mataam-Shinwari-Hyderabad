# 🍢 Mataam Shinwari (مطعم شنواری)
### Official Brand & Showcase Website | ذائقہ روایت کا

A premium, modern restaurant landing page and digital brand presence for **Mataam Shinwari**, located in Hyderabad, Sindh, Pakistan. Designed with a luxury aesthetic that celebrates authentic Shinwari culture, traditional Pakistani heritage, and open-flame cooking.

---

## ✨ Highlights & Features

- **🔥 Cinematic Brand Identity:** Warm cream canvas paired with deep charcoal, flame orange, and royal maroon inspired by traditional embers and Shinwari karahi culture.
- **📜 Bilingual Typography:** Native support for Urdu calligraphy and English editorial styling using Gulzar, Noto Nastaliq Urdu, Playfair Display, and Cormorant Garamond.
- **✨ Animated Preloader:** Custom brand loader with flame glow transitions into the hero section.
- **🍖 Signature Menu Showcase:** An editorial visual catalog featuring Dum Pukht, Peshawari Karahi, White Karahi, Chicken Cheese Handi, Gola Kabab, and more.
- **📸 From Fire to Table:** An immersive photo gallery spotlighting the restaurant's authentic kitchen crafts and table service.
- **⭐ Genuine Guest Reviews:** Verified customer ratings, feedback, and social proof.
- **📍 Location & Direct Contact:** Instant directions to Autobahn Road, Hyderabad, call-to-order links, and official social media integrations (Instagram & Facebook).
- **📱 Fully Responsive:** Optimized across desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Google Fonts (`Playfair Display`, `Cormorant Garamond`, `Inter`, `Manrope`, `Gulzar`, `Noto Nastaliq Urdu`)
- **Hosting:** Netlify (with `@netlify/plugin-nextjs`)

---

## 🚀 Getting Started

### Installation

1. Navigate to the app directory:
   ```bash
   cd app-build
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Credits & Rights

Developed with passion by **Wisdom Tech**.  
All rights reserved © 2026 **Mataam Shinwari**.

## Guest feedback setup

The feedback form is available at `/feedback?code=...` when `FEEDBACK_ACCESS_CODE` and `FEEDBACK_STORE_NAME` are set as server-side Netlify environment variables. Use different store names and access codes for production and deploy previews. Generate a long random value, configure it for the intended deployment context, and put the full HTTPS URL in the restaurant QR code. Do not commit the value or put a link to it on the public site. Replacing the value invalidates existing QR codes.

A shared QR URL can be copied; it does not verify a visit. Bill IDs are recorded as supplied, not verified. Reviews are published immediately. The public API omits bill IDs, but customers should avoid including private details in the public review text. Staff with access to the Netlify project can inspect the configured feedback store under Data & Storage > Blobs, including bill IDs. Restrict project access accordingly.

Netlify Blobs is required for storage; the feedback API returns an error outside a configured Netlify environment. Test with an isolated Netlify deployment or Netlify Dev, not a production store: site-wide stores are shared across deploys. Public reads show up to 50 recent submissions. Netlify edge rules limit feedback page requests and feedback POST requests per IP and domain; verify that Netlify accepts both rules in the deploy log. Enforcement may be delayed and shared restaurant networks may reach the limit. Moderation is not yet implemented; assess abuse protection before publication.
