import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import training from "../../../public/training600x400.webp";

const PageSegment3 = () => {
  return (
    <section className={styles.pageSegment} style={{ marginBottom: "6rem" }}>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={training}
          alt="person clicking a computer mouse"
          width={400}
          height={250}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>Professional Word Solutions</h2>
          </div>
          <p>
            We create brand consistent solutions for your company. Controls can
            be added to documents to assist users. We can create highly complex
            documents by using features such as headers/footers, styles,
            protection, tables, columns, content controls, VBA, quick parts,
            bookmarks, fields, table of contents and many other features.
          </p>

          <p>
            If you need a Word template created properly, contact one of our
            designers to talk through your requirements.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
