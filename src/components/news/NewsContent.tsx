"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Leaf,
  Users,
  Sprout,
  Briefcase,
  Globe,
  Compass,
  Mail,
  Tag,
  CheckCircle2,
} from "lucide-react";
import styles from "./NewsContent.module.css";
import NewsFeaturedStory from "./NewsFeaturedStory";

export interface NewsCardItem {
  id: string;
  category: string;
  categoryId: string;
  badgeBg: string;
  badgeColor: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  href: string;
}

export const NEWS_STORIES: NewsCardItem[] = [
  {
    id: "board-of-peace-inaugural",
    category: "PEACE & GOVERNANCE",
    categoryId: "peace-governance",
    badgeBg: "#e6f1f8",
    badgeColor: "#17537b",
    date: "Feb 20, 2026",
    title: "Inaugural Meeting of the Board of Peace at US Institute of Peace in Washington, DC",
    excerpt:
      "World leaders and international representatives convened to inaugurate the Board of Peace, focusing on Gaza stabilization and broader systemic conflict transformation.",
    image: "/images/pcsdf/IMG_2682-5-1024x683.jpeg",
    tags: ["#Peacebuilding", "#MultilateralDiplomacy", "#GlobalCommons"],
    href: "#board-of-peace-inaugural",
  },
  {
    id: "multidimensional-poverty-human-security",
    category: "SUSTAINABLE DEVELOPMENT",
    categoryId: "sustainable-development",
    badgeBg: "#eaf5ee",
    badgeColor: "#17633e",
    date: "Jan 15, 2026",
    title: "Multidimensional Poverty: Reaffirming Kofi Annan's Call on Human Security",
    excerpt:
      "Reflecting on Kofi Annan's historic affirmation: 'Extreme poverty anywhere is a threat to human security everywhere,' and Dr. Indermit Gill's insights on economic structural resilience.",
    image: "/images/pcsdf/IMG_1963-819x1024.jpeg",
    tags: ["#HumanSecurity", "#SDGs", "#IndermitGill"],
    href: "#multidimensional-poverty-human-security",
  },
  {
    id: "san-francisco-peace-treaty",
    category: "PEACE & GOVERNANCE",
    categoryId: "peace-governance",
    badgeBg: "#e6f1f8",
    badgeColor: "#17537b",
    date: "Dec 18, 2025",
    title: "Historic Antecedents: The San Francisco Peace Treaty & Environmental Diplomacy",
    excerpt:
      "Drawing vital lessons from the 1951 San Francisco Peace Conference and J.R. Jayawardene's message of friendship to forge peace-led climate negotiations today.",
    image: "/images/pcsdf/IMG_2711.jpeg",
    tags: ["#PeaceAccords", "#Diplomacy", "#HistoricTreaties"],
    href: "#san-francisco-peace-treaty",
  },
  {
    id: "acled-conflict-tracker-index",
    category: "CLIMATE ACTION",
    categoryId: "climate-action",
    badgeBg: "#fbf3e0",
    badgeColor: "#8b630e",
    date: "Nov 28, 2025",
    title: "ACLED Conflict Index: Analyzing Intersecting Climate & Conflict Hotspots",
    excerpt:
      "Examining ACLED conflict indicators across deadliness, civilian danger, and geographic diffusion to design targeted ecological stabilization in vulnerable territories.",
    image: "/images/pcsdf/IMG_2768-1024x576.jpeg",
    tags: ["#ConflictIndex", "#ACLED", "#ClimateResilience"],
    href: "#acled-conflict-tracker-index",
  },
  {
    id: "four-years-pcsdf-journey",
    category: "GLOBAL GOALS",
    categoryId: "global-goals",
    badgeBg: "#f3e7f8",
    badgeColor: "#6e278f",
    date: "Oct 14, 2025",
    title: "Four Years of PCSDF: From Keong Saik Road Launch to 30-System Global Architecture",
    excerpt:
      "Founder and Director Chaitri (Chai) N. Hapugalle traces the evolution of the Forum from Singapore incorporation into a constitutional operating system for planetary futures.",
    image: "/images/pcsdf/IMG_0685-7-768x1024.jpeg",
    tags: ["#PCSDF", "#SingaporeCLG", "#Intergenerational"],
    href: "#four-years-pcsdf-journey",
  },
  {
    id: "faith-indigenous-ecological-stewardship",
    category: "BIODIVERSITY",
    categoryId: "biodiversity",
    badgeBg: "#e2f6f8",
    badgeColor: "#126d7c",
    date: "Sep 05, 2025",
    title: "Faith Traditions and Indigenous Knowledge in Polycrisis Governance",
    excerpt:
      "Synthesizing ancient spiritual stewardship, sacred natural sites, and Indigenous biocultural diversity with cutting-edge Earth system science and planetary boundary governance.",
    image: "/images/pcsdf/IMG_2680-1.jpeg",
    tags: ["#IndigenousKnowledge", "#FaithTraditions", "#Stewardship"],
    href: "#faith-indigenous-ecological-stewardship",
  },
];

