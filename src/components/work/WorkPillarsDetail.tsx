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
import styles from "./WorkPillarsDetail.module.css";

const PILLARS = [
  {
    title: "Retention",
    desc: "Keeping intact what still functions well in ecological, social, and cultural systems before loss occurs.",
    bgColor: "#154840",
    icon: <Users size={24} strokeWidth={1.8} />,
  },
  {
    title: "Conservation",
    desc: "Proactively safeguarding critical ecosystems, biodiversity corridors, ancestral knowledge, and natural resources.",
    bgColor: "#247b7b",
    icon: <Trees size={24} strokeWidth={1.8} />,
  },
  {
    title: "Restoration",
    desc: "Repairing and healing damaged environments, degraded lands, and fractured community networks.",
    bgColor: "#4b8a53",
    icon: <Leaf size={24} strokeWidth={1.8} />,
  },
  {
    title: "Regeneration",
    desc: "Enabling systems to regain vitality and self-renew, moving beyond 'do less harm' to active biological enrichment.",
    bgColor: "#6b8d43",
    icon: <Sprout size={24} strokeWidth={1.8} />,
  },
  {
    title: "Circularity",
    desc: "Designing out waste and keeping materials, value, and economic benefits circulating equitably.",
    bgColor: "#c45f39",
    icon: <RotateCcw size={24} strokeWidth={1.8} />,
  },
  {
    title: "Mitigation",
    desc: "Reducing the systemic drivers of harm, including carbon emissions, pollution, and conflict triggers.",
    bgColor: "#3883ba",
    icon: <Cloud size={24} strokeWidth={1.8} />,
  },
  {
    title: "Adaptation",
    desc: "Strengthening resilience to unfolding climate shocks, ecological shifts, and socioeconomic transformations.",
    bgColor: "#be8a48",
    icon: <ShieldCheck size={24} strokeWidth={1.8} />,
  },
  {
    title: "Transformation",
    desc: "Shifting institutional architectures, economic norms, and legal rules toward peace-led, regenerative models.",
    bgColor: "#7c4a96",
    icon: <Zap size={24} strokeWidth={1.8} />,
  },
  {
    title: "Climate Justice",
    desc: "Ensuring equitable distribution of burdens and benefits, prioritizing those most vulnerable and least responsible.",
    bgColor: "#b33939",
    icon: <Scale size={24} strokeWidth={1.8} />,
  },
];

export default function WorkPillarsDetail() {
  return (
    <section className={styles.section} id="pillars">
      <div className={styles.container}>
        <div className={styles.headerText}>
          <span className={styles.tag}>FOUNDATIONAL CONTINUUM</span>
          <h2 className={styles.title}>The Nine Regenerative Pillars</h2>
          <p className={styles.subtitle}>
            PCSDF integrates a consistent continuum of action across all 30 systems
            and 332 sectors, moving from retention to climate justice as one unified whole.
          </p>
        </div>

        <div className={styles.grid}>
          {PILLARS.map((p) => (
            <div key={p.title} className={styles.pillarCard}>
              <div
                className={styles.iconCircle}
                style={{ backgroundColor: p.bgColor }}
              >
                {p.icon}
              </div>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
