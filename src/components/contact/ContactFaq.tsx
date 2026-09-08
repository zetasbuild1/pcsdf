"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./ContactFaq.module.css";

const FAQS = [
  {
    q: "How can our organization partner with PCSDF on climate or peacebuilding programs?",
    a: "We welcome partnerships with local grassroots groups, civil society organizations, government agencies, and international bodies. You can submit an inquiry through our contact form selecting 'Partnership & Funding', or email partnerships@pcsdf.org with your concept note or organizational profile.",
  },
  {
    q: "How can researchers and institutions contribute to the Knowledge Hub?",
    a: "PCSDF collaborates with universities, think tanks, and independent researchers to publish peer-reviewed case studies, policy briefs, and field reports. Submissions related to climate adaptation, peace governance, renewable energy, and marine ecosystems can be sent to our research desk at info@pcsdf.org.",
  },
  {
    q: "Can individuals volunteer or participate in grassroots initiatives?",
    a: "Yes! We run community volunteer cohorts for reforestation campaigns, youth climate advocacy, and coastal cleanup drives. Select 'Volunteering & Youth Action' in the inquiry form to join our volunteer database and receive alerts for upcoming initiatives.",
  },
  {
    q: "What is the typical timeframe for project proposal reviews?",
    a: "Our Secretariat reviews inquiries on a rolling basis. Standard inquiries receive a response within 24 to 48 business hours. Comprehensive formal partnership proposals are evaluated by our program committee within 10 to 14 business days.",
  },
  {
    q: "How does PCSDF ensure transparency and accountability in funding?",
    a: "PCSDF is governed by strict financial transparency standards and independent annual auditing. All project funding directly supports community-led field implementation with transparent public reporting and regular impact assessments shared with partners and donors.",
  },
];

export default function ContactFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.headerText}>
          <span className={styles.tag}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.title}>Common Questions &amp; Answers</h2>
          <p className={styles.subtitle}>
            Find quick answers regarding collaboration pathways, research
            contributions, and organizational engagement.
          </p>
        </div>

        <div className={styles.accordionList}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqItem} ${
                  isOpen ? styles.faqItemOpen : ""
                }`}
              >
                <button
                  type="button"
                  className={styles.faqTrigger}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className={styles.iconWrap}>
                    <ChevronDown size={16} />
                  </span>
                </button>
                {isOpen && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
