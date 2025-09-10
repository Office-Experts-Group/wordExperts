import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import handsIn from "../../../public/handsIn600x400.webp";

const PageSegment8 = () => {
  return (
    <section
      className={styles.pageSegment}
      id="get-in-touch"
      style={{ margin: "6rem 0 0 0" }}
    >
      <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
        <div className={styles.content}>
          <div className={styles.underline}>
            <h2>We're Here For You!</h2>
          </div>
          <p>
            <strong style={{ fontSize: "1.1rem" }}>
              Are you struggling with Word? Do you need some guidance from time
              to time?
            </strong>
          </p>
          <p>
            Via remote access or over the phone, we can offer you instant help
            and advice. Whether you are an individual or have a team of people,
            our experts are ready to talk through your requirements and help
            work through your issues. You'll appreciate having your own
            dedicated consultant available when you need them most.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
        <Image
          src={handsIn}
          alt="people joining hands"
          width={450}
          height={300}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default PageSegment8;
