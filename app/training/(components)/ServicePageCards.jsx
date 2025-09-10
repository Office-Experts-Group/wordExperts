import React from "react";
import Image from "next/image";

import styles from "../../../styles/servicePageCards.module.css";

// Import icons
import stuckIcon from "../../../public/icons/computerBlue.webp";
import issuesIcon from "../../../public/icons/supportBlue.webp";
import expertsIcon from "../../../public/icons/handShakeBlue.webp";
import migrateIcon from "../../../public/icons/ideaBlue.webp";

// Import main images
import calcGraph from "../../../public/cards/calcGraph350x200.webp";
import data from "../../../public/cards/data350x200.webp";
import graphHands from "../../../public/cards/graphHands350x200.webp";
import penGraph from "../../../public/cards/penGraph350x200.webp";

const ServicePageCards = () => {
  return (
    <section
      className={styles.servicePageCards}
      style={{ margin: "4rem 0 0rem 0" }}
    >
      <div className={styles.card}>
        <a href="#contact">
          <div className={styles.content}>
            <p>We're here for you</p>
            <h2>Just get in touch</h2>
            <Image
              src={stuckIcon}
              alt="Old version icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={calcGraph}
              alt="calculator on a table with graphs"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#word-assistance">
          <div className={styles.content}>
            <p>Assistance</p>
            <h2>Microsoft Word</h2>
            <Image
              src={issuesIcon}
              alt="Access issues icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={data}
              alt="data on a screen"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#word-training">
          <div className={styles.content}>
            <p>Training</p>
            <h2>Microsoft Word</h2>
            <Image
              src={expertsIcon}
              alt="Expert help icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={graphHands}
              alt="hands pointing to a graph"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#document-solutions">
          <div className={styles.content}>
            <p>Customised</p>
            <h2>Document Solutions</h2>
            <Image
              src={migrateIcon}
              alt="Migration icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={penGraph}
              alt="pen on a graph"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ServicePageCards;
