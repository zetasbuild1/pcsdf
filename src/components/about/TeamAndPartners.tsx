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
          <span className="section-tag">OUR TEAM</span>
          <h2 className={styles.title}>People Behind the Mission</h2>
          <p className={styles.description}>
            Our team is made up of passionate professionals, community leaders
            and development experts who bring diverse skills and experience to
            drive meaningful and inclusive change.
          </p>
          <Link href="#team" className={styles.actionBtn}>
            <span>Meet Our Team</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Center Column: Team Mountain Ridge Photo */}
        <div className={styles.imageCol}>
          <Image
            src="/images/about/about-team.jpg"
            alt="People Behind the Mission - PCSDF"
            fill
            className={styles.teamImage}
            sizes="(max-width: 1080px) 100vw, 35vw"
          />
        </div>

        {/* Right Column: Partners Sage Card */}
        <div className={styles.partnersCard}>
          <span className="section-tag">OUR PARTNERS</span>
          <h2 className={styles.title}>Stronger Together</h2>
          <p className={styles.description}>
            We collaborate with governments, NGOs, academic institutions, private
            sector and local communities to amplify our impact.
          </p>
          <Link href="/#partnerships" className={styles.actionBtn}>
            <span>Our Partners</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
