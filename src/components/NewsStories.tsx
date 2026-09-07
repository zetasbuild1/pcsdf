import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./NewsStories.module.css";

const NEWS_ARTICLES = [
  {
    image: "/images/news-1.jpg",
    date: "Aug 28, 2025",
    title: "Community-Led Reforestation Shows New Hope for Climate Resilience",
    href: "#news-1",
  },
  {
    image: "/images/news-2.jpg",
    date: "Aug 18, 2025",
    title: "Building Peace Through Local Partnerships",
    href: "#news-2",
  },
  {
    image: "/images/news-3.jpg",
    date: "Aug 10, 2025",
    title: "Small Actions, Big Impact: How Local Communities Lead Climate Solutions",
    href: "#news-3",
  },
  {
    image: "/images/news-4.jpg",
    date: "Jul 22, 2025",
    title: "Blue Economy Initiatives Gain Momentum in Coastal Regions",
    href: "#news-4",
  },
];

export default function NewsStories() {
  return (
    <section className={styles.newsSection} id="news">
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.headerText}>
            <span className="section-tag">LATEST INSIGHTS</span>
            <h2 className={styles.title}>News & Stories</h2>
          </div>
          <a href="#news-all" className={styles.viewAll}>
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
