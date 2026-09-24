// app/(home)/(components)/Services.jsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Compiled CSS from styles/services2.module.scss
import styles from "../../../styles/services2.module.css";

// Static image imports so Next.js can optimise them at build time
import scott from "../../../public/team/scott.webp";
import signature from "../../../public/signatureBlack.webp";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.content}>
        <div className={styles.subBox}>
          <p>Experts in the field</p>
        </div>
        <h1>
          Microsoft Word <br></br>
          <span className={styles.accent}>Designers and Consultants</span>
        </h1>
        <p className={styles.lead}>
          At Word Experts, we know Microsoft Word packs serious power under the
          hood, with powerful features extending beyond surface-level styling
          tools such as fonts, themes, and layouts.
        </p>
        <p>
          Properly engineered Word templates function as dynamic frameworks that
          utilise advanced elements to enforce document consistency with
          automated formatting, and maintain your brand identity.
        </p>
        <p>
          Our solutions enforce consistency across your organisation by cutting
          down on manual work and human error. With our custom automation we
          push Word to its limits by creating simpler mechanisms to generate
          documents, handle complex logic, and adapt to real-world workflows.
          Whether you're producing reports, proposals, or legal docs, our
          templates quietly run the show so teams stay efficient and on-brand
          without barely lifting a finger.
        </p>
      </div>

      {/* Portrait and signature sit side by side, centred below the body text */}
      <div className={styles.footer}>
        <div className={styles.signature}>
          <div className={styles.portrait}>
            <Image src={scott} alt="Scott Robinson" width={60} height={60} />
          </div>
          <Image
            src={signature}
            alt="Scott signature"
            width={200}
            height={50}
          />
        </div>
        <Link href="#contact" className={`btn ${styles.ctaBtn}`}>
          Chat with an expert
        </Link>
      </div>
    </section>
  );
};

export default Services;
