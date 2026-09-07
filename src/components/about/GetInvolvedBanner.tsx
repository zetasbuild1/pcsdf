import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./GetInvolvedBanner.module.css";

export default function GetInvolvedBanner() {
  return (
    <section className={styles.ctaSection}>
      {/* Misty Forest Mountains Background */}
      <Image
        src="/images/about/about-cta-bg.jpg"
        alt="Get Involved - PCSDF"
        fill
        className={styles.bgImage}
      />

      <div className={styles.gradientOverlay} />

      {/* Foliage Corner Overlays */}
      <svg
        className={styles.leafDecorationLeft}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-20 220C40 160 120 150 180 170C110 130 50 170 -20 220Z"
          fill="#4ade80"
        />
        <path
          d="M-30 170C30 110 110 100 170 120C100 80 40 120 -30 170Z"
          fill="#22c55e"
        />
      </svg>

      <svg
        className={styles.leafDecorationRight}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M220 -20C160 40 150 120 170 180C130 110 170 50 220 -20Z"
          fill="#4ade80"
        />
        <path
          d="M170 -30C110 30 100 110 120 170C80 100 120 40 170 -30Z"
          fill="#22c55e"
        />
      </svg>

      <div className={styles.container}>
        {/* Left Column: Heading & CTAs */}
        <div className={styles.contentBox}>
          <span className={styles.tag}>GET INVOLVED</span>
          <h2 className={styles.headline}>Be Part of the Change.</h2>
          <p className={styles.subtitle}>
            Support our work, partner with us, or get in touch to learn how you
            can make a difference.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="#support" className={styles.supportBtn}>
              <span>Support Our Work</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/#contact" className={styles.contactBtn}>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Handwritten Calligraphy Script Tagline */}
        <div className={styles.scriptBox}>
          <span className={styles.scriptText}>Peace. Planet. People.</span>
        </div>
      </div>
    </section>
  );
}
