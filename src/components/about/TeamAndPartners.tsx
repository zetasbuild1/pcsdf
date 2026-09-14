import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./TeamAndPartners.module.css";

export default function TeamAndPartners() {
  return (
    <section className={styles.teamPartnersSection}>
      <div className={styles.container}>
        {/* Left Column: Team Narrative */}
        <div className={styles.teamCol}>
          <span className="section-tag">LEADERSHIP &amp; GOVERNANCE</span>
          <h2 className={styles.title}>The Board of Directors</h2>
          <p className={styles.description}>
            The Board holds formal governance authority and fiduciary responsibility. Led by
            <strong> Chaitri (Chai) N. Hapugalle</strong> (Founder &amp; Director) and
            <strong> Thomas Wuchte</strong> (Director &amp; Technical Advisor), our governance ensures
            fiduciary stewardship, legal compliance, and strategic alignment across our global initiatives.
          </p>
          <div className="flex flex-col gap-2 mb-6 text-xs text-gray-900">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span><strong>Chaitri (Chai) N. Hapugalle</strong> — Founder &amp; Director</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span><strong>Thomas Wuchte</strong> — Director &amp; Technical Advisor</span>
            </div>
          </div>
          <Link href="/contact" className={styles.actionBtn}>
            <span>Contact Governance</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Center Column: Leadership Photo */}
        <div className={styles.imageCol}>
          <Image
            src="/images/pcsdf/IMG_0685-7-768x1024.jpeg"
            alt="Founder Chaitri (Chai) N. Hapugalle - PCSDF"
            fill
            className={styles.teamImage}
            sizes="(max-width: 1080px) 100vw, 35vw"
          />
        </div>

        {/* Right Column: Patrons & Entity Partners Card */}
        <div className={styles.partnersCard}>
          <span className="section-tag">GLOBAL STEWARDS</span>
          <h2 className={styles.title}>Patrons &amp; Entity Partners</h2>
          <p className={styles.description}>
            Our Patrons and Senior Advisors are distinguished global leaders in macroeconomics, peacebuilding,
            diplomacy, and science. Alongside our Advisory Committee and institutional Entity Partners—including
            the <strong>NGO Committee On Disarmament, Peace and Security</strong>—we build a global community of
            stewardship for present and future generations.
          </p>
          <Link href="/contact" className={styles.actionBtn}>
            <span>Join as Entity Partner</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
