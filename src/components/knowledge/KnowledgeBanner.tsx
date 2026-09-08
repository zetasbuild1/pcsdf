import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./KnowledgeBanner.module.css";

export default function KnowledgeBanner() {
  return (
    <section className={styles.bannerSection} aria-label="Support Our Work">
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Left: Text and Buttons */}
          <div className={styles.contentBox}>
            <span className={styles.tag}>SUPPORT OUR WORK</span>
            <h2 className={styles.headline}>Be Part of the Change</h2>
            <p className={styles.subtitle}>
              Your support helps us create lasting impact for people,
              communities and the planet.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="#donate" className={styles.donateBtn}>
                <span>Donate Now</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="#partner" className={styles.partnerBtn}>
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>

          {/* Right: Background Photographic visual of hands holding soil and sprout */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageGradient} />
            <Image
              src="/images/knowledge/cta-hands-sprout.jpg"
              alt="Hands holding soil with a growing seedling sprout"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.handsImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
