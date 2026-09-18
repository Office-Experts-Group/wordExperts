// app/government-departments/(components)/GovDeptIntro.jsx

import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { DepartmentIcon } from "../(svgs)/DepartmentIcon";

import styles from "../../../styles/govDeptIntro.module.css";

const GovDeptIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: custom SVG, replaces the previous stock photo ── */}
        <AnimateOnScroll animation="slide-left" duration={1}>
          <div className={styles.iconWrap}>
            <DepartmentIcon />
          </div>
        </AnimateOnScroll>

        {/* ── Right: positioning copy ── */}
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>
              Public Sector Document Solutions
            </span>
            <h2 className={styles.heading}>
              How do Word Experts support{" "}
              <span className={styles.accent}>government departments?</span>
            </h2>
            <p>
              Our team of Word programmers and designers have worked with state
              and federal government departments for over 25 years, building
              document templates that adhere to the unique challenges when
              working with strictly compliant and accessible documents, often
              for hundreds of staff with strict formatting rules and documents
              that need to look and behave identically no matter who creates
              them.
            </p>
            <p>
              We take document accessibility seriously and build every template
              against WCAG 2.1 AA from the outset, alongside consistent
              formatting, protected corporate identity, and the version control
              a department-wide rollout needs.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default GovDeptIntro;
