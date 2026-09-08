import React from "react";
import Image from "next/image";
import { Leaf, Target, Users, Droplets } from "lucide-react";
import styles from "./WorkHero.module.css";

export default function WorkHero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Scenic Terraces & Sunrise */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/work/work-hero.jpg"
          alt="Our Work & Initiatives - PCSDF"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>

      {/* Light gradient overlay for readability */}
      <div className={styles.gradientOverlay} />

      <div className={styles.container}>
        <div className={styles.contentCol}>
          <span className={styles.tag}>OUR WORK &amp; INITIATIVES</span>
          <h1 className={styles.headline}>
            Empowering Communities.<br />
            Restoring Ecosystems.<br />
            Sustaining Peace.
          </h1>
          <p className={styles.subtitle}>
            We operate at the nexus of peacebuilding, climate action, and
            sustainable development — translating global sustainability
            commitments into tangible, community-led impact on the ground.
          </p>

          <div className={styles.badgesRow}>
            <div className={styles.badgeItem}>
              <Leaf size={15} className={styles.badgeIcon} aria-hidden="true" />
              <span>7 Core Pillars</span>
            </div>
            <div className={styles.badgeItem}>
              <Target size={15} className={styles.badgeIcon} aria-hidden="true" />
              <span>10 UN SDGs Aligned</span>
            </div>
            <div className={styles.badgeItem}>
              <Users size={15} className={styles.badgeIcon} aria-hidden="true" />
              <span>50+ Local Communities</span>
            </div>
            <div className={styles.badgeItem}>
              <Droplets size={15} className={styles.badgeIcon} aria-hidden="true" />
              <span>120k+ Seedlings Planted</span>
            </div>
          </div>
        </div>

        {/* Right script calligraphy accent */}
        <div className={styles.scriptBox}>
          <span className={styles.scriptText}>
            Peace with Nature.<br />
            Peace among People.
          </span>
        </div>
      </div>
    </section>
  );
}
