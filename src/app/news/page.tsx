import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsClient from "@/components/news/NewsClient";

export const metadata: Metadata = {
  title: "News & Stories | PCSDF - Peace-Led Climate-Friendly Sustainable Development Forum",
  description:
    "Stay updated with our latest initiatives, events, success stories and insights on climate action, peacebuilding and sustainable development.",
  keywords: [
    "PCSDF News",
    "Climate Action Stories",
    "Community Peacebuilding",
    "Sustainable Development News",
    "Coastal Reforestation",
    "Rural Clean Energy",
    "Marine Conservation",
  ],
};

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <NewsClient />
      </main>
      <Footer />
    </div>
  );
}
