import React from "react";
import { Users, Leaf, Globe2, Sprout, ArrowRight } from "lucide-react";
import styles from "./ImpactStats.module.css";

const STATS = [
  {
    icon: <Users size={22} strokeWidth={1.75} />,
    number: "50+",
    label: "Communities\nSupported",
  },
  {
    icon: <Leaf size={22} strokeWidth={1.75} />,
    number: "25+",
    label: "Projects\nImplemented",
  },
  {
    icon: <Globe2 size={22} strokeWidth={1.75} />,
    number: "15+",
    label: "Countries\nCollaborated",
  },
  {
    icon: <Sprout size={22} strokeWidth={1.75} />,
    number: "100K+",
    label: "People Reached",
  },
];

export default function ImpactStats() {
  return (
    <section className={styles.impactSection} id="impact">
      {/* Subtle World Map Silhouette Watermark */}
      <svg
        className={styles.mapBackground}
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M150 120 C 170 110, 220 100, 260 130 C 280 150, 310 190, 290 230 C 270 260, 240 280, 210 270 C 180 260, 160 210, 140 180 Z"
          fill="#143e31"
        />
        <path
          d="M260 300 C 280 320, 290 380, 280 430 C 260 460, 240 430, 230 380 C 220 330, 240 310, 260 300 Z"
          fill="#143e31"
        />
        <path
          d="M480 100 C 530 80, 570 120, 560 160 C 530 180, 500 170, 480 150 Z"
          fill="#143e31"
        />
        <path
          d="M490 200 C 530 190, 580 230, 570 320 C 550 380, 520 380, 500 340 C 480 290, 470 230, 490 200 Z"
          fill="#143e31"
        />
        <path
          d="M620 90 C 700 70, 850 90, 880 160 C 850 220, 780 240, 720 220 C 670 200, 640 140, 620 90 Z"
          fill="#143e31"
        />
        <path
          d="M780 320 C 830 310, 870 350, 860 400 C 820 420, 790 390, 780 360 Z"
          fill="#143e31"
        />
      </svg>

      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftCol}>
          <span className="section-tag">OUR IMPACT</span>
          <h2 className={styles.title}>
            Creating Lasting Change
            <br />
            Together
          </h2>
          <p className={styles.description}>
            Through community-driven solutions and strong partnerships, we are
            building resilient communities, healthy ecosystems and inclusive
            economies.
          </p>
          <a href="#initiatives" className={styles.learnMore}>
            <span>Learn More</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Right Column (Stats Grid) */}
        <div className={styles.statsGrid}>
          {STATS.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.iconWrapper}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>
                {stat.label.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && stat.label.includes("\n") && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
