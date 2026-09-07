import React from "react";
import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <section className={styles.partnersSection} id="partnerships">
      <div className={styles.container}>
        {/* Text Column */}
        <div className={styles.textCol}>
          <span className="section-tag">OUR PARTNERS</span>
          <h2 className={styles.title}>Stronger Together</h2>
          <p className={styles.description}>
            We work with governments, civil society, academia, private sector and
            local communities to create lasting impact.
          </p>
        </div>

        {/* Logos Column */}
        <div className={styles.logosCol}>
          {/* UNDP Logo */}
          <div className={styles.partnerLogo} title="United Nations Development Programme">
            <svg height="38" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="43" height="40" rx="2" stroke="#1d2e24" strokeWidth="2" />
              {/* UN Globe & Laurel */}
              <circle cx="22.5" cy="14" r="7" stroke="#1d2e24" strokeWidth="1.2" />
              <ellipse cx="22.5" cy="14" rx="3.5" ry="7" stroke="#1d2e24" strokeWidth="1" />
              <line x1="15.5" y1="14" x2="29.5" y2="14" stroke="#1d2e24" strokeWidth="1" />
              {/* UNDP Text */}
              <text x="22.5" y="32" fill="#1d2e24" fontSize="9" fontWeight="800" textAnchor="middle" letterSpacing="0.5px" fontFamily="var(--font-body)">
                UNDP
              </text>
            </svg>
          </div>

          {/* UN Environment Programme */}
          <div className={styles.partnerLogo} title="UN Environment Programme">
            <svg height="38" viewBox="0 0 110 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* UN laurel */}
              <path d="M12 28C6 24 5 15 12 9" stroke="#1d2e24" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M22 28C28 24 29 15 22 9" stroke="#1d2e24" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="17" cy="18" r="4.5" stroke="#1d2e24" strokeWidth="1.2" />
              {/* Text */}
              <text x="36" y="17" fill="#1d2e24" fontSize="13" fontWeight="800" fontFamily="var(--font-body)">
                UN
              </text>
              <circle cx="58" cy="12" r="4" stroke="#1d2e24" strokeWidth="1" />
              <text x="58" y="14.5" fill="#1d2e24" fontSize="5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-body)">
                e
              </text>
              <text x="36" y="27" fill="#1d2e24" fontSize="7" fontWeight="600" fontFamily="var(--font-body)">
                environment
              </text>
              <text x="36" y="34" fill="#1d2e24" fontSize="7" fontWeight="500" fontFamily="var(--font-body)">
                programme
              </text>
            </svg>
          </div>

          {/* World Food Programme (WFP) */}
          <div className={styles.partnerLogo} title="World Food Programme">
            <svg height="38" viewBox="0 0 115 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wheat ears / laurel */}
              <path d="M16 8C12 12 12 20 18 28C19 23 20 16 16 8Z" stroke="#1d2e24" strokeWidth="1.2" fill="none" />
              <path d="M22 10C24 14 24 21 18 28C22 24 24 17 22 10Z" stroke="#1d2e24" strokeWidth="1.2" fill="none" />
              <line x1="18" y1="12" x2="18" y2="32" stroke="#1d2e24" strokeWidth="1.5" />
              <text x="34" y="14" fill="#1d2e24" fontSize="6.5" fontWeight="800" fontFamily="var(--font-body)">
                WFP
              </text>
              <text x="34" y="23" fill="#1d2e24" fontSize="7.5" fontWeight="600" fontFamily="var(--font-body)">
                World Food
              </text>
              <text x="34" y="31" fill="#1d2e24" fontSize="7.5" fontWeight="600" fontFamily="var(--font-body)">
                Programme
              </text>
            </svg>
          </div>

          {/* IUCN */}
          <div className={styles.partnerLogo} title="International Union for Conservation of Nature">
            <svg height="36" viewBox="0 0 85 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="18" r="15" stroke="#1d2e24" strokeWidth="2.5" />
              <text x="42" y="24" fill="#1d2e24" fontSize="18" fontWeight="900" letterSpacing="0.8px" fontFamily="var(--font-body)">
                IUCN
              </text>
            </svg>
          </div>

          {/* THE WORLD BANK */}
          <div className={styles.partnerLogo} title="The World Bank">
            <svg height="38" viewBox="0 0 135 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Globe lines */}
              <circle cx="16" cy="19" r="14" stroke="#1d2e24" strokeWidth="1.8" />
              <ellipse cx="16" cy="19" rx="6" ry="14" stroke="#1d2e24" strokeWidth="1.2" />
              <line x1="2" y1="19" x2="30" y2="19" stroke="#1d2e24" strokeWidth="1.2" />
              <path d="M5 11C10 13 22 13 27 11" stroke="#1d2e24" strokeWidth="1" />
              <path d="M5 27C10 25 22 25 27 27" stroke="#1d2e24" strokeWidth="1" />
              {/* Text */}
              <text x="38" y="23" fill="#1d2e24" fontSize="11" fontWeight="800" letterSpacing="1px" fontFamily="var(--font-body)">
                THE WORLD BANK
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
