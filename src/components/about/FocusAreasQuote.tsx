import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./FocusAreasQuote.module.css";

export default function FocusAreasQuote() {
  return (
    <section className={styles.focusQuoteSection}>
      <div className={styles.container}>
        {/* Left Column: Heading & CTA */}
        <div className={styles.leftCol}>
          <span className="section-tag">THE REGENERATIVE IMPERATIVE</span>
          <h2 className={styles.title}>Our Focus Areas</h2>
          <p className={styles.desc}>
            We work across nine interconnected regenerative pillars and 30 systems
            to steward planetary boundaries and safeguard future generations.
          </p>
          <Link href="/our-work" className={styles.exploreBtn}>
            <span>Explore Our Work</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Center Column: Botanical Leaf Sprig Illustration */}
        <div className={styles.centerCol}>
          <svg
            className={styles.botanicalSprig}
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Main stem */}
            <path
              d="M30 140C60 110 80 70 110 30"
              stroke="#fca5a5"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Leaves pairs */}
            <path
              d="M50 120C40 100 50 85 70 95C70 115 55 125 50 120Z"
              fill="#f87171"
              opacity="0.7"
            />
            <path
              d="M70 100C85 90 105 95 100 115C85 115 75 105 70 100Z"
              fill="#ef4444"
              opacity="0.65"
            />
            <path
              d="M75 80C65 60 75 45 95 55C95 75 80 85 75 80Z"
              fill="#f87171"
              opacity="0.7"
            />
            <path
              d="M95 60C110 50 130 55 125 75C110 75 100 65 95 60Z"
              fill="#ef4444"
              opacity="0.65"
            />
            {/* Top leaf */}
            <path
              d="M110 30C105 10 120 10 130 25C130 40 115 45 110 30Z"
              fill="#dc2626"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Right Column: Editorial Quote */}
        <div className={styles.rightCol}>
          <blockquote className={styles.quoteText}>
            “Did We Hear the Voices of the Poor at the Turn of the Century? If future generations,
            nature, and the global commons cannot speak for themselves, who will speak for them?”
          </blockquote>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-900 font-mono">
            — Chaitri (Chai) N. Hapugalle, Founder &amp; Director
          </p>
        </div>
      </div>
    </section>
  );
}
