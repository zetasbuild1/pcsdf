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
    title: "Community-Based Mangrove & Coastal Restoration",
    category: "CLIMATE & RESTORATION",
    categoryId: "climate-restoration",
    badgeBg: "#eaf5ee",
    badgeColor: "#17633e",
    image: "/images/knowledge/mangrove.jpg",
    pillars: ["Restoration", "Adaptation", "Conservation"],
    sdgs: ["SDG 13", "SDG 14", "SDG 15"],
    description:
      "Mobilizing coastal communities to replant and steward degraded mangrove forests, stabilizing vulnerable estuarine lagoons and establishing biological storm buffers against sea-level rise.",
    metric: "120,000+ Propagules Planted · 4 Estuarine Lagoons Stabilized",
    href: "/knowledge-hub#mangrove-restoration",
  },
  {
    id: "grassroots-peacebuilding",
    title: "Peacebuilding Through Inclusive Community Dialogue",
    category: "COMMUNITY & PEACE",
    categoryId: "community-peace",
    badgeBg: "#e6f1f8",
    badgeColor: "#17537b",
    image: "/images/news-2.jpg",
    pillars: ["Retention", "Adaptation"],
    sdgs: ["SDG 16", "SDG 10"],
    description:
      "Establishing participatory conflict-resolution assemblies to peacefully resolve natural resource tensions between farming and pastoral communities, fostering long-term social cohesion.",
    metric: "35 Peace Councils Formed · 18 Villages Co-Managing Resources",
    href: "/news#strengthening-local-governance",
  },
  {
    id: "rural-clean-energy",
    title: "Decentralized Solar & Clean Energy for Rural Communities",
    category: "CLEAN ENERGY",
    categoryId: "renewable-energy",
    badgeBg: "#f0f6e5",
    badgeColor: "#436319",
    image: "/images/renewable.jpg",
    pillars: ["Mitigation", "Regeneration"],
    sdgs: ["SDG 7", "SDG 13", "SDG 8"],
    description:
      "Installing autonomous solar mini-grids and clean cooking systems in remote off-grid villages, cutting carbon emissions while unlocking green economic livelihoods for women entrepreneurs.",
    metric: "45 Mini-Grids Installed · 1,800 Households Powered",
    href: "/knowledge-hub#renewable-energy",
  },
  {
    id: "climate-smart-agroforestry",
    title: "Climate-Smart Agroforestry & Dry-Zone Food Security",
    category: "SUSTAINABLE AGRICULTURE",
    categoryId: "sustainable-agriculture",
    badgeBg: "#fbf3e0",
    badgeColor: "#8b630e",
    image: "/images/knowledge/agriculture.jpg",
    pillars: ["Circularity", "Adaptation", "Regeneration"],
    sdgs: ["SDG 2", "SDG 1", "SDG 12"],
    description:
      "Equipping smallholder farmers with drought-tolerant indigenous crops, drip irrigation systems, and organic bio-fertilizer protocols to guarantee food security under erratic climate patterns.",
    metric: "2,400 Smallholders Certified · 35% Crop Yield Enhancement",
    href: "/knowledge-hub#agriculture-food-security",
  },
  {
    id: "marine-protected-corridors",
    title: "Marine Protected Corridors & Artisanal Fisheries",
    category: "MARINE & OCEANS",
    categoryId: "marine-oceans",
    badgeBg: "#e2f6f8",
    badgeColor: "#126d7c",
    image: "/images/marine.jpg",
    pillars: ["Conservation", "Restoration"],
    sdgs: ["SDG 14", "SDG 8"],
    description:
      "Establishing community-managed marine reserves and artificial reefs, curbing destructive trawling and revitalizing pelagic breeding grounds to secure the blue economy.",
    metric: "180 sq km Reef Safeguarded · 12 Coastal Fisher Guilds Supported",
    href: "/knowledge-hub#marine-ecosystems",
  },
  {
    id: "youth-green-leadership",
    title: "Youth Climate Leadership & Green Entrepreneurship",
    category: "COMMUNITY & PEACE",
    categoryId: "community-peace",
    badgeBg: "#f3e7f8",
    badgeColor: "#6e278f",
    image: "/images/knowledge/youth-sdgs.jpg",
    pillars: ["Retention", "Circularity"],
    sdgs: ["SDG 4", "SDG 8", "SDG 17"],
    description:
      "Incubating youth-led climate ventures and grassroots environmental advocacy cohorts, equipping emerging leaders with technical skills, mentorship, and seed grants.",
    metric: "65 Green Ventures Funded · 320 Youth-Led Green Jobs Created",
    href: "/knowledge-hub#youth-sdgs",
  },
  {
    id: "watershed-forest-protection",
    title: "Indigenous Cloud Forest & Watershed Reforestation",
    category: "CLIMATE & RESTORATION",
    categoryId: "climate-restoration",
    badgeBg: "#eaf5ee",
    badgeColor: "#17633e",
    image: "/images/reforestation.jpg",
    pillars: ["Restoration", "Conservation"],
    sdgs: ["SDG 6", "SDG 15"],
    description:
      "Re-establishing native forest corridors in critical upland catchment basins, preventing catastrophic soil erosion, recharging subterranean aquifers, and protecting freshwater supplies.",
    metric: "350 Hectares Restored · 40,000 Downstream Residents Benefited",
    href: "/news#coastal-reforestation",
  },
  {
    id: "circular-waste-regeneration",
    title: "Circular Biomass & Bio-Char Soil Regeneration",
    category: "SUSTAINABLE AGRICULTURE",
    categoryId: "sustainable-agriculture",
    badgeBg: "#fbf3e0",
    badgeColor: "#8b630e",
    image: "/images/community.jpg",
    pillars: ["Circularity", "Regeneration", "Mitigation"],
    sdgs: ["SDG 12", "SDG 13"],
    description:
      "Converting crop waste into high-stability biochar through pyrolytic technology, permanently sequestering carbon while rejuvenating degraded rural soil moisture retention.",
    metric: "850 Metric Tons Biomass Diverted · 600 Acres Treated",
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
