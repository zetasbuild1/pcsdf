"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./WorkInitiatives.module.css";

export interface InitiativeItem {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  badgeBg: string;
  badgeColor: string;
  image: string;
  pillars: string[];
  sdgs: string[];
  description: string;
  metric: string;
  href: string;
}

export const INITIATIVES_DATA: InitiativeItem[] = [
  {
    id: "coastal-mangrove-restoration",
    title: "Community-Based Mangrove & Coastal Ecosystem Regeneration",
    category: "CLIMATE & RESTORATION",
    categoryId: "climate-restoration",
    badgeBg: "#eaf5ee",
    badgeColor: "#17633e",
    image: "/images/marine.jpg",
    pillars: ["Restoration", "Adaptation", "Conservation"],
    sdgs: ["SDG 13", "SDG 14", "SDG 15"],
    description:
      "Mobilizing coastal communities to replant and steward degraded mangrove forests, stabilizing vulnerable estuarine lagoons and establishing biological storm buffers against sea-level rise.",
    metric: "120,000+ Propagules Planted · 4 Estuarine Lagoons Stabilized",
    href: "/knowledge-hub",
  },
  {
    id: "grassroots-peacebuilding",
    title: "Peace-Led Multilateral Cooperation & Historic Accords",
    category: "COMMUNITY & PEACE",
    categoryId: "community-peace",
    badgeBg: "#e6f1f8",
    badgeColor: "#17537b",
    image: "/images/pcsdf/IMG_0685-7-768x1024.jpeg",
    pillars: ["Retention", "Climate Justice", "Transformation"],
    sdgs: ["SDG 16", "SDG 17", "SDG 10"],
    description:
      "Synthesizing historic peace agreements—from the San Francisco Peace Treaty to modern regional accords—to establish peace-led orientations for climate governance across 193 UN Member States.",
    metric: "193 Member States Network · Multi-Stakeholder Peace Platforms",
    href: "/news",
  },
  {
    id: "rural-clean-energy",
    title: "Decentralized Solar & Clean Energy for Rural Communities",
    category: "CLEAN ENERGY",
    categoryId: "renewable-energy",
    badgeBg: "#f0f6e5",
    badgeColor: "#436319",
    image: "/images/pcsdf/IMG_2432-683x1024.jpeg",
    pillars: ["Mitigation", "Regeneration", "Circularity"],
    sdgs: ["SDG 7", "SDG 13", "SDG 8"],
    description:
      "Installing autonomous solar mini-grids and clean energy systems in off-grid rural communities, cutting emissions while creating green livelihoods for local enterprises.",
    metric: "45 Mini-Grids Deployed · 1,800 Households Powered",
    href: "/knowledge-hub",
  },
  {
    id: "climate-smart-agroforestry",
    title: "Climate-Smart Agroforestry & Multidimensional Food Security",
    category: "SUSTAINABLE AGRICULTURE",
    categoryId: "sustainable-agriculture",
    badgeBg: "#fbf3e0",
    badgeColor: "#8b630e",
    image: "/images/pcsdf/IMG_1963-819x1024.jpeg",
    pillars: ["Circularity", "Adaptation", "Retention"],
    sdgs: ["SDG 2", "SDG 1", "SDG 12"],
    description:
      "Reaffirming Kofi Annan's vision of human security by equipping smallholders with drought-tolerant indigenous crops, soil regeneration protocols, and resilient crop systems.",
    metric: "2,400 Smallholders Certified · 35% Yield Enhancement",
    href: "/knowledge-hub",
  },
  {
    id: "marine-protected-corridors",
    title: "Marine Protected Corridors & Global Commons Stewardship",
    category: "MARINE & OCEANS",
    categoryId: "marine-oceans",
    badgeBg: "#e2f6f8",
    badgeColor: "#126d7c",
    image: "/images/pcsdf/IMG_2370-2-819x1024.jpeg",
    pillars: ["Conservation", "Restoration", "Retention"],
    sdgs: ["SDG 14", "SDG 8", "SDG 12"],
    description:
      "Safeguarding vulnerable pelagic corridors and artisanal marine resources through community-led coastal stewardship aligned with UN Law of the Sea and biodiversity treaties.",
    metric: "180 sq km Reef Safeguarded · 12 Coastal Guilds Supported",
    href: "/knowledge-hub",
  },
  {
    id: "youth-green-leadership",
    title: "30-System Architecture & Intergenerational Leadership",
    category: "COMMUNITY & PEACE",
    categoryId: "community-peace",
    badgeBg: "#f3e7f8",
    badgeColor: "#6e278f",
    image: "/images/pcsdf/IMG_2680-1.jpeg",
    pillars: ["Transformation", "Retention", "Regeneration"],
    sdgs: ["SDG 4", "SDG 16", "SDG 17"],
    description:
      "Empowering youth and emerging leaders with constitutional systems-thinking tools to steward planetary boundaries, digital domains, and intergenerational futures.",
    metric: "30 Systems Mapped · 332 Sectors Integrated",
    href: "/knowledge-hub",
  },
  {
    id: "watershed-forest-protection",
    title: "Indigenous Cloud Forest & Watershed Reforestation",
    category: "CLIMATE & RESTORATION",
    categoryId: "climate-restoration",
    badgeBg: "#eaf5ee",
    badgeColor: "#17633e",
    image: "/images/pcsdf/IMG_2711.jpeg",
    pillars: ["Restoration", "Conservation", "Retention"],
    sdgs: ["SDG 6", "SDG 15", "SDG 13"],
    description:
      "Integrating Indigenous ecological wisdom with scientific hydrological data to heal degraded cloud-forest watersheds and secure downstream freshwater reservoirs.",
    metric: "350 Hectares Restored · 40,000 Downstream Residents Protected",
    href: "/knowledge-hub",
  },
  {
    id: "circular-waste-regeneration",
    title: "Planetary Boundaries & Cosmic Commons Governance",
    category: "SUSTAINABLE AGRICULTURE",
    categoryId: "sustainable-agriculture",
    badgeBg: "#fbf3e0",
    badgeColor: "#8b630e",
    image: "/images/pcsdf/IMG_2541-1024x1024.jpeg",
    pillars: ["Circularity", "Transformation", "Regeneration"],
    sdgs: ["SDG 9", "SDG 12", "SDG 17"],
    description:
      "Bridging Earth-to-orbit governance: addressing orbital debris, space commons stewardship, circular materials design, and long-term cosmic sustainability.",
    metric: "Integrated MEAL Hive Tracking · Earth-to-Orbit Governance Frame",
    href: "/knowledge-hub",
  },
];

