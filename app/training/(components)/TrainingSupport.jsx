import React from "react";
import SupportSvg from "../(svgs)/SupportSvg";
import styles from "../../../styles/trainingSupport.module.css";

const TrainingSupport = () => {
  return (
    <section
      className={styles.section}
      id="get-in-touch"
    >
      <div className={styles.inner}>
        <div className={styles.iconCol}>
          <div className={styles.iconRing}>
            <SupportSvg width={56} height={56} className={styles.icon} />
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>We&apos;re Here For You</p>
          <h2 className={styles.heading}>
            Struggling with Word? We&apos;ve Got You Covered.
          </h2>
          <p className={styles.body}>
            Via remote access or over the phone, we offer instant help and advice. Whether you
            are an individual or have an entire team, our experts are ready to talk through your
            requirements and work through your issues. You&apos;ll appreciate having your own
            dedicated consultant available when you need them most.
          </p>
          <a href="#contact" className={styles.btn}>
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainingSupport;
