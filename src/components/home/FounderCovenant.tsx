import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./FounderCovenant.module.css";

export default function FounderCovenant() {
  return (
    <section className={styles.covenantSection}>
      <div className={styles.container}>
        {/* Living Covenant Card */}
        <div className={styles.covenantCard}>
          <div className={styles.quoteSymbol}>“</div>
          <blockquote className={styles.covenantQuote}>
            Our framework is more than a model—it is a living covenant for humanity and all life:
            peace-led in spirit, faith- and Indigenous-inspired in wisdom, climate-friendly in action,
            regenerative in purpose, and intergenerational in responsibility. By integrating all
            systems—human, ecological, economic, digital, planetary, and beyond—it lights a path
            where ancient knowledge and future innovation unite for a just, thriving, and shared destiny.
          </blockquote>
          <div className={styles.authorName}>Chaitri (Chai) N. Hapugalle</div>
          <div className={styles.authorTitle}>Founder &amp; Director, PCSDF</div>
        </div>

        {/* Invitation to Partner */}
        <div className={styles.invitationBox}>
          <span className="section-tag">GLOBAL COOPERATION</span>
          <h2 className={styles.inviteTitle}>Ready to Bring Your Vision to Life?</h2>
          <p className={styles.inviteDesc}>
            Let us discuss your project and explore how we can collaborate to steward our shared planet
            and future generations across 193 UN Member States, two Observer States, and key territories.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            <span>Get in Touch</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
