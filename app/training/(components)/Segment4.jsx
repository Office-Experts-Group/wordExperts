import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import Image from "./Image";

import styles from "../../../styles/pageSegment4.module.css";

const Segment4 = () => {
  const checkItems = [
    {
      strong: "Core Word Skills",
      text: (
        <>
          Build a solid foundation in Word with practical training in styles,
          formatting, navigation, and layout control. These essential skills
          help your staff work faster, avoid common errors, and produce
          documents that look professional every time.
        </>
      ),
    },
    {
      strong: "Template & Branding Mastery",
      text: (
        <>
          Learn how to get the most out of templates, with corporate styling ,{" "}
          <Link href="/quick-parts">quick parts</Link>, and{" "}
          <Link href="/custom-toolbars-and-ribbons">custom ribbons</Link>. We'll
          show your team how to maintain brand consistency across all documents,
          so every report, proposal, or letter reflects your organisation's{" "}
          <Link href="/corporate-identity">
            <strong>corporate identity</strong>
          </Link>
          .
        </>
      ),
    },
    {
      strong: "Automation & Efficiency",
      text: (
        <>
          Go beyond the basics with tools that cut down repetitive work. From
          mail merge and automated numbering to introductory{" "}
          <Link href="https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development">
            VBA and macros
          </Link>
          , we'll help staff streamline tasks and boost productivity.
        </>
      ),
    },
    {
      strong: "Collaboration & Compliance",
      text: (
        <>
          Improve teamwork and document integrity with training on track
          changes, version control,{" "}
          <Link href="/accessibility">
            <strong>accessibility</strong>
          </Link>{" "}
          features, and{" "}
          <Link href="/word-document-template-creation">
            <strong>templates</strong>
          </Link>{" "}
          protection. These skills ensure documents remain accurate, compliant,
          and easy to manage across your organisation.
        </>
      ),
    },
  ];

  return (
    <div
      className="animate-wrapper"
      id="training"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "6rem 0 1rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h2>Practical Skills for Smarter Document Creation</h2>
            </div>
            <p>
              We provide <strong>high-quality, professionally tailored</strong>{" "}
              training for individuals, teams, and entire corporations. We can
              also create clear “how-to” videos for your staff to reference
              after the training. With highly experienced trainers and a focus
              on practical, task-specific learning, our programs are both
              time-efficient and cost-effective.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "-2rem 0",
            }}
          >
            <Image />
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
        </AnimateOnScroll>

        {/* <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={design}
              alt="digital design compilation"
              width={495}
              height={330}
            />
          </div>
        </AnimateOnScroll> */}
      </div>
    </div>
  );
};

export default Segment4;
