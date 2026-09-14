import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import styles from "./ContactCtaBanner.module.css";

export default function ContactCtaBanner() {
  return (
    <section className={styles.ctaSection} aria-label="Support Our Mission">
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
          fill="#f87171"
        />
        <path
          d="M-30 170C30 110 110 100 170 120C100 80 40 120 -30 170Z"
          fill="#dc2626"
        />
        <path
          d="M0 240C70 190 150 180 220 200C150 150 70 200 0 240Z"
          fill="#fca5a5"
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
          fill="#f87171"
        />
        <path
          d="M170 -30C110 30 100 110 120 170C80 100 120 40 170 -30Z"
          fill="#dc2626"
        />
      </svg>

      <div className={styles.container}>
        <div className={styles.contentBox}>
          <span className={styles.tag}>COLLABORATE FOR CHANGE</span>
          <h2 className={styles.headline}>Together for a Sustainable World</h2>
          <p className={styles.subtitle}>
            Explore our open research publications, support grassroots field
            initiatives, or partner with our regional hubs to accelerate peace
            and climate action.
          </p>
        </div>

        <div className={styles.buttonGroup}>
          <Link href="#support" className={styles.supportBtn}>
            <span>Support Our Work</span>
            <ArrowRight size={15} />
          </Link>
          <Link href="/knowledge-hub" className={styles.knowledgeBtn}>
            <BookOpen size={15} />
            <span>Explore Knowledge Hub</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
