import React from "react";
import Image from "next/image";
import { Mail, Globe2, Clock } from "lucide-react";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Scenic Sunlit Forest Path */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/contact/contact-hero.jpg"
          alt="Contact PCSDF - Peace-Led Climate-Friendly Sustainable Development Forum"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>

      {/* Light gradient overlay for crisp legibility */}
      <div className={styles.gradientOverlay} />

      <div className={styles.container}>
        <div className={styles.contentCol}>
          <span className={styles.tag}>GET IN TOUCH</span>
          <h1 className={styles.headline}>
            Connect with Us.<br />
            Drive Lasting Impact.
          </h1>
          <p className={styles.subtitle}>
            Whether you represent a community organization, partner institution,
            research body, or are an individual dedicated to climate resilience
            and peace, we welcome your dialogue and collaboration.
          </p>

          <div className={styles.badgesRow}>
            <div className={styles.badgeItem}>
              <Mail size={15} className={styles.badgeIcon} aria-hidden="true" />
              <span>info@pcsdf.org</span>
            </div>
            <div className={styles.badgeItem}>
              <Globe2 size={15} className={styles.badgeIcon} aria-hidden="true" />
              <span>Global Secretariat & Hubs</span>
            </div>
            <div className={styles.badgeItem}>
              <Clock size={15} className={styles.badgeIcon} aria-hidden="true" />
              <span>Response within 24–48h</span>
            </div>
          </div>
        </div>

        {/* Right script calligraphy accent */}
        <div className={styles.scriptBox}>
          <span className={styles.scriptText}>
            Every lasting change<br />
            begins with a<br />
            conversation.
          </span>
        </div>
      </div>
    </section>
  );
}
