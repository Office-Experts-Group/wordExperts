import React from "react";

import styles from "../../../styles/boxSegment.module.css";

const BoxSegment = () => {
  const checkItems = [
    "Control content inserted from other documents",
    "Unknown formatting will default to the 'Normal' style",
    "Tables will have the default table style applied for consistent branding",
    "Pasted text will look for default Word styles such as Headings and 'Normal', applying your correct styles to them.",
  ];

  return (
    <div className={styles.boxSegment} style={{ backgroundColor: "#fff" }}>
      <div
        className={`${styles.boxDiv} ${styles.contentContainer} ${styles.left}`}
        style={{ backgroundColor: "#f2f3f5" }}
      >
        <h2>We'll Put You Back In Control!</h2>
        <p>
          With our master templates, users can create sub templates in house
          under our controlled template environment.
        </p>
      </div>

      <div
        className={`${styles.boxDiv} ${styles.pointsContainer} ${styles.right}`}
        style={{ backgroundColor: "#f2f3f5" }}
      >
        <div className={styles.points}>
          {checkItems.map((text, index) => (
            <div key={index} className={styles.point}>
              <div className={styles.tick}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
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
