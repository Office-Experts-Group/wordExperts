import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegmentDropdowns.module.css";

import word from "../../../public/word600x400.webp";

const BrandingServices = () => {
    const serviceDetails = [
      {
        title: "Template Design & Creation",
        content: (
          <ul>
            <li>Fully branded Microsoft Word templates</li>
            <li>Letterheads, invoices, reports, proposals & more</li>
            <li>Header/footer with logos, legal disclaimers, company info</li>
          </ul>
        ),
      },
      {
        title: "Rebranding & Style Guide Implementation",
        content: (
          <ul>
            <li>Update old templates with new templates including Covers, layouts, logos, fonts, and colours</li>
            <li>Align with your brand style guide</li>
            <li>Consistency across all document types</li>
          </ul>
        ),
      },
      {
        title: "Advanced Functionality",
        content: (
          <ul>
            <li>Built-in styles and formatting tools</li>
            <li>Content controls and editable placeholders</li>
            <li>Training materials for team rollout</li>
            <li>Custom Formatting and Automation Tab/Ribbon to ensure users stay on brand</li>
          </ul>
        ),
      },
    ];

  return (
    <div className={styles.upgradeSection}>
      <div className={styles.content}>
        <h2>Our Microsoft Word Branding Services</h2>
        <p style={{ fontWeight: "700", marginBottom: "1rem"}}>
          We create efficient branded templates to match your business identity — whether you're starting fresh or rebranding.
        </p>

        <div className={styles.faqContainer}
        style={{ maxWidth: "90%"}}>
          {serviceDetails.map((service, index) => (
            <details 
              key={index} 
              className={styles.faqItem}
              open={index === 0 ? true : undefined}
            >
              <summary>
                <span className={styles.questionText}>
                  <span>{service.title}</span>
                </span>
              </summary>
              <div className={styles.content}
              style={{ marginLeft: "2rem", color: "#777a7e"}}>
                {service.content}
              </div>
            </details>
          ))}
        </div>
      </div>

      <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
        <div className={styles.imgSection}
        style={{ height: "100%", display: "flex"}}>
          <Image
            src={word}
            alt="microsoft word screenshot"
            width={600}
            height={400}
            className={`${styles.mainImg}`}
            style={{ margin: "0 auto"}}
          />
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default BrandingServices;