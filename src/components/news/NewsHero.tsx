"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import styles from "./NewsHero.module.css";

interface NewsHeroProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onSearchSubmit?: (e: React.FormEvent) => void;
}

export default function NewsHero({
  searchQuery = "",
  onSearchChange,
  onSearchSubmit,
}: NewsHeroProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(e);
    } else {
      const newsSection = document.getElementById("all-news");
      if (newsSection) {
        newsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className={styles.heroSection}>
      {/* Background Scenic Landscape with Mountain Traveler */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/news/news-hero.jpg"
          alt="PCSDF Latest News & Stories"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>

      {/* Soft gradient overlay for crisp legibility */}
      <div className={styles.gradientOverlay} />

      <div className={styles.container}>
        <div className={styles.contentCol}>
          <span className={styles.tag}>NEWS & STORIES</span>
          <h1 className={styles.headline}>Latest News & Stories</h1>
          <p className={styles.subtitle}>
            Stay updated with our latest initiatives, events, success stories
            and insights on climate action, peacebuilding and sustainable
            development.
          </p>

          <form className={styles.searchForm} onSubmit={handleSubmit}>
            <Search size={18} className={styles.searchIcon} aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              placeholder="Search news, stories, or topics..."
              className={styles.searchInput}
              aria-label="Search news, stories, or topics"
            />
            <button type="submit" className={styles.searchBtn}>
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
