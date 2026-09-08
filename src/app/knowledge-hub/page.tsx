import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KnowledgeHubClient from "@/components/knowledge/KnowledgeHubClient";

export const metadata: Metadata = {
  title: "Knowledge Hub | PCSDF - Peace-Led Climate-Friendly Sustainable Development Forum",
  description:
    "Explore our latest research, publications, case studies, resources and stories that inspire action towards peace, climate resilience and sustainable development.",
  keywords: [
    "PCSDF Knowledge Hub",
    "Climate Action Research",
    "Sustainable Development Case Studies",
    "Peace and Governance",
    "Mangrove Restoration",
    "Rural Clean Energy",
    "SDG Toolkit",
  ],
};

export default function KnowledgeHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <KnowledgeHubClient />
      </main>
      <Footer />
    </div>
  );
}
