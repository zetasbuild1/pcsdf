import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./NewsStories.module.css";

const NEWS_ARTICLES = [
  {
    image: "/images/pcsdf/IMG_2541-1024x1024.jpeg",
    date: "Feb 20, 2026",
    title: "Earth-to-Orbit Governance: Advancing Planetary & Cosmic Commons Stewardship",
    href: "/news",
  },
  {
    image: "/images/pcsdf/IMG_1963-819x1024.jpeg",
    date: "Jan 15, 2026",
    title: "Multidimensional Poverty: Reaffirming Kofi Annan's Global Call on Human Security",
    href: "/news",
  },
  {
    image: "/images/pcsdf/IMG_0685-7-768x1024.jpeg",
    date: "Dec 24, 2025",
    title: "Four Years of PCSDF: From Keong Saik Road Launch to 30-System Global Architecture",
    href: "/news",
  },
  {
    image: "/images/community.jpg",
    date: "Nov 12, 2025",
    title: "Indigenous Wisdom and Faith Traditions in Climate Resilience & Peacebuilding",
    href: "/news",
  },
];

export default function NewsStories() {
  return (
    <section className={styles.newsSection} id="news">
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.headerText}>
            <span className="section-tag">LATEST INSIGHTS</span>
            <h2 className={styles.title}>News & Strategic Briefings</h2>
          </div>
          <a href="/news" className={styles.viewAll}>
            <span>View All News</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <div className={styles.newsGrid}>
          {NEWS_ARTICLES.map((article, idx) => (
            <article key={idx} className={styles.newsCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className={styles.cardBody}>
                <span className={styles.date}>{article.date}</span>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <a href={article.href} className={styles.readMore}>
                  <span>Read More</span>
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
