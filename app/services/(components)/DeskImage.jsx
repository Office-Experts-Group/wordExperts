import Image from "next/image";
import React from "react";

import methods from "../../../public/methods.webp";

import styles from "../../../styles/intro.module.css";

const DeskImage = () => {
  return (
    <section
      id="your"
      className={styles.deskImage}
      style={{
        margin: "0rem",
        backgroundColor: "transparent",
      }}
    >
      <Image src={methods} alt="agile methods" width={1200} height={250} />
    </section>
  );
};

export default DeskImage;
