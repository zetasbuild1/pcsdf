import React from "react";
import {
  Users,
  Leaf,
  Trees,
  Sprout,
  ShieldCheck,
  Cloud,
  RotateCcw,
} from "lucide-react";
import styles from "../SevenPillars.module.css";

const PILLARS = [
  {
    title: "Retention",
    desc: "Keeping communities strong and connected",
    bgColor: "#154840",
    icon: <Users size={24} strokeWidth={1.75} />,
  },
  {
    title: "Restoration",
    desc: "Rebuilding degraded ecosystems and livelihoods",
    bgColor: "#4b8a53",
    icon: <Leaf size={24} strokeWidth={1.75} />,
  },
  {
    title: "Conservation",
    desc: "Protecting biodiversity and natural resources",
    bgColor: "#247b7b",
    icon: <Trees size={24} strokeWidth={1.75} />,
  },
  {
    title: "Regeneration",
    desc: "Restoring balance for long-term prosperity",
    bgColor: "#6b8d43",
    icon: <Sprout size={24} strokeWidth={1.75} />,
  },
  {
    title: "Adaptation",
    desc: "Building resilience to climate risks and change",
    bgColor: "#be8a48",
    icon: <ShieldCheck size={24} strokeWidth={1.75} />,
  },
  {
    title: "Mitigation",
    desc: "Reducing emissions and environmental impact",
    bgColor: "#3883ba",
    icon: <Cloud size={24} strokeWidth={1.75} />,
  },
  {
    title: "Circularity",
    desc: "Promoting resource efficiency and zero waste",
    bgColor: "#c45f39",
    icon: <RotateCcw size={24} strokeWidth={1.75} />,
  },
];

export default function AboutPillars() {
  return (
    <section className={styles.pillarsSection} style={{ backgroundColor: "#ffffff" }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-tag">OUR SEVEN PILLARS</span>
          <h2 className={styles.title}>
            A Holistic Approach to Sustainable Development
          </h2>
          <p className={styles.subtitle}>
            Each pillar is designed to work together, creating stronger,
            healthier and more resilient communities.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className={styles.pillarCard}>
              <div
                className={styles.circleIcon}
                style={{ backgroundColor: pillar.bgColor }}
              >
                {pillar.icon}
              </div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
