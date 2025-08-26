import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/isRight.module.css";

import isRight from "../../../public/isRight.webp";
import Link from "next/link";

const IsRight = () => {
  return (
    <div className={styles.isRight}>
      {/* <AnimateOnScroll animation="scale-down" delay={0.2} duration={1.6}>
        <div className={styles.imgWrapper}>
          <div className={styles.imgDiv}>
            <Image
              className={styles.imgMain}
              src={isRight}
              alt="person using a laptop"
              width={505}
              height={635}
            />
          </div>
        </div>
      </AnimateOnScroll> */}

      <AnimateOnScroll animation="scale-down" delay={0.2} duration={1.6}>
        <div className={styles.contentWrapper}>
          <div className={styles.sub}>
            <p>Transform Your Documents</p>
          </div>
          <h2>Controlled Copy & Paste for Consistent Formatting</h2>
          <p className={styles.text}>
            Our solution includes smart copy-and-paste functionality that
            content pasted between Word documents conforms to your corporate
            styles. Standard Word styles like Heading and Normal are
            automatically mapped to your branding, unknown formatting defaults
            to your Normal style, and character formatting (like bold and
            italic) is preserved where possible. Lists reset numbering
            correctly, and tables automatically apply your default table
            style—maintaining consistency across every document.
          </p>
          {/* <div className={styles.contentGrid}>
            <div className={styles.excerpt}>
              <div>
                <div className={styles.bar}></div>
                <h3>Corporate Template Solutions</h3>
              </div>
              <p>
                Protected templates that maintain brand consistency and document
                integrity.
              </p>
            </div>
            <div className={styles.excerpt}>
              <div>
                <div className={styles.bar}></div>
                <h3>Expert Implementation</h3>
              </div>
              <p>
                Comprehensive design, development, and training support
                nationwide.
              </p>
            </div>
          </div> */}

          <Link
            href="/custom-toolbars-and-ribbons"
            className={`btn ${styles.btn}`}
          >
            Learn More
          </Link>
        </div>
      </AnimateOnScroll>

      <div>
        <video
          className={styles.video}
          width="90%"
          height="auto"
          controls
          preload="metadata"
        >
          <source src="/videos/word-template-solutions.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.contentGrid}>
          <div className={styles.excerpt}>
            <div>
              <div className={styles.bar}></div>
              <h3>Corporate Template Solutions</h3>
            </div>
            <p>
              Protected templates that maintain brand consistency and document
              integrity.
            </p>
          </div>
          <div className={styles.excerpt}>
            <div>
              <div className={styles.bar}></div>
              <h3>Expert Implementation</h3>
            </div>
            <p>
              Comprehensive design, development, and training support
              nationwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsRight;
