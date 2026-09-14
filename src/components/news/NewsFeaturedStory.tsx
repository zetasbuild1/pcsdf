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
  id: "unfinished-agenda-2030",
  category: "PEACE & GOVERNANCE",
  date: "Feb 20, 2026",
  title: "The Unfinished Agenda 2030: Governing Life Across Planetary Systems and Cosmic Commons",
  excerpt:
    "Examining the systemic transition from managing siloed development targets to governing interconnected systems in an era of global polycrisis, uniting Brundtland, human rights, and the 17 SDGs.",
  image: "/images/pcsdf/IMG_2541-1024x1024.jpeg",
  href: "#unfinished-agenda-2030",
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
