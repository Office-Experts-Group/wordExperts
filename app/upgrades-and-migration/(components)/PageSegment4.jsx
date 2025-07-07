import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import upgrade from "../../../public/upgrade600x400.webp";
import Link from "next/link";

const PageSegment4 = () => {
  return (
    <div className="animate-wrapper">
      <div className={`${styles.pageSegment} ${styles.customMargin}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Upgrades and Migration</h2>
            </div>
            <p>
              The extensive experience of our <Link href={"/meet-the-team"}> team of Word design experts</Link> is
              available to ensure your upgrades and migrations go smoothly, by
              mitigating the risk of formatting and design issues and saving you
              the associated stress and frustrations of troubleshooting and
              disaster recovery.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={upgrade}
              alt="upgrade text on digital design"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
