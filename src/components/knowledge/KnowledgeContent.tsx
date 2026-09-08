"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  ChevronRight,
  BookText,
  FileText,
  ClipboardCheck,
  Compass,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import styles from "./KnowledgeContent.module.css";

export interface ArticleItem {
  id: string;
  category: string;
  categoryId: string;
  badgeBg: string;
  badgeColor: string;
  date: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const ARTICLES: ArticleItem[] = [
  {
    id: "mangrove-restoration",
    category: "CLIMATE ACTION",
    categoryId: "climate-action",
    badgeBg: "#eaf5ee",
    badgeColor: "#17633e",
    date: "Aug 18, 2025",
    title: "Community-Based Mangrove Restoration",
    description:
      "How local communities are leading mangrove restoration efforts to protect coastal ecosystems and build resilience against climate change.",
    image: "/images/knowledge/mangrove.jpg",
    href: "#mangrove-restoration",
  },
  {
    id: "peace-partnerships",
    category: "PEACE & GOVERNANCE",
    categoryId: "peace-governance",
    badgeBg: "#e6f1f8",
    badgeColor: "#16557e",
    date: "Aug 12, 2025",
    title: "Building Peace Through Local Partnerships",
    description:
      "The power of collaboration: how local partnerships are strengthening peace and social cohesion in vulnerable communities.",
    image: "/images/news-2.jpg",
    href: "#peace-partnerships",
  },
  {
    id: "renewable-energy",
    category: "SUSTAINABLE DEVELOPMENT",
    categoryId: "sustainable-development",
    badgeBg: "#f1f6e6",
    badgeColor: "#416216",
    date: "Aug 5, 2025",
    title: "Renewable Energy Solutions for Rural Communities",
    description:
      "Clean energy initiatives that are creating jobs, improving livelihoods and reducing carbon emissions in rural areas.",
    image: "/images/renewable.jpg",
    href: "#renewable-energy",
  },
  {
    id: "agriculture-food-security",
    category: "LIVELIHOODS",
    categoryId: "sustainable-development",
    badgeBg: "#fbf3e0",
    badgeColor: "#8b630e",
    date: "Jul 28, 2025",
    title: "Climate-Smart Agriculture for Food Security",
    description:
      "Innovative farming practices that help communities adapt to changing climates while improving food security and income.",
    image: "/images/knowledge/agriculture.jpg",
    href: "#agriculture-food-security",
  },
  {
    id: "marine-ecosystems",
    category: "BIODIVERSITY",
    categoryId: "climate-action",
    badgeBg: "#e2f6f8",
    badgeColor: "#126d7c",
    date: "Jul 20, 2025",
    title: "Protecting Marine Ecosystems for Future Generations",
    description:
      "Community-led conservation efforts to safeguard marine biodiversity and support sustainable fisheries.",
    image: "/images/marine.jpg",
    href: "#marine-ecosystems",
  },
  {
    id: "youth-sdgs",
    category: "GLOBAL GOALS",
    categoryId: "sustainable-development",
    badgeBg: "#f3e7f8",
    badgeColor: "#6f2690",
    date: "Jul 15, 2025",
    title: "The Role of Youth in Achieving the SDGs",
    description:
      "How young leaders are driving innovation and action for a more inclusive and sustainable future.",
    image: "/images/knowledge/youth-sdgs.jpg",
    href: "#youth-sdgs",
  },
];

const QUICK_LINKS = [
  { label: "Publications", href: "#publications", icon: <BookText size={17} /> },
  { label: "Reports", href: "#reports", icon: <FileText size={17} /> },
  { label: "Case Studies", href: "#case-studies", icon: <ClipboardCheck size={17} /> },
  { label: "Useful Resources", href: "#resources", icon: <Compass size={17} /> },
  { label: "SDG Toolkit", href: "#sdg-toolkit", icon: <Sparkles size={17} /> },
];

interface KnowledgeContentProps {
  searchQuery?: string;
  selectedCategory?: string | null;
  onClearFilters?: () => void;
}

export default function KnowledgeContent({
  searchQuery = "",
  selectedCategory = null,
  onClearFilters,
}: KnowledgeContentProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  // Filter articles based on search query and category
  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory
      ? article.categoryId === selectedCategory ||
        article.category.toLowerCase().includes(selectedCategory.replace("-", " "))
      : true;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = query
      ? article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <section className={styles.section} id="featured-articles">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left Column: Featured Articles Grid */}
          <div className={styles.articlesCol}>
            <div className={styles.sectionHeader}>
              <span className={styles.tag}>FEATURED ARTICLES</span>
              <h2 className={styles.sectionTitle}>
                Latest from Our Knowledge Hub
              </h2>
            </div>

            {filteredArticles.length === 0 ? (
              <div className={styles.noResults}>
                <h3 className={styles.noResultsTitle}>No articles found</h3>
                <p className={styles.noResultsText}>
                  We couldn&apos;t find any articles matching your criteria. Try a
                  different search or clear filters.
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
              <div className={styles.articlesGrid}>
                {filteredArticles.map((article) => (
                  <article key={article.id} className={styles.articleCard}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={article.image}
                        alt={article.title}
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
                            backgroundColor: article.badgeBg,
                            color: article.badgeColor,
                          }}
                        >
                          {article.category}
                        </span>
                        <span className={styles.date}>{article.date}</span>
                      </div>

                      <h3 className={styles.cardTitle}>{article.title}</h3>
                      <p className={styles.cardDesc}>{article.description}</p>

                      <Link href={article.href} className={styles.readMore}>
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
            {/* Card 1: Subscribe to Our Newsletter */}
            <div className={styles.newsletterCard}>
              <span className={styles.sidebarTag}>STAY INFORMED</span>
              <h3 className={styles.sidebarTitle}>
                Subscribe to Our Newsletter
              </h3>
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
                    <Mail size={16} className={styles.mailIcon} aria-hidden="true" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className={styles.emailInput}
                      aria-label="Email address for newsletter"
                    />
                  </div>
                  <button type="submit" className={styles.subscribeBtn}>
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Card 2: Quick Links */}
            <div className={styles.quickLinksCard}>
              <h3 className={styles.quickLinksTitle}>Quick Links</h3>
              <ul className={styles.linksList}>
                {QUICK_LINKS.map((item) => (
                  <li key={item.label} className={styles.linkItem}>
                    <Link href={item.href} className={styles.quickLink}>
                      <div className={styles.linkLeft}>
                        <span className={styles.linkIcon}>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight size={14} className={styles.chevron} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Quote Card */}
            <div className={styles.quoteCard}>
              <span className={styles.quoteMark} aria-hidden="true">
                “
              </span>
              <blockquote className={styles.quoteText}>
                &ldquo;Knowledge is not just about information, it&apos;s about
                empowerment.&rdquo;
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