const FILTER_CATEGORIES = [
  { id: "all", label: "All Initiatives" },
  { id: "climate-restoration", label: "Climate & Restoration" },
  { id: "community-peace", label: "Community & Peace" },
  { id: "renewable-energy", label: "Clean Energy" },
  { id: "marine-oceans", label: "Marine & Oceans" },
  { id: "sustainable-agriculture", label: "Sustainable Agriculture" },
];

export default function WorkInitiatives() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredInitiatives =
    activeTab === "all"
      ? INITIATIVES_DATA
      : INITIATIVES_DATA.filter((item) => item.categoryId === activeTab);

  return (
    <section className={styles.section} id="initiatives">
      <div className={styles.container}>
        <div className={styles.headerText}>
          <span className={styles.tag}>GROUNDBREAKING FIELD PROGRAMS</span>
          <h2 className={styles.title}>Driving Change Across Ecosystems</h2>
          <p className={styles.subtitle}>
            Explore our multi-sectoral field initiatives designed to build
            ecological resilience, restore degraded landscapes, and foster
            peaceful, thriving communities.
          </p>
        </div>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          {FILTER_CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.filterBtn} ${
                activeTab === tab.id ? styles.filterBtnActive : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Initiatives Grid */}
        <div className={styles.grid}>
          {filteredInitiatives.map((item) => (
            <article key={item.id} className={styles.initiativeCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 960px) 100vw, 50vw"
                  className={styles.cardImage}
                />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <span
                    className={styles.badge}
                    style={{
                      backgroundColor: item.badgeBg,
                      color: item.badgeColor,
                    }}
                  >
                    {item.category}
                  </span>

                  <div className={styles.pillarsRow}>
                    {item.pillars.map((p) => (
                      <span key={p} className={styles.pillarTag}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>

                <div className={styles.metricBox}>
                  <CheckCircle2 size={16} className={styles.metricIcon} />
                  <span>{item.metric}</span>
                </div>

                <div className={styles.footerRow}>
                  <div className={styles.sdgsTags}>
                    {item.sdgs.map((sdg) => (
                      <span key={sdg} className={styles.sdgPill}>
                        {sdg}
                      </span>
                    ))}
                  </div>

                  <Link href={item.href} className={styles.cardLink}>
                    <span>Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
