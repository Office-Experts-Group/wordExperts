import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import laptop from "../../../public/laptop400x300.webp";

const PageSegment4 = () => {
  const checkItems = [
    {
      text: "Resolve Your Issues",
      link: null,
    },
    {
      text: "Document Reviews",
      link: null,
    },
    {
      text: "Onsite or Remote Access",
      link: null,
    },
    {
      text: "Troubleshoot Documents",
      link: null,
    },
    {
      text: "Professional Guidance",
      link: null,
    },
    {
      text: "Upgrades and Migration",
      link: "/upgrades-and-migration",
    },
    {
      text: "Highly Experienced Consultants",
      link: null,
    },
    {
      text: "Document Conversions",
      link: null,
    },
    {
      text: "Competitive Rates",
      link: "/contact-us/request-a-quote",
    },
  ];

  return (
    <div
      className="animate-wrapper"
      id="word-assistance"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "6rem 0 3rem 0" }}>
        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={laptop}
              alt="digital design of laptop"
              width={400}
              height={300}
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>Microsoft Word Assistance</h2>
            <p>
              Have our experts take over the word processing logistics for you,
              enabling your team to efficiently create the content you need.
            </p>
          </div>

          <div className={styles.pointsGrid}>
            {checkItems.map((item, index) => {
              const pointContent = (
                <>
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
                  <p>{item.text}</p>
                </>
              );

              return item.link ? (
                <Link
                  key={index}
                  href={item.link}
                  className={styles.point}
                  style={{ cursor: "pointer", color: "#046999 !important" }}
                >
                  {pointContent}
                </Link>
              ) : (
                <div key={index} className={styles.point}>
                  {pointContent}
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
