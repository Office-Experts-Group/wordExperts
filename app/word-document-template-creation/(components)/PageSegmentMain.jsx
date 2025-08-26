import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import temp from "../../../public/temp600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={temp}
            alt="people working on a graph"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>For a consistent and professional look</p>
            <h2>Custom Document and Template Solutions</h2>
            <p>
              We create Microsoft Word templates that are{" "}
              <strong>striking, refined, and impeccably crafted.</strong> Every
              design blends elegant form and flawless function — with polished
              layouts, brand-perfect styling, and user-friendly features that
              make document creation effortless.
            </p>
            <p>
              Our templates are robust and reliable, holding their formatting no
              matter who uses them. They save your team valuable time, reduce
              errors, and deliver consistent, professional, and visually
              stunning results — whether it's a single letterhead or a complete
              corporate suite.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