const NEWS_CATEGORIES = [
  { id: "climate-action", label: "Climate Action", count: 12, icon: <Leaf size={16} /> },
  { id: "peace-governance", label: "Peace & Governance", count: 8, icon: <Users size={16} /> },
  { id: "sustainable-development", label: "Sustainable Development", count: 14, icon: <Sprout size={16} /> },
  { id: "livelihoods", label: "Livelihoods", count: 7, icon: <Briefcase size={16} /> },
  { id: "biodiversity", label: "Biodiversity", count: 6, icon: <Globe size={16} /> },
  { id: "global-goals", label: "Global Goals", count: 9, icon: <Compass size={16} /> },
  { id: "events", label: "Events", count: 5, icon: <Calendar size={16} /> },
];

const POPULAR_TAGS = [
  "#ClimateAction",
  "#SDGs",
  "#Community",
  "#Sustainability",
  "#Peacebuilding",
  "#Resilience",
];

interface NewsContentProps {
  searchQuery?: string;
  selectedCategory?: string | null;
  selectedTag?: string | null;
  onSelectCategory?: (id: string | null) => void;
  onSelectTag?: (tag: string | null) => void;
  onClearFilters?: () => void;
}

export default function NewsContent({
  searchQuery = "",
  selectedCategory = null,
  selectedTag = null,
  onSelectCategory,
  onSelectTag,
  onClearFilters,
}: NewsContentProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  // Filter news articles based on search query, category, and tag
  const filteredStories = NEWS_STORIES.filter((item) => {
    const matchesCategory = selectedCategory
      ? item.categoryId === selectedCategory ||
        item.category.toLowerCase().includes(selectedCategory.replace("-", " "))
      : true;

    const matchesTag = selectedTag ? item.tags.includes(selectedTag) : true;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = query
      ? item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      : true;

    return matchesCategory && matchesTag && matchesSearch;
  });

  return (
    <section className={styles.section} id="all-news">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left Column: Featured Spotlight Story + All News Cards */}
          <div className={styles.mainCol}>
            {/* Top Featured Spotlight Card */}
            <NewsFeaturedStory />

            {/* All News Header */}
            <div className={styles.sectionHeader}>
              <div className={styles.headerText}>
                <span className={styles.tag}>LATEST NEWS</span>
                <h2 className={styles.sectionTitle}>All News & Stories</h2>
              </div>
              <button
                type="button"
                className={styles.viewAll}
                onClick={() => onClearFilters && onClearFilters()}
              >
                <span>View All News</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* News Grid */}
            {filteredStories.length === 0 ? (
              <div className={styles.noResults}>
                <h3 className={styles.noResultsTitle}>No stories found</h3>
                <p className={styles.noResultsText}>
                  We couldn&apos;t find any stories matching your criteria. Try
                  a different search term or clear filters.
                </p>
                {onClearFilters && (
                  <button
                    type="button"
                    className={styles.resetBtn}
                    onClick={onClearFilters}
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            ) : (
              <div className={styles.cardsGrid}>
                {filteredStories.map((story) => (
                  <article key={story.id} className={styles.newsCard}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={styles.cardImage}
                      />
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.metaRow}>
                        <span
                          className={styles.badge}
                          style={{
                            backgroundColor: story.badgeBg,
                            color: story.badgeColor,
                          }}
                        >
                          {story.category}
                        </span>
                        <span className={styles.dateWithIcon}>
                          <Calendar
                            size={12}
                            className={styles.calendarIcon}
                            aria-hidden="true"
                          />
                          <span>{story.date}</span>
                        </span>
                      </div>

                      <h3 className={styles.cardTitle}>{story.title}</h3>
                      <p className={styles.cardDesc}>{story.excerpt}</p>

                      <Link href={story.href} className={styles.readMore}>
                        <span>Read More</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <aside className={styles.sidebar}>
            {/* Widget 1: News Categories */}
            <div className={styles.categoriesCard}>
              <div className={styles.sidebarHeader}>
                <Leaf size={18} className={styles.headerIcon} />
                <h3 className={styles.sidebarTitle}>News Categories</h3>
              </div>
              <ul className={styles.categoriesList}>
                {NEWS_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <li key={cat.id} className={styles.categoryItem}>
                      <button
                        type="button"
                        className={`${styles.categoryBtn} ${
                          isActive ? styles.categoryBtnActive : ""
                        }`}
                        onClick={() =>
                          onSelectCategory &&
                          onSelectCategory(isActive ? null : cat.id)
                        }
                      >
                        <div className={styles.categoryLeft}>
                          <span className={styles.categoryIcon}>{cat.icon}</span>
                          <span>{cat.label}</span>
                        </div>
                        <span className={styles.categoryCount}>{cat.count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Widget 2: Subscribe to Our Newsletter */}
            <div className={styles.newsletterCard}>
              <div className={styles.sidebarHeader}>
                <Mail size={18} className={styles.headerIcon} />
                <h3 className={styles.sidebarTitle}>
                  Subscribe to Our Newsletter
                </h3>
              </div>
              <p className={styles.sidebarDesc}>
                Get the latest updates, resources and stories delivered to your
                inbox.
              </p>

              {subscribed ? (
                <div className={styles.successNotice}>
                  <CheckCircle2
                    size={18}
                    style={{ display: "inline", marginRight: "6px" }}
                  />
                  Thank you for subscribing!
                </div>
              ) : (
                <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
                  <div className={styles.inputWrapper}>
                    <Mail
                      size={16}
                      className={styles.mailInputIcon}
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className={styles.emailInput}
                      aria-label="Email address for news updates"
                    />
                  </div>
                  <button type="submit" className={styles.subscribeBtn}>
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Widget 3: Popular Tags */}
            <div className={styles.tagsCard}>
              <div className={styles.sidebarHeader}>
                <Tag size={18} className={styles.headerIcon} />
                <h3 className={styles.sidebarTitle}>Popular Tags</h3>
              </div>
              <div className={styles.tagsCloud}>
                {POPULAR_TAGS.map((t) => {
                  const isActive = selectedTag === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      className={`${styles.tagChip} ${
                        isActive ? styles.tagChipActive : ""
                      }`}
                      onClick={() =>
                        onSelectTag && onSelectTag(isActive ? null : t)
                      }
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Widget 4: Quote Card */}
            <div className={styles.quoteCard}>
              <span className={styles.quoteMark} aria-hidden="true">
                “
              </span>
              <blockquote className={styles.quoteText}>
                &ldquo;Together, we can build a more peaceful, resilient and
                sustainable future.&rdquo;
              </blockquote>
              <span className={styles.quoteAuthor}>— PCSDF</span>

              {/* Botanical Leaf Watermark */}
              <svg
                className={styles.leafIllustration}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 90C45 65 70 30 85 5C65 25 35 50 10 90Z"
                  fill="#78ab88"
                />
                <path
                  d="M40 55C55 45 70 35 80 20C65 35 50 48 40 55Z"
                  fill="#336946"
                />
                <path
                  d="M25 70C40 60 55 50 65 35C50 50 35 62 25 70Z"
                  fill="#4d855e"
                />
              </svg>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
