import React from "react";
import ExactNavbar from "@/components/home/ExactNavbar";
import ExactHero from "@/components/home/ExactHero";
import ExactAbout from "@/components/home/ExactAbout";
import ExactBoard from "@/components/home/ExactBoard";
import ExactWork from "@/components/home/ExactWork";
import ExactPartners from "@/components/home/ExactPartners";
import ExactFooter from "@/components/home/ExactFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ExactNavbar />
      <main className="flex-grow">
        <ExactHero />
        <ExactAbout />
        <ExactBoard />
        <ExactWork />
        <ExactPartners />
      </main>
      <ExactFooter />
    </div>
  );
}
