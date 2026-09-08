import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./SdgsSection.module.css";

// 10 SDGs aligned with PCSDF as shown in reference design
const SDG_TILES = [
  {
    number: "1",
    name: "NO\nPOVERTY",
    bgColor: "#E5243B",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="8.5" cy="8.5" r="2.2" />
        <path d="M4.5 19v-2.5a3.5 3.5 0 0 1 7 0V19H4.5z" />
        <circle cx="16" cy="10" r="1.8" />
        <path d="M13.5 19v-2a2.5 2.5 0 0 1 5 0V19h-5z" />
      </svg>
    ),
  },
  {
    number: "2",
    name: "ZERO\nHUNGER",
    bgColor: "#DDA63A",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h18a9 9 0 0 1-18 0z" />
        <path d="M8 8c0-2 1.8-3 1.8-3s1.8 1 1.8 3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M13 8c0-2 1.8-3 1.8-3s1.8 1 1.8 3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "3",
    name: "GOOD HEALTH\n& WELL-BEING",
    bgColor: "#4C9F38",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2 13 6 13 8.5 7 12 18 15 11 17.5 15 22 15" />
      </svg>
    ),
  },
  {
    number: "4",
    name: "QUALITY\nEDUCATION",
    bgColor: "#C5192D",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 7l10-4 10 4-10 4-10-4z" />
        <path d="M6 10.5v5c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="20" y1="9" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "5",
    name: "GENDER\nEQUALITY",
    bgColor: "#FF3A21",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="4.5" />
        <line x1="10" y1="14.5" x2="10" y2="21" />
        <line x1="7.5" y1="18" x2="12.5" y2="18" />
        <line x1="13.5" y1="6.5" x2="19.5" y2="6.5" />
        <line x1="19.5" y1="6.5" x2="19.5" y2="12.5" />
      </svg>
    ),
  },
  {
    number: "6",
    name: "CLEAN WATER\n& SANITATION",
    bgColor: "#26BDE2",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3l4.5 5.5a6.5 6.5 0 1 1-9 0L12 3z" />
      </svg>
    ),
  },
  {
    number: "7",
    name: "AFFORDABLE &\nCLEAN ENERGY",
    bgColor: "#FCC30B",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="4.5" />
        <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "13",
    name: "CLIMATE\nACTION",
    bgColor: "#3F7E44",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3.5" fill="currentColor" />
        <path d="M3.5 12h17" />
      </svg>
    ),
  },
  {
    number: "14",
    name: "LIFE\nBELOW WATER",
    bgColor: "#0A97D9",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 14c3-1.8 6 1.8 9 0s6-1.8 9 0" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2 18c3-1.8 6 1.8 9 0s6-1.8 9 0" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M16 9c-2-2.5-5.5-3.5-9-2.5 2.5 1.2 4.5 3.5 4.5 4.5 1.8 0 3.5-.8 4.5-2z" />
      </svg>
    ),
  },
  {
    number: "15",
    name: "LIFE\nON LAND",
    bgColor: "#56C02B",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L6 14h3.5v6h5v-6H18L12 3z" />
        <line x1="4" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

// UN SDG 17-segment color palette for the wheel
const SDG_COLORS = [
  "#E5243B", "#DDA63A", "#4C9F38", "#C5192D", "#FF3A21",
  "#26BDE2", "#FCC30B", "#A21942", "#FD6925", "#DD1367",
  "#FD9D24", "#BF8B2E", "#3F7E44", "#0A97D9", "#56C02B",
  "#00689D", "#19486A"
];

export default function SdgsSection() {
  return (
    <section className={styles.sdgsSection} id="sdgs">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <span className="section-tag">ROOTED IN GLOBAL AGREEMENTS</span>
            <h2 className={styles.title}>
              Brundtland, Human Rights
              <br />
              &amp; the 17 UN SDGs
            </h2>
            <p className={styles.description}>
              The PFICF-RSSDF fully supports and reinforces the United Nations 2030 Agenda,
              extending Brundtland&apos;s intergenerational vision into a world of planetary
              boundaries, systemic risk, and shared cosmic commons.
            </p>
            <a href="/our-work" className={styles.viewSdgsBtn}>
              <span>Explore SDG Alignment</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right Column: SDG Tiles Grid + Global Goals Badge */}
          <div className={styles.rightCol}>
            <div className={styles.topLinkWrapper}>
              <a href="/our-work" className={styles.viewAllLink}>
                <span>View All 8 Initiatives</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className={styles.tilesWrapper}>
              {/* 10 SDGs Grid */}
              <div className={styles.sdgGrid}>
                {SDG_TILES.map((tile) => (
                  <div
                    key={tile.number}
                    className={styles.sdgTile}
                    style={{ backgroundColor: tile.bgColor }}
                    title={`SDG ${tile.number}: ${tile.name.replace("\n", " ")}`}
                  >
                    <div className={styles.tileHeader}>
                      <span className={styles.sdgNumber}>{tile.number}</span>
                      <span className={styles.sdgName}>
                        {tile.name.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i === 0 && <br />}
                          </React.Fragment>
                        ))}
                      </span>
                    </div>

                    <div className={styles.iconContainer}>{tile.icon}</div>
                  </div>
                ))}
              </div>

              {/* Official UN Global Goals Wheel */}
              <div className={styles.globalGoalsBadge}>
                <svg width="68" height="68" viewBox="0 0 100 100">
                  {SDG_COLORS.map((color, i) => {
                    const total = 17;
                    const angle = 360 / total;
                    const startAngle = i * angle - 90;
                    const endAngle = (i + 1) * angle - 90;
                    const rInner = 24;
                    const rOuter = 46;

                    const rad1 = (startAngle * Math.PI) / 180;
                    const rad2 = (endAngle * Math.PI) / 180;

                    const x1 = 50 + rOuter * Math.cos(rad1);
                    const y1 = 50 + rOuter * Math.sin(rad1);
                    const x2 = 50 + rOuter * Math.cos(rad2);
                    const y2 = 50 + rOuter * Math.sin(rad2);
                    const x3 = 50 + rInner * Math.cos(rad2);
                    const y3 = 50 + rInner * Math.sin(rad2);
                    const x4 = 50 + rInner * Math.cos(rad1);
                    const y4 = 50 + rInner * Math.sin(rad1);

                    return (
                      <path
                        key={i}
                        d={`M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`}
                        fill={color}
                      />
                    );
                  })}
                  <circle cx="50" cy="50" r="22" fill="#fafbfa" />
                </svg>
                <span className={styles.globalGoalsText}>
                  THE GLOBAL GOALS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
