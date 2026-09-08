import React from "react";
import styles from "./WorkMethodology.module.css";

const STEPS = [
  {
    num: "01",
    title: "Community Listening & Needs Assessment",
    desc: "We initiate every intervention by listening. Through participatory rural appraisals and village assemblies, we identify indigenous priorities, land tenure dynamics, and vulnerability flashpoints.",
  },
  {
    num: "02",
    title: "Co-Designing Ecological Solutions",
    desc: "We bridge traditional community wisdom with rigorous ecological science, satellite GIS mapping, and climate modeling to design interventions tailored to local micro-climates.",
  },
  {
    num: "03",
    title: "Grassroots Implementation & Capacity",
    desc: "Field execution is led by local stewardship committees, women's cooperatives, and youth leaders. We provide training, nursery infrastructure, and sustainable management protocols.",
  },
  {
    num: "04",
    title: "Monitoring, Verification & Open Data",
    desc: "Every initiative undergoes multi-year biological metric tracking, survivability audits, and socio-economic evaluations, with findings openly shared through our Knowledge Hub.",
  },
];

export default function WorkMethodology() {
  return (
    <section className={styles.section} id="methodology">
      <div className={styles.container}>
        <div className={styles.headerText}>
          <span className={styles.tag}>OUR PROGRAMMATIC APPROACH</span>
          <h2 className={styles.title}>How We Turn Vision into Impact</h2>
          <p className={styles.subtitle}>
            True sustainability cannot be imposed from the top down. Our
            proven four-stage methodology ensures deep community ownership and
            inter-generational longevity.
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
