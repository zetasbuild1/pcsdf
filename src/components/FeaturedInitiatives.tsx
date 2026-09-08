import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./FeaturedInitiatives.module.css";

const INITIATIVES = [
  {
    category: "CONSTITUTIONAL GOVERNANCE",
    title: "30-System Architecture & 332-Sector Taxonomy",
    desc: "World's first constitutional operating system holding climate, peace, economy, ecosystems, and technology together as one living whole.",
    image: "/images/pcsdf/IMG_2680-1.jpeg",
    linkText: "Explore System Architecture",
    href: "/our-work#systems",
  },
  {
    category: "PEACE & DIPLOMACY",
    title: "Peace-Led Multilateral Cooperation & Accords",
    desc: "Bridging conflict resolution, historical peace accords, and systemic environmental peacebuilding across 193 UN Member States.",
    image: "/images/pcsdf/IMG_2682-5-1024x683.jpeg",
    linkText: "Read Diplomatic Framework",
    href: "/our-work#peace-accords",
  },
  {
    category: "REGENERATIVE STEWARDSHIP",
    title: "MEAL & Stewardship 'Hive'",
    desc: "Integrated monitoring, evaluation, accountability, and learning system tracking progress across all sectors, scales, and generations.",
    image: "/images/pcsdf/IMG_2768-1024x576.jpeg",
    linkText: "Learn About The Hive",
    href: "/our-work#hive",
  },
  {
    category: "EARTH TO ORBIT",
    title: "Planetary & Cosmic Commons Stewardship",
    desc: "Expanding sustainability stewardship from local ecosystems to planetary boundaries, orbital commons, and outer space.",
    image: "/images/pcsdf/IMG_2541-1024x1024.jpeg",
    linkText: "Explore Commons Governance",
    href: "/our-work#commons",
  },
];

export default function FeaturedInitiatives() {
  return (
    <section className={styles.initiativesSection} id="work">
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.headerText}>
            <span className="section-tag">GLOBAL INITIATIVES</span>
            <h2 className={styles.title}>Governing Sustainability Across Systems</h2>
          </div>
          <a href="/our-work" className={styles.viewAll}>
            <span>View All Initiatives</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <div className={styles.cardsGrid}>
          {INITIATIVES.map((initiative, idx) => (
            <article key={idx} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className={styles.cardBody}>
                <span className={styles.categoryTag}>
                  {initiative.category}
                </span>
                <h3 className={styles.cardTitle}>{initiative.title}</h3>
                <p className={styles.cardDesc}>{initiative.desc}</p>
                <a href={initiative.href} className={styles.cardLink}>
                  <span>{initiative.linkText}</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
