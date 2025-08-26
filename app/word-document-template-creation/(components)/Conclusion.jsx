import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";
import Link from "next/link";

const Conclusion = () => {
  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "3rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <p style={{ fontWeight: "700", textAlign: "center" }}>
              With Word Experts, you're not just getting a template — you're
              gaining a long-term solution for consistent branding, efficient
              workflows, and polished communication. Every document your team
              creates will be visually striking, professionally formatted, and
              effortless to use, giving your organisation a cohesive,
              high-quality presence across all its documentation.
            </p>
            <p style={{ fontWeight: "700", textAlign: "center" }}>
              To make your workflow even more seamless, our templates can be
              paired with a{" "}
              <Link
                style={{ color: "#046999", fontWeight: "700" }}
                href="/custom-toolbars-and-ribbons"
              >
                a custom Word ribbon
              </Link>
              , providing quick access to your templates, building blocks, and
              key features directly within Word.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Conclusion;
