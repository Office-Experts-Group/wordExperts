import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/howWeWork.module.css";

import spanner from "../../../public/spanner.webp";

const HowWeWork = () => {
  return (
    <section
      className={styles.pageSegment}
      style={{ gap: "2rem", position: "relative" }}
    >
      <div className={styles.imgContainer}>
        <Image src={spanner} alt="spanner" width={300} height={300} />
      </div>
      <div className={styles.underline}>
        <h2>How We Work</h2>
      </div>
      <div className={styles.ourProcess}>
        <AnimateOnScroll animation="slide-up" duration={0.3} delay={0.1}>
          <p style={{ marginBottom: "1rem", maxWidth: "100%" }}>
            We start by understanding your document needs and current
            challenges. Our team meets with you to discuss your workflows,
            review existing templates, and identify opportunities for
            improvement. We analyse your branding requirements, compliance
            needs, and technical environment to design a Word solution that fits
            your business. During the design phase, we create detailed
            specifications and, where appropriate, develop drafts for review.
          </p>
          <p style={{ marginBottom: "3rem", maxWidth: "100%" }}>
            Once the design is approved, we build your custom templates, macros,
            and automation tools. We test everything thoroughly and involve your
            team in user acceptance testing. When development is complete, we
            can work with your IT department to ensure a smooth rollout. We
            provide training focused on using custom ribbons and their new
            functions, along with detailed documentation. Our support continues
            after implementation with ongoing template support and updates as
            your needs change.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HowWeWork;
