import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import brand from "../../../public/brand600x400.webp";

const Segment4Repeat = () => {
  const checkItems = [
    {
      strong: "Visually striking –",
      text: "clean, modern layouts that elevate your brand",
    },
    {
      strong: "Intuitively functional –",
      text: "features like automated headings and dynamic fields make document creation effortless",
    },
    {
      strong: "Robust and reliable –",
      text: "carefully structured to protect your formatting, styles, and brand identity",
    },
  ];

  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "6rem 0 0 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h2>About Our Designs</h2>
            </div>
            <p>
              <strong>
                We believe a Word template should be more than a blank page with
                a logo —
              </strong>{" "}
              it should be elegantly designed, highly functional, and built to
              last. Our templates are:
            </p>
          </div>

          <div className={styles.points}>
            {checkItems.map(({ strong, text }, index) => (
              <div
                key={index}
                className={styles.point}
                style={{ marginTop: ".5rem" }}
              >
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
                <p>
                  <strong>{strong}</strong> {text}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.content} style={{ marginTop: "1rem" }}>
            <p>
              By combining sophisticated design with technical precision, we
              ensure your templates not only look exceptional but also perform
              flawlessly, saving your team time and maintaining consistent,
              professional standards across every document.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={brand}
              alt="branding matters"
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
