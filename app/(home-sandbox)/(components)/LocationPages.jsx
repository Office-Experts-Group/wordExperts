import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../components/AnimateOnScroll";

import styles from "../../styles/pageSegment.module.css";

import migrate from "../../public/migrate600x400.webp";

const LocationPages = ({ location }) => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={migrate}
            alt="Image of a files leaving a computer"
            width={600}
            height={400}
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Microsoft Word Consultants</p>
            <h2>{location}</h2>
            <p>
              Our Microsoft Word team at Word Experts {location} specialise in
              document solutions and template development. We deliver
              exceptional results in corporate documentation, form creation,
              accessibility compliance, and document automation workflows.
            </p>
            <p>
              Through our extensive and growing customer base, our highly
              experienced Microsoft Word consulting team is renowned for
              productivity enhancement, responsive client support, creative
              document solutions, customised training programs, and
              comprehensive troubleshooting capabilities.
            </p>
          </div>
          <a href="#contact" className={`${styles.btn} ${styles.locationBtn}`}>
            Contact Your Local {location} Experts
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="2"
              viewBox="0 0 1024 1024"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path>
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default LocationPages;
