"use client";

import React from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import RegionalHubs from "./RegionalHubs";
import ContactFaq from "./ContactFaq";
import ContactCtaBanner from "./ContactCtaBanner";

export default function ContactClient() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <RegionalHubs />
      <ContactFaq />
      <ContactCtaBanner />
    </>
  );
}
