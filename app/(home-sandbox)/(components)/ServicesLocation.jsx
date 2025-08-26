import React from "react";

import ServicesCard from "../../components/ServicesCard";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import CardIntersectionWrapper from "../../components/CardIntersectionWrapper";

import styles from "../../styles/services.module.css";

import corporate from "../../public/microsoft/corporateNoBG.webp";
import word from "../../public/microsoft/wordNoBG.webp";
import accessibility from "../../public/microsoft/accessibilityNoBG.webp";
import quickParts from "../../public/microsoft/quickPartsNoBG.webp";

const Services = ({ location }) => {
  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          <div className={styles.subBox}>
            <p>
              Design, Development and Consulting
              <span> for Microsoft Word Solutions</span>
            </p>
          </div>
          <h2>Microsoft Word Services - {location}</h2>
          <p>
            Our reputation is built on delivering outstanding document
            solutions, cutting-edge template development, and reliable Word
            support. With a growing list of satisfied clients, we take pride in
            offering expert troubleshooting, customised document automation, and
            hands-on guidance to meet diverse documentation needs. Whether it's
            corporate templates, form creation, accessibility compliance, or
            advanced document workflows you're after, our 25yrs of Word
            expertise ensures tailored, effective solutions that empower your
            team's productivity.
          </p>
          <p>
            Working with a local Word consultant brings the added advantage of
            understanding regional business documentation requirements, faster
            response times and direct, face-to-face support when needed. Based
            in {location}, we are well-positioned to provide both remote and
            onsite assistance, ensuring businesses receive timely, professional
            document services from specialists who understand their unique
            document management challenges.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0} duration={1.5}>
        <div className={styles.cards}>
          <CardIntersectionWrapper>
            <ServicesCard
              src={corporate}
              alt={"Corporate Global Template Solution"}
              h3={"Corporate Global Template Solution"}
              li={[
                "Our advanced Corporate Word Template Solution enables users to efficiently create corporate documents in a controlled environment within your branding guidelines.",
              ]}
              link={"/corporate-global-template-solution"}
              linkText={"Template Solutions"}
            />
          </CardIntersectionWrapper>
          <CardIntersectionWrapper>
            <ServicesCard
              src={word}
              alt={"Word Document & Template Creation"}
              h3={"Word Document & Template Creation"}
              li={[
                "Let us take the stress out of your company templates. We create easy to use templates for all of your organisation's documents with your branding, a consistent look and a professional feel.",
              ]}
              link={"/word-document-template-creation"}
              linkText={"Template Creation"}
            />
          </CardIntersectionWrapper>
          <CardIntersectionWrapper>
            <ServicesCard
              src={accessibility}
              alt={"Accessibility"}
              h3={"Accessibility"}
              li={[
                "Templates created to Accessibility Guidelines.",
                "Ensure your Corporate or Government documentation adheres to Accessibility Guidelines.",
              ]}
              link={"/accessibility"}
              linkText={"Accessibility"}
            />
          </CardIntersectionWrapper>
          <CardIntersectionWrapper>
            <ServicesCard
              src={quickParts}
              alt={"Quick Parts"}
              h3={"Quick Parts"}
              li={[
                "Increase productivity and reduce repetition",
                "With Quick Parts and Building Blocks we can pre-design page layouts, content, image placements and more for easy insertion by users",
              ]}
              link={"/quick-parts"}
              linkText={"Quick Parts"}
            />
          </CardIntersectionWrapper>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Services;
