import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import blueGraphs from "../../../public/540x480/blueGraphs.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={blueGraphs}
            alt="graphs"
            width={540}
            height={480}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Streamline data entry</p>
            <h2>Interactive Popup Forms for Enhanced Document Control</h2>
            <p>
              Our team of Word design experts delivers custom document templates
              with powerful popup forms. By guiding users through the data entry
              process, we help improve productivity, reduce errors, and elevate
              document quality—all while saving your business time and
              resources.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
