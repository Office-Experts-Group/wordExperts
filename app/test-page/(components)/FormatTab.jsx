import React from "react";
import Image from "next/image";

import styles from "../../../styles/formatTab.module.css";

import formatTab from "../../../public/formatTab.webp";

const FormatTab = () => {
  return (
    <section className={styles.formatTab}>
      <div className={styles.content}>
        <h2>
          Our Custom <span className={styles.accent}>Formatting Tabs</span>
        </h2>
        <p>
          Our dedicated Formatting Tabs are built directly into the Word ribbon,
          providing a user-friendly interface that brings powerful formatting
          and automation tools into one central location. Combined with a strong
          Template foundation, a custom Formatting Tab creates a controlled,
          brand‑safe environment where documents behave consistently regardless
          of the user’s Word experience.
        </p>
        <p>
          From complex reports to everyday documents, the tab simplifies tasks
          and supports consistent, professional results without requiring
          expert-level Word knowledge. The Formatting Tab manages how text,
          lists, tables, and styles are applied, ensuring pasted content
          automatically matches your corporate formatting. It also provides
          helpful automation tools like adding landscape pages, updating fields,
          and other commonly used actions.
        </p>
      </div>
      <div className={styles.img}>
        <Image
          src={formatTab}
          alt="custom formatting tab in word"
          width={1520}
          height={161}
        />
        <p>
          Built to fit your workflows. Select the features you need, or ask us
          about creating new functionality for your team.
        </p>
      </div>
    </section>
  );
};

export default FormatTab;
