import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import inefficiency from "../../../public/Inefficiency.webp";

const PageSegment4New = () => {
  return (
    <div
      className="animate-wrapper"
      id="document-solutions"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "6rem 0" }}>
        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={inefficiency}
              alt="inefficiency written on paper"
              width={300}
              height={200}
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Eliminate Inefficiencies and Document Errors
            </h2>
            <p>
              Many businesses struggle with inefficiencies in Word, documents
              that don't look consistent, templates that break under pressure,
              or staff spending hours fixing formatting instead of focusing on
              their real work. Untrained teams often develop their own
              workarounds, leading to lost productivity, brand inconsistencies,
              and even compliance risks.
            </p>
            <p>
              Our consultants can help to resolve these issues and bring
              cohesion back to your teams workflow. Troubleshooting problem
              files, reviewing and upgrading existing templates, or managing
              complex document conversions and migrations, we provide
              professional guidance that gets your team back on track. With
              highly experienced specialists and competitive rates, we deliver
              practical solutions that save time, reduce frustration, and ensure
              your documents perform the way they should.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4New;
