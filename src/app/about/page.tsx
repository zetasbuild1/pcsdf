import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import FocusAreasQuote from "@/components/about/FocusAreasQuote";
import AboutPillars from "@/components/about/AboutPillars";
import AboutImpact from "@/components/about/AboutImpact";
import TeamAndPartners from "@/components/about/TeamAndPartners";
import GetInvolvedBanner from "@/components/about/GetInvolvedBanner";

export const metadata: Metadata = {
  title: "About Us | PCSDF - Peace-Led Climate-Friendly Sustainable Development Forum",
  description:
    "Together for a peaceful, resilient and sustainable world. Learn about our mission, vision, values, story, and seven pillars.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <OurStory />
        <MissionVisionValues />
        <FocusAreasQuote />
        <AboutPillars />
        <AboutImpact />
        <TeamAndPartners />
        <GetInvolvedBanner />
      </main>
      <Footer />
    </div>
  );
}
