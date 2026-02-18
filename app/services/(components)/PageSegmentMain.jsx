import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import FlipBook from "../../../components/FlipBook";

import page1 from "../../../public/books/environment/page1.webp";
import page2 from "../../../public/books/environment/page2.webp";
import page3 from "../../../public/books/environment/page3.webp";
import page4 from "../../../public/books/environment/page4.webp";
import page5 from "../../../public/books/environment/page5.webp";
import page6 from "../../../public/books/environment/page6.webp";
import page7 from "../../../public/books/environment/page7.webp";
import page8 from "../../../public/books/environment/page8.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div
        className={styles.imgWrapper}
        style={{ borderBottom: "none", paddingTop: "3rem" }}
      >
        <FlipBook
          images={[page1, page2, page3, page4, page5, page6, page7, page8]}
          size="full"
          scrollOffset={50} // px of scroll to trigger a page turn
          animDuration={900} // ms for the flip animation
        />
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
