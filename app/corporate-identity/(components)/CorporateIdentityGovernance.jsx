// app/corporate-identity/(components)/CorporateIdentityGovernance.jsx

import Link from "next/link";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/corporateIdentityGovernance.module.css";

import { GovernanceStepsSvg } from "../(svgs)/GovernanceStepsSvg";

// Word's built-in Restrict Editing options, ordered from lightest touch to
// strictest. filledSteps feeds the staircase icon so each rung visibly
// climbs higher than the last.
const levels = [
  {
    filledSteps: 1,
    name: "Formatting limited to approved styles",
    detail:
      "Staff can still type freely, but font, colour and spacing choices are restricted to the styles built into your template, so the words change and the look never does.",
  },
  {
    filledSteps: 2,
    name: "Tracked changes required",
    detail:
      "Every edit is recorded against the original, useful for contracts, policies or board papers where you need a clear record of who changed what.",
  },
  {
    filledSteps: 3,
    name: "Filling in forms only",
    detail:
      "The document structure is fully locked and staff can only complete the content controls you've built in, ideal for high-volume templates like proposals or letters.",
  },
  {
    filledSteps: 4,
    name: "Read-only, no changes",
    detail:
      "The safest setting for finalised documents, policy PDFs exported from Word, or reference material that should never be altered after sign-off.",
  },
];

const CorporateIdentityGovernance = () => {
  return (
    <section className={styles.section} id="governance">
      <div className={styles.header}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <span className={styles.eyebrow}>Choosing your level of control</span>
          <h2 className={styles.heading}>
            Not every document needs{" "}
            <span className={styles.accent}>the same level of protection.</span>
          </h2>
          <p className={styles.intro}>
            Word&rsquo;s built-in document protection gives you a genuine scale
            to choose from, not just an on-off switch. We help you decide which
            setting suits each type of document your business produces, then
            build it into the template.
          </p>
        </AnimateOnScroll>
      </div>

      {/* ── Ascending staircase list ── */}
      <div className={styles.staircase}>
        {levels.map((level, i) => (
          <AnimateOnScroll
            key={level.name}
            animation="slide-left"
            duration={0.5}
            delay={i * 0.09}
          >
            <div className={styles.rung} style={{ "--rung-index": i }}>
              <span className={styles.rungIcon} aria-hidden="true">
                <GovernanceStepsSvg filledSteps={level.filledSteps} />
              </span>
              <div className={styles.rungContent}>
                <h3 className={styles.rungName}>{level.name}</h3>
                <p className={styles.rungDetail}>{level.detail}</p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* ── Closing CTA strip ── */}
      <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.1}>
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Not sure which level is right for your documents? We can assess your
            current templates and recommend the appropriate protection for each
            one.
          </p>
          <Link href="#contact" className={`${styles.ctaBtn} btn`}>
            Talk to a template specialist
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default CorporateIdentityGovernance;
