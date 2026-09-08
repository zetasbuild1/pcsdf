import React from "react";
import styles from "./WorkMethodology.module.css";

const STEPS = [
  {
    num: "01",
    title: "Systemic Polycrisis Diagnosis",
    desc: "We listen across communities, Indigenous leaders, and policymakers to identify cascading risks across ecological boundaries, conflict lines, and economic vulnerabilities.",
  },
  {
    num: "02",
    title: "Constitutional Co-Design & Taxonomy Alignment",
    desc: "We bridge ancestral knowledge, faith traditions, and scientific data with the 30-system architecture and 332-sector taxonomy to create integrated governance blueprints.",
  },
  {
    num: "03",
    title: "Intergenerational Capital & Policy Mobilization",
    desc: "We align public, private, and philanthropic finance mechanisms with peace, climate-friendliness, and regeneration to power durable multi-stakeholder programs.",
  },
  {
    num: "04",
    title: "The Hive: Monitoring, Learning & Stewardship",
    desc: "Deploying our integrated MEAL Hive to evaluate progress and emerging risks across all systems, sectors, scales, stakeholders, and generations.",
  },
];

export default function WorkMethodology() {
  return (
    <section className={styles.section} id="methodology">
      <div className={styles.container}>
        <div className={styles.headerText}>
          <span className={styles.tag}>CONSTITUTIONAL OPERATING SYSTEM</span>
          <h2 className={styles.title}>From Policy to Intergenerational Action</h2>
          <p className={styles.subtitle}>
            Governing sustainability in an era of polycrisis requires more than checklists.
            Our four-stage framework translates constitutional principles into systemic, measurable stewardship.
          </p>
        </div>

        <div className={styles.timeline}>
          {STEPS.map((step) => (
            <div key={step.num} className={styles.stepCard}>
              <span className={styles.stepNumber}>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
