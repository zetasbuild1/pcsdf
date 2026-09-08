import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Sprout, Globe2, Sparkles } from "lucide-react";
import styles from "./AboutImpact.module.css";

const IMPACT_STATS = [
  {
    icon: <Globe2 size={20} strokeWidth={1.75} />,
    number: "193+",
    label: "UN States Spanned",
  },
  {
    icon: <Sparkles size={20} strokeWidth={1.75} />,
    number: "30",
    label: "System Architectures",
  },
  {
    icon: <Leaf size={20} strokeWidth={1.75} />,
    number: "332",
    label: "Taxonomy Sectors",
  },
  {
    icon: <Sprout size={20} strokeWidth={1.75} />,
    number: "9",
    label: "Regenerative Pillars",
  },
];

export default function AboutImpact() {
  return (
    <section className={styles.impactSection} id="impact">
      <div className={styles.container}>
        {/* Left Column: Narrative & Stats */}
        <div className={styles.leftCol}>
          <span className="section-tag">GLOBAL SYSTEMIC REACH</span>
          <h2 className={styles.title}>Systemic Stewardship. Measurable Futures.</h2>
          <p className={styles.description}>
            Our footprint is global and systemic. Through a peace-led, faith- and Indigenous-inspired
            network-of-networks, PCSDF connects partners across 193 UN Member States, two Observer
            States, and key territories. Our impact is measured not only in ecological indicators,
            but in reinforced governance, empowered communities, and intergenerational stewardship of Earth
            and shared cosmic commons.
          </p>

          <Link href="/our-work" className={styles.viewImpactBtn}>
            <span>Explore The Framework</span>
            <ArrowRight size={15} />
          </Link>

          <div className={styles.statsRow}>
            {IMPACT_STATS.map((stat, idx) => (
              <div key={idx} className={styles.statItem}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Photo + Botanical Corner Leaf */}
        <div className={styles.rightCol}>
          {/* Decorative Corner Foliage */}
          <svg
            className={styles.leafTopRight}
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M160 0C110 20 80 80 90 140C110 80 130 40 160 0Z"
              fill="#528a64"
              opacity="0.7"
            />
            <path
              d="M140 -20C90 10 60 70 70 120C90 70 110 30 140 -20Z"
              fill="#3a6f4a"
              opacity="0.6"
            />
            <path
              d="M160 40C120 45 90 75 85 110C110 90 135 75 160 40Z"
              fill="#78ab88"
              opacity="0.5"
            />
          </svg>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/pcsdf/IMG_2768-1024x576.jpeg"
              alt="Systemic Stewardship and Global Impact - PCSDF"
              fill
              className={styles.impactImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
