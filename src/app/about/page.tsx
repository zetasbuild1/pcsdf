import React from "react";
import type { Metadata } from "next";
import ExactNavbar from "@/components/home/ExactNavbar";
import ExactFooter from "@/components/home/ExactFooter";
import AboutExactHero from "@/components/about/AboutExactHero";
import AboutExactWhoWeAre from "@/components/about/AboutExactWhoWeAre";
import AboutExactBoard from "@/components/about/AboutExactBoard";
import AboutExactCommitment from "@/components/about/AboutExactCommitment";

export const metadata: Metadata = {
  title: "About Us | PCSDF - Peace-Led Climate-Friendly Sustainable Development Forum",
  description:
    "Together for a peaceful, inclusive and climate-friendly future through sustainable development.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ExactNavbar />
      <main className="flex-grow">
        <AboutExactHero />
        <AboutExactWhoWeAre />
        <AboutExactBoard />
        <AboutExactCommitment />
      </main>
      <ExactFooter />
    </div>
  );
}
