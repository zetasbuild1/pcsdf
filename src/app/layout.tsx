import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PCSDF | Peace-Led Climate-Friendly Sustainable Development Forum",
  description:
    "Building peace, protecting our planet, and shaping a sustainable future at the intersection of peace, climate action, and sustainable development.",
  keywords: [
    "PCSDF",
    "Peace-Led Climate-Friendly Sustainable Development Forum",
    "Sustainable Development Goals",
    "Climate Action",
    "Community Resilience",
    "Reforestation",
    "Peacebuilding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${caveat.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
