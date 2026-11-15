import type { Metadata } from "next";
import { cormorant, playfair, inter, manrope, notoNastaliq, gulzar } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mataam Shinwari | Authentic Shinwari Restaurant in Hyderabad",
  description:
    "Discover Mataam Shinwari — authentic Shinwari flavours, traditional dishes and a memorable dining experience in Hyderabad, Sindh. Famous for Peshawari Karahi, Dum Pukht, BBQ and more.",
  keywords: [
    "Mataam Shinwari",
    "Mataam Shinwari Hyderabad",
    "Shinwari restaurant Hyderabad",
    "Peshawari Karahi Hyderabad",
    "Mutton Karahi Hyderabad",
    "Pakistani restaurant Hyderabad",
    "BBQ Hyderabad",
    "Dum Pukht Hyderabad",
    "Shinwari food",
  ],
  openGraph: {
    title: "Mataam Shinwari | Authentic Shinwari Restaurant in Hyderabad",
    description:
      "Authentic Shinwari flavours, traditional dishes and a memorable dining experience in Hyderabad, Sindh.",
    type: "website",
    locale: "en_PK",
    siteName: "Mataam Shinwari",
  },
};

const fontVariables = [
  cormorant.variable,
  playfair.variable,
  inter.variable,
  manrope.variable,
  notoNastaliq.variable,
  gulzar.variable,
].join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body className="min-h-screen bg-cream text-text-main">
        <noscript><style>{`[style*="opacity:0"] { opacity: 1 !important; transform: none !important; } header[style] { transform: none !important; }`}</style></noscript>
        {children}
      </body>
    </html>
  );
}
