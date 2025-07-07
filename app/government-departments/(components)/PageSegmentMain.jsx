import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import ladyComputer from "../../../public/ladyComputer600x400.webp";
import Link from "next/link";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={ladyComputer}
            alt="Lady using a computer"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Customised Document Solutions </p>
            <h2>Accessible, Consistent, and Compliant Document Templates</h2>
            <p>
              Our team of Word design experts are highly experienced in working
              with Government departments. We take your need for <Link href={"/accessibility"}>accessible
              documents and templates</Link> seriously and deliver consistent
              formatting, corporate identity protection and so much more.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
