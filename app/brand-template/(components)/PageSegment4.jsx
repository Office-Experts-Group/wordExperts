import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import brandTemplate from "../../../public/brandTemplate600x400.webp";

const PageSegment4 = () => {
  const checkItems = [
    "Brand consistency",
    "Professionalism",
    "Ease-of-use for staff"
  ];

  return (
    <div
      className="animate-wrapper"
      id="brand-template-info"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "6rem 0 3rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>What Is a Brand Template in Microsoft Word?</h2>
            <p>
              A brand template in Microsoft Word is a pre-designed, reusable document that incorporates your company's logo, colours, fonts, layout styles, and tone — ensuring every letter, report, proposal, or internal doc looks and feels like it belongs to your business.
            </p>
            <p style={{ marginBottom: "1rem"}}>
              Whether it's a letterhead, invoice, tender document, or multi-page report, branded templates ensure:
            </p>
          </div>

          <div className={styles.points}>
            {checkItems.map((text, index) => (
              <div key={index} className={styles.point}>
                <div className={styles.tick}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={brandTemplate}
              alt="brand template example"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;