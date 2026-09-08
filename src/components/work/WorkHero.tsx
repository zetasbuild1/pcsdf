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
          <span className={styles.tag}>THE PFICF-RSSDF FRAMEWORK</span>
          <h1 className={styles.headline}>
            Governing Sustainability<br />
            in an Era of Polycrisis.<br />
            Peace-Led Regeneration.
          </h1>
          <p className={styles.subtitle}>
            Building directly on the Brundtland Commission (&quot;Our Common Future&quot;), the Universal
            Declaration of Human Rights, and the UN 2030 Agenda (17 SDGs) — transforming siloed
            development targets into a unified 30-system constitutional operating system.
          </p>

          <div className={styles.badgesRow}>
            <div className={styles.badgeItem}>
              <Leaf size={15} className={styles.badgeIcon} aria-hidden="true" />
              <span>9 Regenerative Pillars</span>
            </div>
            <div className={styles.badgeItem}>
              <Target size={15} className={styles.badgeIcon} aria-hidden="true" />
              <span>30-System Architecture</span>
            </div>
            <div className={styles.badgeItem}>
              <Users size={15} className={styles.badgeIcon} aria-hidden="true" />
              <span>332-Sector Taxonomy</span>
            </div>
            <div className={styles.badgeItem}>
              <Droplets size={15} className={styles.badgeIcon} aria-hidden="true" />
              <span>193 UN Member States</span>
            </div>
          </div>
        </div>

        {/* Right script calligraphy accent */}
        <div className={styles.scriptBox}>
          <span className={styles.scriptText}>
            From Managing Targets<br />
            to Governing Systems.
          </span>
        </div>
      </div>
    </section>
  );
}
