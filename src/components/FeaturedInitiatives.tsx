import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./FeaturedInitiatives.module.css";

const INITIATIVES = [
  {
    category: "CLIMATE ACTION",
    title: "Reforestation & Ecosystem Restoration",
    desc: "Restoring forests, protecting biodiversity and building climate resilience.",
    image: "/images/reforestation.jpg",
    linkText: "Learn More",
    href: "#reforestation",
  },
  {
    category: "PEACE & INCLUSION",
    title: "Community Resilience & Livelihoods",
    desc: "Supporting vulnerable communities through inclusive, sustainable livelihoods and capacity building.",
    image: "/images/community.jpg",
    linkText: "Learn More",
    href: "#resilience",
  },
  {
    category: "CLEAN ENERGY",
    title: "Renewable Energy for Rural Communities",
    desc: "Expanding clean, affordable energy solutions for a greener and more equitable future.",
    image: "/images/renewable.jpg",
    linkText: "Learn More",
    href: "#clean-energy",
  },
  {
    category: "SUSTAINABLE OCEANS",
    title: "Marine Conservation & Blue Economy",
    desc: "Protecting marine ecosystems and supporting sustainable coastal livelihoods.",
    image: "/images/marine.jpg",
    linkText: "Learn More",
    href: "#marine-conservation",
  },
];

export default function FeaturedInitiatives() {
  return (
    <section className={styles.initiativesSection} id="work">
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.headerText}>
            <span className="section-tag">FEATURED INITIATIVES</span>
            <h2 className={styles.title}>Driving Change on the Ground</h2>
          </div>
          <a href="#initiatives" className={styles.viewAll}>
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
