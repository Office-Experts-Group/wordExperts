import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/whyChoose.module.css";

import faqs from "../../../faqs/about-us";

import semi from "../../../public/shapes/semi600x600.webp";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChoose}>
      <Image
        src={semi}
        alt="Semi Circle"
        height={900}
        width={900}
        className={styles.semi}
      />
      <AnimateOnScroll animation="fade-up-right" delay={0} duration={1.5}>
        <div className={styles.content}>
          <p>Why Choose Us?</p>
          <h2>Personalised Service, Backed by the Office Experts Group</h2>
          <p>
            As part of the{" "}
            <Link href="https://www.officeexperts.com.au">
              Office Experts Group
            </Link>
            , we bring not just Microsoft Word expertise, but the combined
            knowledge and capability of a team specialising in the full
            Microsoft Office suite, integrations, and automation across
            platforms.
          </p>
          <p>
            We're committed to delivering high-quality, customised solutions
            with attentive, personal support. Whether you're looking for
            document automation, system integration, or complex template design,
            you'll have access to the broader skills and services of our entire
            Microsoft technologies team.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="slide-right" delay={0} duration={1.5}>
        <div className={styles.dropdowns}>
          <div className={styles.faqContainer} role="group">
            {faqs.map(({ question, answer }, index) => (
              <details
                key={`faq-${index}`}
                className={styles.faqItem}
                name="faq-group"
              >
                <summary>
                  <p className={styles.questionText}>{question}</p>
                </summary>
                <div className={styles.faqContent}>
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default WhyChooseUs;
