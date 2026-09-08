import React from "react";
import Image from "next/image";
import styles from "./OurStory.module.css";

export default function OurStory() {
  return (
    <section className={styles.storySection} id="story">
      <div className={styles.container}>
        {/* Left Column: Story Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/pcsdf/IMG_0685-7-768x1024.jpeg"
            alt="Chaitri (Chai) N. Hapugalle at Keong Saik Road, Chinatown, Singapore - PCSDF"
            fill
            className={styles.storyImage}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Column: Narrative */}
        <div className={styles.textCol}>
          <span className="section-tag">OUR ORIGIN & EVOLUTION</span>
          <h2 className={styles.title}>
            From Singapore to the Global Commons
          </h2>
          <p className={styles.paragraph}>
            The Peace-Led Climate-Friendly Sustainable Development Forum (PCSDF) is registered
            in Singapore as a Company Limited by Guarantee, incorporated on <strong>24 December 2021</strong>.
            Founder and Director <strong>Chaitri (Chai) N. Hapugalle</strong>, post cancer surgery, celebrated her
            birthday and the e-launch of the Forum on <strong>7 June 2022 at Keong Saik Road, Chinatown, Singapore</strong> —
            marking the beginning of our intergenerational voyage.
          </p>
          <p className={styles.paragraph}>
            Through engagement in global policy dialogues and systemic research, PCSDF recognized that
            climate change, biodiversity loss, conflict, inequality, and technological disruption are deeply
            interconnected manifestations of a global polycrisis.
          </p>
          <p className={styles.paragraph}>
            Recognizing this reality, the Forum has evolved beyond supporting siloed development targets
            toward pioneering the world&apos;s first peace-led constitutional governance operating system for a regenerative era.
          </p>
        </div>
      </div>
    </section>
  );
}
