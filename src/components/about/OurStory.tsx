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
            src="/images/about/about-story.jpg"
            alt="From Local Action to Global Impact - PCSDF"
            fill
            className={styles.storyImage}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Column: Narrative */}
        <div className={styles.textCol}>
          <span className="section-tag">OUR STORY</span>
          <h2 className={styles.title}>
            From Local Action
            <br />
            to Global Impact
          </h2>
          <p className={styles.paragraph}>
            PCSDF was founded with a simple but powerful belief: that peace,
            climate action and sustainable development are deeply connected.
            Since our inception, we have worked across diverse regions and
            communities, bringing together people, ideas and resources to create
            lasting change.
          </p>
          <p className={styles.paragraph}>
            Through strategic partnerships and community-led solutions, we
            address the root causes of vulnerability and build resilient
            communities for generations to come.
          </p>
        </div>
      </div>
    </section>
  );
}
