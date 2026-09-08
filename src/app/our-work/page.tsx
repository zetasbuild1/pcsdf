import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkClient from "@/components/work/WorkClient";

export const metadata: Metadata = {
  title: "Our Work & Initiatives | PCSDF - Peace-Led Climate-Friendly Sustainable Development Forum",
  description:
    "Explore our integrated initiatives spanning coastal mangrove restoration, rural clean energy, peacebuilding dialogue, climate-smart agroforestry, and marine conservation.",
  keywords: [
    "PCSDF Our Work",
    "Mangrove Restoration Field Initiatives",
    "Peacebuilding and Local Governance",
    "Rural Clean Energy Mini-Grids",
    "Climate Smart Agroforestry",
    "Marine Conservation Blue Economy",
    "Seven Pillars of PCSDF",
    "UN SDGs Alignment",
  ],
};

export default function OurWorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <WorkClient />
      </main>
      <Footer />
    </div>
  );
}
