import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import blueCode from "../../../public/blueCode600x400.webp";

const Segment4Repeat = () => {
  const layoutItems = [
    "Covers",
    "Image layout pages",
    "Chapter break pages",
    "Appendix sections",
    "Insert table of contents",
    "Terms and conditions sections",
    "Document content options",
    "Chart templates",
    "Custom page layouts",
  ];

  const automationItems = [
    "Automation of header and footer content",
    "Insert and remove Landscape pages",
    "Insert and remove A3 pages",
    "Insert and remove Multiple column sections",
    "Styles clean up, Multilevel list clean up",
    "Insert Table lists & reset table lists numbering",
    "Additional custom colours theme",
    "Insert table, format table, apply table sub header row, and add caption",
    "Remove instructional text",
    "Removing heading numbers",
    "Apply paragraph numbering",
    "Custom find & replace",
    "Search and insert content from a data source",
  ];

  const renderList = (items) => (
    <div className={styles.pointsGrid}>
      {items.map((text, index) => (
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
  );

  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "6rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Custom Document Components for Tailored Solutions
            </h2>
            <p>
              Our comprehensive suite of components gives you access to advanced
              formatting, design, and smart automation tools that help you
              create polished, professional documents.
            </p>

            <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
              Advanced Layout & Design Options
            </h3>
            <p>
              We help you go beyond standard Word formatting with advanced
              layout and styling tools that make your documents professional,
              consistent, and visually engaging.
            </p>
            {renderList(layoutItems)}

            <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
              Automation & Smart Document Tools
            </h3>
            <p>
              Save time and reduce errors with intelligent automation features
              and content management tools that streamline complex tasks.
            </p>
            {renderList(automationItems)}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={blueCode}
              alt="digital design, futuristic coder"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
