import React from "react";

import styles from "../../../styles/boxSegment.module.css";

const BoxSegment = () => {
  const checkItems = [
    "Unauthorised formatting from user pasted content",
    "User manipulated colours, fonts and font sizes",
    "Incorrect formatting, content, styles and disturbing headings",
    "Inconsistent fonts, colour themes and branding",
  ];

  return (
    <div
      className={styles.boxSegment}
      style={{ backgroundColor: "#333", flexDirection: "column-reverse" }}
    >
      <div
        className={`${styles.boxDiv} ${styles.contentContainer} ${styles.left}`}
        style={{ backgroundColor: "#fff" }}
      >
        <h2>No More Headaches!</h2>
        <p>
          We can help you put an end to messy documents that break corporate
          branding.
        </p>
      </div>

      <div
        className={`${styles.boxDiv} 
      ${styles.pointsContainer} ${styles.right}`}
        style={{ backgroundColor: "#fff" }}
      >
        <div className={styles.points}>
          {checkItems.map((text, index) => (
            <div key={index} className={styles.point}>
              <div className={styles.cross}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxSegment;
