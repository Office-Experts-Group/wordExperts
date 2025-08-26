import React from "react";
import Image from "next/image";

import styles from "../../../styles/customTab.module.css";
import customToolbar from "../../../public/customToolbar.webp";

const CustomTab = () => {
  return (
    <section className={styles.customTab}>
      <div className={styles.content}>
        <h2>Our Custom Formatting Tab</h2>
        <p>
          Our dedicated Formatting Tab is built directly into the Word ribbon,
          providing a user-friendly interface that brings powerful formatting
          and automation tools into one central location.
        </p>
        <p>
          Whether working on complex reports or everyday documents, the tab
          simplifies tasks and supports consistent, professional results—without
          requiring expert-level Word knowledge.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={customToolbar}
          alt="Old version illustration"
          width={1200}
          height={160}
          className={styles.mainImage}
        />
      </div>
    </section>
  );
};

export default CustomTab;
