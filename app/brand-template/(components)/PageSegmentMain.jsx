import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import brandImage from "../../../public/brandingImage600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={brandImage}
            alt="Professional brand templates in Microsoft Word"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Professional, Consistent, On-brand...</p>
            <h2>Microsoft Word Templates Tailored for Your Business</h2>
            <p>
              Your brand is more than just a logo — it's how you present yourself in every document. At Word Experts, we specialise in creating Microsoft Word brand templates that align perfectly with your business identity. Whether you're launching a new brand, updating your visual identity, or standardising templates across teams, we'll ensure every document reflects your brand with precision and professionalism.
            </p>
            <p>
              Our advanced Word Template Solutions with Formatting Tab allow users to efficiently create corporate documents within your branding guidelines. This ensures that external formatting, or limited Word knowledge does not corrupt your <Link href={"/corporate-identity"}>corporate styles and functionality.</Link>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;