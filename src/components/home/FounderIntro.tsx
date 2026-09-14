import React from "react";
import Image from "next/image";
import styles from "./FounderIntro.module.css";

export default function FounderIntro() {
  return (
    <section className={styles.founderSection}>
      <div className={styles.container}>
        {/* Narrative & Quote */}
        <div className={styles.contentCol}>
          <span className="section-tag">MESSAGE FROM THE FOUNDER</span>
          <h2 className={styles.headline}>
            “Did We Hear the Voices of the Poor at the Turn of the Century?”
          </h2>

          <div className={styles.quoteBox}>
            <p className={styles.keyQuote}>
              “If future generations, nature, and the global commons cannot speak for themselves,
              who will speak for them?”
            </p>
          </div>

          <p className={styles.paragraph}>
            Our work starts from a simple question: can we hear – and honour – the voices of future
            generations, non-human life, and the living planet in the decisions we take today?
          </p>

          <p className={styles.paragraph}>
            Exploring life’s intricate tapestry, each choice reveals regenerative pathways toward
            the exceptional — calling for innovation to imagine what does not yet exist,
            inquisitiveness to keep learning beyond the familiar, and bravery to step forward despite
            uncertainty. Through this spirit, challenges become teachers, horizons expand, and the
            journey itself becomes a deeply meaningful and richly satisfying voyage.
          </p>

          <div className={styles.signatureRow}>
            <span className={styles.founderName}>Chaitri (Chai) N. Hapugalle</span>
            <span className={styles.founderTitle}>Founder &amp; Director, PCSDF</span>
          </div>
        </div>

        {/* Founder Portrait */}
        <div className={styles.imageCol}>
          <Image
            src="/images/pcsdf/IMG_0685-7-768x1024.jpeg"
            alt="Founder Chaitri (Chai) N. Hapugalle - Peace-Led Climate-Friendly Sustainable Development Forum"
            fill
            className={styles.founderImage}
            sizes="(max-width: 1024px) 100vw, 380px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
