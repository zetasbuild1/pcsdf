import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FounderIntro from "@/components/home/FounderIntro";
import UnfinishedAgenda from "@/components/home/UnfinishedAgenda";
import SevenPillars from "@/components/SevenPillars";
import FeaturedInitiatives from "@/components/FeaturedInitiatives";
import SdgsSection from "@/components/SdgsSection";
import FounderCovenant from "@/components/home/FounderCovenant";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FounderIntro />
        <UnfinishedAgenda />
        <SevenPillars />
        <FeaturedInitiatives />
        <SdgsSection />
        <FounderCovenant />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
