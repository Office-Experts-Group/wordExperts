import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/services2.module.css";

const Services = () => {
  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          <div className={styles.subBox}>
            <p>Solutions from the Word Whisperers</p>
          </div>
          <h2>Microsoft Word Designers and Consultants</h2>
          <p>
            At Word Experts, we know Microsoft Word packs serious power under
            the hood, with powerful features extending beyond surface-level
            styling tools such as fonts, themes, and layouts.
          </p>
          <p>
            Properly engineered Word templates function as dynamic
            frameworks—leveraging advanced elements to enforce document
            consistency, automate formatting, and streamline workflows.
          </p>
          <p>
            They become more than just documents—they're intelligent tools that
            drive consistency and cut down manual work and human error. With our
            custom automation we push Word to its limits—creating smart
            solutions that generate documents, handle complex logic, and adapt
            to real-world workflows. Whether you're producing reports,
            proposals, or legal docs, our templates quietly run the show so
            teams stay efficient and on-brand without barely lifting a finger.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Services;
