"use client";

import React from "react";
import {
  Leaf,
  Users,
  Sprout,
  BookOpen,
  PlaySquare,
  ArrowRight,
} from "lucide-react";
import styles from "./CategoryExplorer.module.css";

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bg: string;
  iconBg: string;
  iconColor: string;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: "climate-action",
    title: "Climate Action",
    description: "Climate change, adaptation, mitigation and resilience.",
    icon: <Leaf size={22} />,
    bg: "#ebf6ef",
    iconBg: "#dcf0e2",
    iconColor: "#175338",
  },
  {
    id: "peace-governance",
    title: "Peace & Governance",
    description:
      "Conflict prevention, community cohesion and inclusive governance.",
    icon: <Users size={22} />,
    bg: "#eaf4f8",
    iconBg: "#d7edf5",
    iconColor: "#1a5b7d",
  },
  {
    id: "sustainable-development",
    title: "Sustainable Development",
    description:
      "Livelihoods, food security, clean energy and responsible resource use.",
    icon: <Sprout size={22} />,
    bg: "#f2f6ee",
    iconBg: "#e2edd9",
    iconColor: "#39652a",
  },
  {
    id: "research-publications",
    title: "Research & Publications",
    description: "Reports, studies, policy briefs and knowledge products.",
    icon: <BookOpen size={22} />,
    bg: "#f0f2f9",
    iconBg: "#dfe4f7",
    iconColor: "#32497d",
  },
  {
    id: "media-stories",
    title: "Media & Stories",
    description:
      "Impact stories, videos, photo galleries and community voices.",
    icon: <PlaySquare size={22} />,
    bg: "#eef6f2",
    iconBg: "#dceee3",
    iconColor: "#1e5e43",
  },
];

interface CategoryExplorerProps {
  selectedCategory?: string | null;
  onSelectCategory?: (categoryId: string | null) => void;
}

export default function CategoryExplorer({
  selectedCategory,
  onSelectCategory,
}: CategoryExplorerProps) {
  const handleCardClick = (id: string) => {
    if (onSelectCategory) {
      if (selectedCategory === id) {
        onSelectCategory(null);
      } else {
        onSelectCategory(id);
      }
    }
    const articlesSection = document.getElementById("featured-articles");
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.categorySection} id="categories">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.headerText}>
            <span className={styles.tag}>EXPLORE BY CATEGORY</span>
            <h2 className={styles.title}>Find What You&apos;re Looking For</h2>
          </div>
          <button
            type="button"
            className={styles.viewAll}
            onClick={() => onSelectCategory && onSelectCategory(null)}
          >
            <span>View All Resources</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className={styles.grid}>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`${styles.card} ${isSelected ? styles.cardActive : ""}`}
                style={{ backgroundColor: cat.bg }}
                onClick={() => handleCardClick(cat.id)}
                aria-pressed={isSelected}
              >
                <div className={styles.cardTop}>
                  <div
                    className={styles.iconWrapper}
                    style={{
                      backgroundColor: cat.iconBg,
                      color: cat.iconColor,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                  <p className={styles.cardDesc}>{cat.description}</p>
                </div>
                <div className={styles.arrowBtn} aria-hidden="true">
                  <ArrowRight size={14} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
