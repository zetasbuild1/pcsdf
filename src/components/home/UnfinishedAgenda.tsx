import React from "react";
import { Compass, Eye, Sparkles } from "lucide-react";
import styles from "./UnfinishedAgenda.module.css";

export default function UnfinishedAgenda() {
  return (
    <section className={styles.agendaSection}>
      <div className={styles.container}>
        {/* Editorial Polycrisis Narrative */}
        <div className={styles.headerBox}>
          <span className="section-tag">ERA OF POLYCRISIS</span>
          <h2 className={styles.title}>
            The Unfinished Agenda 2030: A Global Call to Redefine Sustainability
          </h2>
          <p className={styles.subtitle}>
            Governing Life Across Planetary Systems, Global Commons, Digital Domains, and the Cosmic Commons
          </p>
          <p className={styles.leadText}>
            Humanity stands at a defining civilisational crossroads. Today, the world faces a
            convergence of crises — climate disruption, biodiversity loss, geopolitical fragmentation,
            rising inequality, debt distress, technological disruption, and systemic pressures on
            democratic and multilateral institutions. These are not isolated challenges, but
            interconnected manifestations of a global polycrisis that cuts across borders, sectors,
            generations, and ecosystems.
          </p>
          <p className={`${styles.leadText} mt-3`}>
            A regenerative era calls not for abandoning historic frameworks, but for their evolution,
            integration, and renewal — moving from managing siloed development targets to integrated
            stewardship across ecological, economic, technological, cultural, social, and peace systems.
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className={styles.vmGrid}>
          {/* Vision */}
          <div className={styles.vmCard}>
            <div className={styles.cardIconCircle}>
              <Eye size={24} strokeWidth={1.8} />
            </div>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardDesc}>
              Peace-led stewardship that fosters the flourishing and regeneration of interconnected
              systems — human and non-human — across societies, ecosystems, planetary boundaries,
              the shared global commons, and outer space as part of our broader cosmic commons.
            </p>
            <p className={`${styles.cardDesc} mt-3`}>
              Guided by peace, ethical stewardship, faith traditions, Indigenous wisdom, scientific
              knowledge, innovation, and respect for human dignity.
            </p>
          </div>

          {/* Mission */}
          <div className={styles.vmCard}>
            <div className={styles.cardIconCircle}>
              <Compass size={24} strokeWidth={1.8} />
            </div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardDesc}>
              The Peace-Led Climate-Friendly Sustainable Development Forum advances peace-led,
              faith- and Indigenous-inspired, climate-friendly, and regenerative approaches to
              sustainability and governance in response to the interconnected challenges of the
              global polycrisis.
            </p>
            <p className={`${styles.cardDesc} mt-3`}>
              Through dialogue, knowledge exchange, partnerships, policy innovation, and financial
              innovation, the Forum promotes systems thinking that strengthens resilience and
              stewardship worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
