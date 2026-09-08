import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | PCSDF - Peace-Led Climate-Friendly Sustainable Development Forum",
  description:
    "Get in touch with the PCSDF Global Secretariat and regional hubs. Inquire about partnerships, research collaborations, volunteering, and community climate initiatives.",
  keywords: [
    "Contact PCSDF",
    "PCSDF Global Secretariat",
    "Climate Partnership Inquiries",
    "Peacebuilding Collaboration",
    "Regional Hubs Colombo Geneva",
    "SDG Partnership Forum",
  ],
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <ContactClient />
      </main>
      <Footer />
    </div>
  );
}
