import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import SevenPillars from "@/components/SevenPillars";
import FeaturedInitiatives from "@/components/FeaturedInitiatives";
import SdgsSection from "@/components/SdgsSection";
import NewsStories from "@/components/NewsStories";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImpactStats />
        <SevenPillars />
        <FeaturedInitiatives />
        <SdgsSection />
        <NewsStories />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
