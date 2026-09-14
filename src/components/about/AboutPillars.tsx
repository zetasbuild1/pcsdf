import React from "react";
import {
  Users,
  Trees,
  Leaf,
  Sprout,
  RotateCcw,
  Cloud,
  ShieldCheck,
  Zap,
  Scale,
} from "lucide-react";
import styles from "./AboutPillars.module.css";

const PILLARS = [
  {
    title: "Retention",
    desc: "Keeping intact what functions well in ecological and social systems",
    bgColor: "#154840",
    icon: <Users size={22} strokeWidth={1.75} />,
  },
  {
    title: "Conservation",
    desc: "Proactively safeguarding critical ecosystems, cultures, and resources",
    bgColor: "#247b7b",
    icon: <Trees size={22} strokeWidth={1.75} />,
  },
  {
    title: "Restoration",
    desc: "Repairing and healing damaged environments and communities",
    bgColor: "#4b8a53",
    icon: <Leaf size={22} strokeWidth={1.75} />,
  },
  {
    title: "Regeneration",
    desc: "Enabling systems to regain vitality and self-renew beyond 'do less harm'",
    bgColor: "#6b8d43",
    icon: <Sprout size={22} strokeWidth={1.75} />,
  },
  {
    title: "Circularity",
    desc: "Designing out waste and circulating value fairly and sustainably",
    bgColor: "#c45f39",
    icon: <RotateCcw size={22} strokeWidth={1.75} />,
  },
  {
    title: "Mitigation",
    desc: "Reducing drivers of harm, emissions, pollution, and conflict risks",
    bgColor: "#3883ba",
    icon: <Cloud size={22} strokeWidth={1.75} />,
  },
  {
    title: "Adaptation",
    desc: "Strengthening resilience to unfolding climate and social impacts",
    bgColor: "#be8a48",
    icon: <ShieldCheck size={22} strokeWidth={1.75} />,
  },
  {
    title: "Transformation",
    desc: "Shifting institutions and systems toward peace-led models",
    bgColor: "#7c4a96",
    icon: <Zap size={22} strokeWidth={1.75} />,
  },
  {
    title: "Climate Justice",
    desc: "Fair distribution of burdens and benefits prioritizing the vulnerable",
    bgColor: "#b33939",
    icon: <Scale size={22} strokeWidth={1.75} />,
  },
];

export default function AboutPillars() {
  return (
    <section className={styles.pillarsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-tag">REGENERATIVE SUSTAINABILITY PILLARS</span>
          <h2 className={styles.title}>
            The Nine Pillars: An Operational Continuum
          </h2>
          <p className={styles.subtitle}>
            At the practical level, PCSDF implements a set of regenerative pillars
            as a consistent continuum of action across sectors and scales — moving beyond
            traditional checklists into a constitutional operating system.
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
