import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import styles from "./NewsFeaturedStory.module.css";

interface NewsFeaturedStoryProps {
  story?: {
    id: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
    href: string;
  };
}

export const DEFAULT_FEATURED_STORY = {
  id: "board-of-peace-inaugural",
  category: "PEACE & DIPLOMACY",
  date: "Feb 20, 2026",
  title: "Inaugural Meeting of the Board of Peace at US Institute of Peace in Washington, DC",
  excerpt:
    "Examining the inaugural gathering of the Board of Peace and its far-reaching implications for regional conflict resolution, multilateral diplomacy, and the integration of peace accords into systemic climate and global commons governance.",
  image: "/images/pcsdf/IMG_2682-5-1024x683.jpeg",
  href: "#board-of-peace-inaugural",
};

export default function NewsFeaturedStory({
  story = DEFAULT_FEATURED_STORY,
}: NewsFeaturedStoryProps) {
  return (
    <article className={styles.featuredCard} aria-label="Featured Story">
      <div className={styles.imageCol}>
        <Image
          src={story.image}
          alt={story.title}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 50vw"
          className={styles.featuredImage}
        />
      </div>

      <div className={styles.contentCol}>
        <div className={styles.metaRow}>
          <span className={styles.badge}>{story.category}</span>
          <span className={styles.dateWithIcon}>
            <Calendar size={13} className={styles.calendarIcon} aria-hidden="true" />
            <span>{story.date}</span>
          </span>
        </div>

        <h2 className={styles.headline}>
          <Link href={story.href}>{story.title}</Link>
        </h2>

        <p className={styles.excerpt}>{story.excerpt}</p>

        <Link href={story.href} className={styles.readMore}>
          <span>Read Full Story</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
