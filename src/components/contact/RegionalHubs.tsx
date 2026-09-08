import React from "react";
import Link from "next/link";
import { Compass, Building, Waves, ArrowRight } from "lucide-react";
import styles from "./RegionalHubs.module.css";

const HUBS = [
  {
    id: "south-asia",
    icon: <Compass size={22} />,
    name: "South Asia Regional Hub",
    location: "Colombo, Sri Lanka",
    description:
      "Overseeing grassroots field initiatives, mangrove restoration along fragile coastlines, community peacebuilding dialogues, and agricultural resilience training.",
    email: "southasia@pcsdf.org",
  },
  {
    id: "global-policy",
    icon: <Building size={22} />,
    name: "Global Policy & Partnerships",
    location: "Geneva, Switzerland",
    description:
      "Facilitating international collaboration with UN agencies, multilateral climate funds, academic research partners, and sustainable finance stakeholders.",
    email: "geneva@pcsdf.org",
  },
  {
    id: "marine-oceans",
    icon: <Waves size={22} />,
    name: "Coastal & Marine Ecosystems Hub",
    location: "Regional Coastal Corridors",
    description:
      "Driving community-based marine protection, coral reef restoration, sustainable coastal fisheries, and regional blue economy livelihood frameworks.",
    email: "oceans@pcsdf.org",
  },
];

export default function RegionalHubs() {
  return (
    <section className={styles.section} id="regional-hubs">
      <div className={styles.container}>
        <div className={styles.headerText}>
          <span className={styles.tag}>GLOBAL REACH &amp; REGIONAL HUBS</span>
          <h2 className={styles.title}>Where We Operate</h2>
          <p className={styles.subtitle}>
            PCSDF bridges international sustainable development discourse with
            tangible, measurable on-the-ground impact across key ecological and
            community corridors.
          </p>
        </div>

        <div className={styles.grid}>
          {HUBS.map((hub) => (
            <div key={hub.id} className={styles.hubCard}>
              <div className={styles.hubIconBadge}>{hub.icon}</div>
              <h3 className={styles.hubName}>{hub.name}</h3>
              <span className={styles.hubLocation}>{hub.location}</span>
              <p className={styles.hubDesc}>{hub.description}</p>
              <Link href={`mailto:${hub.email}`} className={styles.hubContact}>
                <span>Contact {hub.name}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
