import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./NewsCtaBanner.module.css";

export default function NewsCtaBanner() {
  return (
    <section className={styles.ctaSection} aria-label="Stay Connected">
      {/* Corner Botanical Foliage Silhouette Overlays */}
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
        <path
          d="M0 240C70 190 150 180 220 200C150 150 70 200 0 240Z"
          fill="#86efac"
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
        <div className={styles.contentBox}>
          <span className={styles.tag}>STAY CONNECTED</span>
          <h2 className={styles.headline}>Be Part of the Change</h2>
          <p className={styles.subtitle}>
            Get involved, stay informed and help us build a peaceful,
            climate-resilient and sustainable future.
          </p>
        </div>

        <div className={styles.buttonGroup}>
          <Link href="#support" className={styles.supportBtn}>
            <span>Support Our Work</span>
            <ArrowRight size={15} />
          </Link>
          <Link href="#contact" className={styles.contactBtn}>
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
