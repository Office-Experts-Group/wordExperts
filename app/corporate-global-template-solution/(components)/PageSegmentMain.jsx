import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import coder from "../../../public/540x480/coder.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={coder}
            alt="person working on computer code"
            width={540}
            height={480}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Advanced Corporate Template Solutions</p>
            <h2>Efficient and Consistent Branding for Your Documents</h2>
            <p>
              Our advanced Corporate Word Template Solution enables users to
              efficiently create corporate documents in a controlled environment
              within your branding guidelines.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
