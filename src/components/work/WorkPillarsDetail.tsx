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
import styles from "./WorkPillarsDetail.module.css";

const PILLARS = [
  {
    title: "Retention",
    desc: "Strengthening community cohesion, preserving ancestral wisdom, and retaining local population stability in climate-vulnerable zones.",
    bgColor: "#154840",
    icon: <Users size={26} strokeWidth={1.8} />,
  },
  {
    title: "Restoration",
    desc: "Active ecological rehabilitation of degraded mangrove forests, eroded watersheds, and devastated agrarian topsoil.",
    bgColor: "#4b8a53",
    icon: <Leaf size={26} strokeWidth={1.8} />,
  },
  {
    title: "Conservation",
    desc: "Safeguarding delicate biodiversity corridors, marine reserves, and native wildlife sanctuaries through participatory enforcement.",
    bgColor: "#247b7b",
    icon: <Trees size={26} strokeWidth={1.8} />,
  },
  {
    title: "Regeneration",
    desc: "Revitalizing ecosystem carrying capacity, replenishing depleted aquifers, and restoring symbiotic economic prosperity.",
    bgColor: "#6b8d43",
    icon: <Sprout size={26} strokeWidth={1.8} />,
  },
  {
    title: "Adaptation",
    desc: "Deploying climate-resilient farming techniques, saltwater intrusion barriers, and early-warning community disaster preparedness.",
    bgColor: "#be8a48",
    icon: <ShieldCheck size={26} strokeWidth={1.8} />,
  },
  {
    title: "Mitigation",
    desc: "Accelerating decentralized solar deployment, clean village micro-grids, and biological carbon sequestration through re-greening.",
    bgColor: "#3883ba",
    icon: <Cloud size={26} strokeWidth={1.8} />,
  },
  {
    title: "Circularity",
    desc: "Transforming agricultural biomass into biochar, closing resource loops, and minimizing chemical dependency through regenerative organics.",
    bgColor: "#c45f39",
    icon: <RotateCcw size={26} strokeWidth={1.8} />,
  },
];

export default function WorkPillarsDetail() {
  return (
    <section className={styles.section} id="pillars">
      <div className={styles.container}>
        <div className={styles.headerText}>
          <span className={styles.tag}>FOUNDATIONAL FRAMEWORK</span>
          <h2 className={styles.title}>The Seven Pillars of PCSDF</h2>
          <p className={styles.subtitle}>
            Our initiatives do not operate in isolation. Every field program is
            engineered to integrate across our seven systemic pillars, ensuring
            enduring ecological and social resilience.
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
