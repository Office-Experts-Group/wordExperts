import React from "react";
import Image from "next/image";

import ServicesCard from "../../components/ServicesCard";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import CardIntersectionWrapper from "../../components/CardIntersectionWrapper";

import styles from "../../styles/services.module.css";

import corporate from "../../public/microsoft/corporateNoBG.webp";
import word from "../../public/microsoft/wordNoBG.webp";
import accessibility from "../../public/microsoft/accessibilityNoBG.webp";
import quickParts from "../../public/microsoft/quickPartsNoBG.webp";

import scott from "../../public/scott.webp";
import signature from "../../public/signature.webp";
// import Link from "next/link";

const Services = () => {
  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          {/* <div className={styles.subBox}>
            <p>
              Document Design and Development
              <span> for Microsoft Word</span>
            </p>
          </div> */}
          <h1>Microsoft Word Designers & Consultants</h1>
          {/* <p>
            When it comes to Microsoft Word, our Australia-wide, cross-industry
            consultants deliver a prompt, quality service with competitive
            pricing. Our Microsoft Word experts specialise in templates,
            document design, <Link href={"../fill-in-forms"}>forms</Link>,
            online documents, <Link href={"../accessibility"}></Link>
            accessibility, integration,{" "}
            <Link href={"../training"}>training and support</Link>.
          </p> */}
          <p>
            At Word Experts, we know Microsoft Word packs serious power under
            the hood, with powerful features extending beyond surface-level
            styling tools such as fonts, themes, and layouts.
          </p>
          <p>
            Properly engineered Word templates function as dynamic
            frameworks—leveraging advanced elements to enforce document
            consistency, automate formatting, and streamline workflows.
          </p>
          <p>
            They become more than just documents—they're intelligent tools that
            drive consistency and cut down manual work and human error. And with
            our custom automation powered by VBA, we push Word to its
            limits—creating smart solutions that generate documents, handle
            complex logic, and adapt to real-world workflows. Whether you're
            producing reports, proposals, or legal docs, our templates quietly
            run the show so teams stay efficient and on-brand without barely
            lifting a finger.
          </p>
          <div className={styles.signature}>
            <div>
              <Image src={scott} alt="Scott Robinson" width={30} height={30} />
            </div>
            <Image
              src={signature}
              alt="Scott signature"
              width={200}
              height={50}
            />
          </div>
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
