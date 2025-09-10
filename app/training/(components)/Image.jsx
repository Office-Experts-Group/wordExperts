import React from "react";
import Image from "next/image";

import styles from "../../../styles/pageSegment3.module.css";
import training from "../../../public/training900.webp";

const StyleImage = () => {
  return (
    <section className={styles.deskImage}>
      <Image
        src={training}
        alt="training written in scrabble blocks"
        width={900}
        height={2500}
      />
    </section>
  );
};

export default StyleImage;
