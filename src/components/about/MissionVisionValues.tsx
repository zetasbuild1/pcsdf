import React from "react";
import { Leaf, Eye, Users } from "lucide-react";
import styles from "./MissionVisionValues.module.css";

const VALUES = [
  "Peace & Inclusion",
  "Environmental Stewardship",
  "Equity & Justice",
  "Collaboration",
  "Integrity",
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
            To promote peace, climate-friendly actions and sustainable
            development through inclusive partnerships, community empowerment
            and innovative solutions.
          </p>
        </div>

        {/* Our Vision */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <Eye size={22} strokeWidth={1.8} />
          </div>
          <h3 className={styles.title}>Our Vision</h3>
          <p className={styles.desc}>
            A peaceful, resilient and sustainable world where people and nature
            thrive in harmony.
          </p>
        </div>

        {/* Our Values */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <Users size={22} strokeWidth={1.8} />
          </div>
          <h3 className={styles.title}>Our Values</h3>
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
