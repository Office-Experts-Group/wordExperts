// app/(components)/SolutionsCarousel.jsx

import Link from "next/link";
import AnimateOnScroll from "../../components/AnimateOnScroll";

import styles from "../../styles/solutionsCarousel2.module.css";

import { ShieldIcon } from "../(svgs)/ShieldIcon";
import { CodeIcon } from "../(svgs)/CodeIcon";
import { InstitutionIcon } from "../(svgs)/InstitutionIcon";
import { OrgChartIcon } from "../(svgs)/OrgChartIcon";
import { RefreshIcon } from "../(svgs)/RefreshIcon";
import { PopupIcon } from "../(svgs)/PopupIcon";
import { ChecklistIcon } from "../(svgs)/ChecklistIcon";
import { UpgradeIcon } from "../(svgs)/UpgradeIcon";
import { CloudIcon } from "../(svgs)/CloudIcon";
import { SwapIcon } from "../(svgs)/SwapIcon";
import { SlidersIcon } from "../(svgs)/SlidersIcon";
import { GraduationIcon } from "../(svgs)/GraduationIcon";

const SITE_BRAND = "Word Experts";

// ─────────────────────────────────────────────
// Solutions data — each row keeps the link and icon carried over
// from the original carousel, paired with the new full-paragraph
// description. "description" stays an array so a row can later
// take a second paragraph without changing the data shape.
// ─────────────────────────────────────────────
const solutionsData = [
  {
    title: "Corporate Identity",
    link: "/corporate-identity",
    Icon: ShieldIcon,
    description: [
      "Protect your corporate identity with Word templates that keep branding, fonts, colours and formatting consistent. Staff can focus on writing content instead of worrying about document design.",
    ],
  },
  {
    title: "VBA & Macro Development",
    link: "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development",
    Icon: CodeIcon,
    description: [
      "Automate repetitive tasks such as importing, exporting, formatting and processing data. We develop Word VBA solutions that work with CSV, XML, SQL, JSON and many other data sources.",
    ],
  },
  {
    title: "Government Departments",
    link: "/government-departments",
    Icon: InstitutionIcon,
    description: [
      "Create accessible Word templates that protect branding while giving staff the flexibility to generate approved documents and sub-templates from a central master template.",
    ],
  },
  {
    title: "Companies and Organisations",
    link: "/companies-and-organisations",
    Icon: OrgChartIcon,
    description: [
      "Maintain complete control over your corporate identity while allowing staff to create reports and documents in-house. Built-in controls help ensure documents always follow your company standards.",
    ],
  },
  {
    title: "Remove Repetition and Increase Productivity",
    link: "/remove-repetition-and-increase-productivity",
    Icon: RefreshIcon,
    description: [
      "Reduce repetitive work by letting users insert common content with a click and automatically reuse key information throughout a document. Your team spends less time formatting and more time producing content.",
    ],
  },
  {
    title: "Popup Forms",
    link: "/popup-forms",
    Icon: PopupIcon,
    description: [
      "Popup forms make data entry faster and more accurate by guiding users through the information they need to enter while protecting the structure of the document.",
    ],
  },
  {
    title: "Fill In Forms",
    link: "/fill-in-forms",
    Icon: ChecklistIcon,
    description: [
      "Create easy-to-use fill-in forms with dropdown lists, checkboxes and protected fields. Staff or clients can complete documents quickly without accidentally changing the layout.",
    ],
  },
  {
    title: "Upgrading Word For 2026",
    link: "/upgrades-and-migration",
    Icon: UpgradeIcon,
    description: [
      "Upgrading Word can introduce issues with page layouts, tables, images and macros. We can identify and resolve compatibility problems so your documents continue to work as expected.",
    ],
  },
  {
    title: "Online Solutions",
    link: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
    Icon: CloudIcon,
    description: [
      "Need your Word documents connected to a database or available online? We can integrate Word with Microsoft 365, SharePoint and other online systems.",
    ],
  },
  {
    title: "Convert Adobe To Word",
    link: "/word-template-conversions",
    Icon: SwapIcon,
    description: [
      "Convert documents created in InDesign, Illustrator, PDF and other design applications into professional Word templates that are easy for your staff to edit and maintain.",
    ],
  },
  {
    title: "Custom Toolbars and Ribbons",
    link: "/custom-toolbars-and-ribbons",
    Icon: SlidersIcon,
    description: [
      "Create custom Word ribbons and toolbars that put your most-used features one click away, from page layouts and section breaks to commonly used text and document tools.",
    ],
  },
  {
    title: "Help and Training",
    link: "/training",
    Icon: GraduationIcon,
    description: [
      "We provide Word training, remote support and practical documentation to help your staff work more efficiently. When you need assistance, we're available through screen sharing, with video and PDF guides also available.",
    ],
  },
];

const SolutionsCarousel = () => (
  <section className={styles.section}>
    {/* ── Opening header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>With over 25 years experience</p>
        <h2 className={styles.heading}>
          No problems...{" "}
          <span className={styles.headingMuted}>only solutions.</span>
        </h2>
        <p className={styles.intro}>
          Whether you need a professionally designed template, want to automate
          repetitive tasks, improve document consistency across your
          organisation, or modernise older Word systems, our consultants can
          help. Browse our services below to see how we help businesses get more
          from Microsoft Word.
        </p>
        <p className={styles.intro} style={{ marginTop: "1rem" }}>
          Unsure of what you need?{" "}
          <Link href="#contact">Speak with one of our consultants today.</Link>
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── Solution rows ── */}
    <div className={styles.rows} role="list">
      {solutionsData.map((solution, i) => {
        const { Icon } = solution;
        const num = String(i + 1).padStart(2, "0");

        return (
          <AnimateOnScroll
            key={solution.link}
            animation="fade-up"
            duration={0.55}
            delay={i * 0.05}
          >
            <Link href={solution.link} className={styles.row} role="listitem">
              {/* ── Left: ghost number + title ── */}
              <div className={styles.rowLeft}>
                <span className={styles.rowNum} aria-hidden="true">
                  {num}
                </span>
                <h3 className={styles.rowName}>{solution.title}</h3>
              </div>

              {/* ── Right: faint icon behind the description ── */}
              <div className={styles.rowRight}>
                <span className={styles.rowIcon} aria-hidden="true">
                  <Icon />
                </span>
                {solution.description.map((paragraph, j) => (
                  <p key={j} className={styles.rowDesc}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Link>
          </AnimateOnScroll>
        );
      })}
    </div>

    {/* ── CTA row, styled as a dashed final row rather than a filled tile ── */}
    <Link href="/services" className={styles.cta}>
      <span className={styles.ctaText}>View all services</span>
      <span className={styles.ctaArrow} aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  </section>
);

export default SolutionsCarousel;
