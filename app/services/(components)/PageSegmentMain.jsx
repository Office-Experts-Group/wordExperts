import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import solutions2 from "../../../public/solutions2.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div
        className={styles.imgWrapper}
        style={{ borderBottom: "none", paddingTop: "4.5rem" }}
      >
        <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
          <Image
            src={solutions2}
            alt="hand pressing a lightbulb"
            width={400}
            height={267}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Australia-wide Consultation</p>
            <h2>Custom Microsoft Word Solutions</h2>
            <p>
              With over 25 years of experience serving Australian businesses,
              Word Experts delivers comprehensive Microsoft Word solutions
              across all industries. Our senior consultants specialise in custom
              template creation, document automation, VBA development,
              accessibility compliance, custom ribbons and forms. From initial
              consultation and design through to deployment, training and
              ongoing support, we provide expert guidance at every stage.
              Whether you need to modernise legacy templates, automate
              repetitive document workflows, integrate Word with existing
              systems, or ensure accessibility compliance, our team has the
              technical expertise and industry knowledge to deliver reliable,
              efficient solutions that save you time and drive business success.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
