import React from "react";
import { Leaf, Eye, Users } from "lucide-react";
import styles from "./MissionVisionValues.module.css";

const VALUES = [
  "Peace as a Guiding Orientation for Governance",
  "Human Dignity & Intergenerational Justice",
  "Faith & Indigenous Knowledge Systems",
  "Polycrisis Systems Thinking (30 Systems)",
  "Planetary Boundaries & Cosmic Commons",
];

export default function MissionVisionValues() {
  return (
    <section className={styles.mvvSection}>
      <div className={styles.container}>
        {/* Our Mission */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <Leaf size={22} strokeWidth={1.8} />
          </div>
          <h3 className={styles.title}>Our Mission</h3>
          <p className={styles.desc}>
            Advances peace-led, faith- and Indigenous-inspired, climate-friendly, and
            regenerative approaches to sustainability and governance in response to the
            interconnected challenges of the global polycrisis.
          </p>
        </div>

        {/* Our Vision */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <Eye size={22} strokeWidth={1.8} />
          </div>
          <h3 className={styles.title}>Our Vision</h3>
          <p className={styles.desc}>
            Peace-led stewardship that fosters the flourishing and regeneration of interconnected
            systems — across societies, ecosystems, planetary boundaries, the shared global
            commons, and outer space as part of our broader cosmic commons.
          </p>
        </div>

        {/* Our Values */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <Users size={22} strokeWidth={1.8} />
          </div>
          <h3 className={styles.title}>Core Principles</h3>
          <ul className={styles.valuesList}>
            {VALUES.map((val) => (
              <li key={val} className={styles.valueItem}>
                <span className={styles.bulletDot} />
                <span>{val}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
