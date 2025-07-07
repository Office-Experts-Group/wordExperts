import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/expertsAwait.module.css";

import bg from "../../../public/service-bg.webp";
import stuckIcon from "../../../public/icons/connectBlue.webp";
import issuesIcon from "../../../public/icons/wordBlue.webp";
import migrateIcon from "../../../public/icons/fileBlue.webp";
import expertsIcon from "../../../public/icons/supportBlue.webp";

const BlackSegment = () => {
  return (
    <section
      className={styles.expertsAwait}
      style={{ marginTop: "8rem" }}
      id="document-creation"
    >
      <Image className={styles.bgImg} src={bg} alt="shape icon" fill="true" />

      <AnimateOnScroll animation="slide-left" delay={0.1} duration={1.2}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Why use Word Experts?</h2>
          </div>
          <div className={styles.text}>
            <p>
            We combine design expertise with deep Microsoft Office knowledge, as part of the <Link style={{ fontWeight: "700", color: "#046999"}} href={"https://www.officeexperts.com.au"}>Office Experts Group</Link> we are uniquely positioned to deliver stunning and functional templates that your team can actually use.
            </p>
            <div className={styles.link}>
              <Link
                href="tel:+61-1300-12-20-38"
                className={`${styles.btn} btn`}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    d="M16.585,19.999l2.006-2.005l-2.586-2.586l-1.293,1.293c-0.238,0.239-0.579,0.342-0.912,0.271 c-0.115-0.024-2.842-0.611-4.502-2.271s-2.247-4.387-2.271-4.502c-0.069-0.33,0.032-0.674,0.271-0.912l1.293-1.293L6.005,5.408 L4,7.413c0.02,1.223,0.346,5.508,3.712,8.874C11.067,19.643,15.337,19.978,16.585,19.999z"
                  ></path>
                  <path d="M16.566 21.999c.005 0 .023 0 .028 0 .528 0 1.027-.208 1.405-.586l2.712-2.712c.391-.391.391-1.023 0-1.414l-4-4c-.391-.391-1.023-.391-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594c.391-.391.391-1.023 0-1.414l-4-4c-.375-.375-1.039-.375-1.414 0L2.586 5.999C2.206 6.379 1.992 6.901 2 7.434c.023 1.424.4 6.37 4.298 10.268S15.142 21.976 16.566 21.999zM6.005 5.408l2.586 2.586L7.298 9.287c-.239.238-.341.582-.271.912.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271c.333.07.674-.032.912-.271l1.293-1.293 2.586 2.586-2.006 2.005c-1.248-.021-5.518-.356-8.873-3.712C4.346 12.921 4.02 8.636 4 7.413L6.005 5.408zM19.999 10.999h2c0-5.13-3.873-8.999-9.01-8.999v2C17.051 4 19.999 6.943 19.999 10.999z"></path>
                  <path d="M12.999,8c2.103,0,3,0.897,3,3h2c0-3.225-1.775-5-5-5V8z"></path>
                </svg>
                <p>1300 122 038</p>
              </Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0.3} duration={1.2}>
        <div className={styles.points}>
          <div className={styles.point}>
            <Image
              src={issuesIcon}
              alt="Connection icon"
              width={30}
              height={30}
              className={`${styles.icon} ${styles.hidden}`}
            />
            <p>
            Designers and document specialists on staff
            </p>
          </div>

          <div className={styles.point}>
            <Image
              src={stuckIcon}
              alt="Old version icon"
              width={30}
              height={30}
              className={`${styles.icon} ${styles.hidden}`}
            />
            <p>
            Focus on real-world usability in Microsoft Office
            </p>
          </div>

          <div className={styles.point}>
            <Image
              src={migrateIcon}
              alt="Old version icon"
              width={30}
              height={30}
              className={`${styles.icon} ${styles.hidden}`}
            />
            <p>
            Fast turnaround for rebrand rollouts
            </p>
          </div>

          <div className={styles.point}>
            <Image
              src={expertsIcon}
              alt="documents icon"
              width={30}
              height={30}
              className={`${styles.icon} ${styles.hidden}`}
            />
            <p>
            Ongoing support available
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default BlackSegment;
