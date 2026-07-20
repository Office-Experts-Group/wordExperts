// app/word-to-pdf-conversion/(components)/WordToPdfProcess.jsx

import Link from "next/link";
import styles from "../../../styles/wordToPdfProcess.module.css";

const steps = [
  {
    num: "01",
    heading: "Tell us what you're converting",
    body: "Send through a sample document, or a batch of them, and let us know whether the end result needs to be a straight PDF or a fillable form. We will flag anything in the source file likely to cause formatting issues.",
  },
  {
    num: "02",
    heading: "We convert and check every file",
    body: "Each document is converted and checked against the original, fonts, tables, images, and layout included. For fillable forms, fields are added, tested, and set up with a logical tab order.",
  },
  {
    num: "03",
    heading: "You receive finished, ready-to-use files",
    body: "Completed PDFs are delivered ready to send, publish, or hand to your team. If it's a recurring job, we document the process so future conversions can run without our involvement.",
  },
];

const WordToPdfProcess = () => {
  return (
    <section className={styles.section} style={{ scrollMarginTop: "150px" }}>
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.heading}>
            What it's like to work with Word Experts.
          </h2>
          <p className={styles.body}>
            No account to set up, no per-file pricing to work through, and no
            uploading confidential documents to a tool you know nothing about.
            Just tell us what you need converted.
          </p>
          <p className={styles.body}>
            As part of the nationwide{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.officeexperts.com.au"
            >
              Office Experts Group
            </Link>
            , we also draw on our{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.accessexperts.com.au"
            >
              Access
            </Link>{" "}
            and{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.powerplatformexperts.com.au"
            >
              Power Platform
            </Link>{" "}
            teams for jobs that need document conversion connected to a larger
            data or automation system.
          </p>
          <Link href="#contact" className={styles.cta}>
            Start a conversation
          </Link>
        </div>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.num} className={styles.step}>
              <span className={styles.stepNum}>{step.num}</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepHeading}>{step.heading}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WordToPdfProcess;
