import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Building Peace, Protecting Our Planet - PCSDF"
        fill
        priority
        className={styles.bgImage}
      />

      {/* Gradient Readability Overlay */}
      <div className={styles.gradientOverlay} />

      {/* Botanical Leaf Top Left */}
      <svg
        className={styles.leafTopLeft}
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0C50 15 80 65 70 125C55 70 30 35 0 0Z"
          fill="#336946"
          opacity="0.75"
        />
        <path
          d="M15 -15C75 10 115 65 105 130C85 75 50 30 15 -15Z"
          fill="#4d855e"
          opacity="0.65"
        />
        <path
          d="M45 -25C100 5 145 55 135 110C110 65 75 25 45 -25Z"
          fill="#78ab88"
          opacity="0.5"
        />
        <path
          d="M0 45C35 40 70 65 80 100C55 85 30 70 0 45Z"
          fill="#2d5e3e"
          opacity="0.7"
        />
      </svg>

      {/* Botanical Leaf Bottom Left */}
      <svg
        className={styles.leafBottomLeft}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-20 260C40 180 130 160 210 200C130 150 50 180 -20 260Z"
          fill="#2b5a3c"
          opacity="0.85"
        />
        <path
          d="M0 220C60 140 160 130 230 160C150 120 70 140 0 220Z"
          fill="#3e7550"
          opacity="0.75"
        />
        <path
          d="M-30 200C30 120 110 90 190 100C120 80 50 125 -30 200Z"
          fill="#58916c"
          opacity="0.65"
        />
        <path
          d="M-40 240C20 180 80 160 140 180C90 150 30 180 -40 240Z"
          fill="#7fb593"
          opacity="0.5"
        />
      </svg>

      {/* Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.contentBox}>
          <h1 className={styles.headline}>
            <span>Building Peace.</span>
            <span>Protecting Our Planet.</span>
            <span>Shaping a Sustainable Future.</span>
          </h1>

          <p className={styles.subheadline}>
            We work at the intersection of peace, climate action and sustainable
            development — empowering communities, strengthening partnerships and
            advancing the Sustainable Development Goals.
          </p>

          <div className={styles.buttonGroup}>
            <a href="#work" className={styles.primaryBtn}>
              <span>Explore Our Work</span>
              <ArrowRight size={16} />
            </a>

            <a href="#partner" className={styles.outlineBtn}>
              <span>Partner With Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
