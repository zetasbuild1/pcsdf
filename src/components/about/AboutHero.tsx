import React from "react";
import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.heroContainer}>
      {/* Background Image */}
      <Image
        src="/images/about/about-hero.jpg"
        alt="Together for a Peaceful, Resilient and Sustainable World - PCSDF"
        fill
        priority
        className={styles.bgImage}
      />

      {/* Gradient Readability Overlay */}
      <div className={styles.gradientOverlay} />

      {/* Botanical Motif Top Left */}
      <svg
        className={styles.leafTopLeft}
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 0C50 15 80 65 70 125C55 70 30 35 0 0Z"
          fill="#dc2626"
          opacity="0.3"
        />
        <path
          d="M15 -15C75 10 115 65 105 130C85 75 50 30 15 -15Z"
          fill="#ef4444"
          opacity="0.25"
        />
        <path
          d="M45 -25C100 5 145 55 135 110C110 65 75 25 45 -25Z"
          fill="#f87171"
          opacity="0.2"
        />
      </svg>

      {/* Botanical Motif Bottom Left */}
      <svg
        className={styles.leafBottomLeft}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-20 260C40 180 130 160 210 200C130 150 50 180 -20 260Z"
          fill="#b91c1c"
          opacity="0.3"
        />
        <path
          d="M0 220C60 140 160 130 230 160C150 120 70 140 0 220Z"
          fill="#dc2626"
          opacity="0.25"
        />
        <path
          d="M-30 200C30 120 110 90 190 100C120 80 50 125 -30 200Z"
          fill="#ef4444"
          opacity="0.2"
        />
      </svg>

      {/* Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.contentBox}>
          <span className="section-tag">ABOUT US</span>
          <h1 className={styles.headline}>
            <span>Together for a</span>
            <span>Peaceful, Resilient and</span>
            <span>Sustainable World</span>
          </h1>

          <p className={styles.subheadline}>
            We are the Peace-Led Climate Friendly Sustainable Development Forum
            (PCSDF) — a global partnership working with communities,
            governments and partners to build a more peaceful, climate-resilient
            and inclusive future.
          </p>
        </div>
      </div>
    </section>
  );
}
