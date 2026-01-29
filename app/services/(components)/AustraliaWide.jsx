import React from "react";
import Link from "next/link";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import aus from "../../../public/ausBG.webp";

const AustraliaWide = () => {
  return (
    <section className={styles.pageSegmentContainer}>
      <Image
        src={aus}
        alt="australia"
        width={600}
        height={600}
        className={styles.absImage}
      />
      <div
        className={styles.pageSegment}
        style={{
          backgroundColor: "#f8f9fa",
          padding: "6rem 10vw",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.content}>
            <p style={{ color: "#046999", fontWeight: "700" }}>
              Your Local Consultants
            </p>
            <h2 style={{ marginBottom: "1rem", zIndex: "10" }}>
              Servicing All of Australia
            </h2>
            <p style={{ zIndex: "10" }}>
              Word Experts provides comprehensive Microsoft Word consulting
              services across Australia. Our consultants deliver both remote
              support and on-site consulting to businesses in all major cities
              and regional areas. With local expertise in each region and deep
              understanding of Australian business requirements, compliance
              standards and industry practices, we're positioned to provide
              timely, professional document solutions wherever you're located.
              Whether you need template creation, document automation,
              accessibility compliance, or full-scale Word development, our team
              ensures you receive expert support with minimal travel costs and
              maximum efficiency.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ marginLeft: "auto" }}>
              <Link
                href={"/locations"}
                className={styles.locationBtn}
                style={{ marginTop: "2rem" }}
              >
                See All Our Locations
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AustraliaWide;
