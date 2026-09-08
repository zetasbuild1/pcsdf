"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import styles from "./KnowledgeHero.module.css";

interface KnowledgeHeroProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onSearchSubmit?: (e: React.FormEvent) => void;
}

export default function KnowledgeHero({
  searchQuery = "",
  onSearchChange,
  onSearchSubmit,
}: KnowledgeHeroProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(e);
    } else {
      const articlesSection = document.getElementById("featured-articles");
      if (articlesSection) {
        articlesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className={styles.heroSection}>
      {/* Background Scenic Landscape with Books & Sprout */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/knowledge/knowledge-hero.jpg"
          alt="PCSDF Knowledge Hub - Learn, Share, Create Lasting Change"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>

      {/* Light Gradient Overlay for crisp text legibility */}
      <div className={styles.gradientOverlay} />

      <div className={styles.container}>
        {/* Left Column: Heading, Subtitle & Search */}
        <div className={styles.contentCol}>
          <span className={styles.tag}>KNOWLEDGE HUB</span>
          <h1 className={styles.headline}>
            Learn. Share. Create<br />
            Lasting Change.
          </h1>
          <p className={styles.subtitle}>
            Explore our latest research, publications, case studies, resources
            and stories that inspire action towards peace, climate resilience
            and sustainable development.
          </p>

          <form className={styles.searchForm} onSubmit={handleSubmit}>
            <Search size={18} className={styles.searchIcon} aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              placeholder="Search articles, reports, or topics..."
              className={styles.searchInput}
              aria-label="Search articles, reports, or topics"
            />
            <button type="submit" className={styles.searchBtn}>
              Search
            </button>
          </form>
        </div>

        {/* Right Column: Handwritten Cursive Script Accent */}
        <div className={styles.scriptBox}>
          <span className={styles.scriptText}>
            Knowledge<br />
            builds stronger,<br />
            more resilient<br />
            communities.
          </span>
        </div>
      </div>
    </section>
  );
}
