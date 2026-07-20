// app/word-to-pdf-conversion/(components)/WordToPdfProblem.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/wordToPdfProblem.module.css";

const painPoints = [
  {
    id: "broken-tables",
    number: "01",
    name: "Tables and columns that fall apart",
    description:
      "Multi-column layouts, merged cells, and nested tables are where most free converters fail first. Rows shift, borders vanish, and a document that looked fine in Word arrives as a mess in PDF.",
  },
  {
    id: "font-substitution",
    number: "02",
    name: "Fonts swapped for a default",
    description:
      "A branded document set in your corporate typeface can come out in a generic system font instead. Nobody notices until a client or regulator opens the file and it looks nothing like your other materials.",
  },
  {
    id: "no-batching",
    number: "03",
    name: "No way to do it at volume",
    description:
      "Converting one file is easy. Converting three hundred policy documents, contracts, or staff records one at a time through a browser tab is not a job anyone wants to do manually, and it is not a job free tools are built for.",
  },
  {
    id: "static-only",
    number: "04",
    name: "Flat PDFs when you actually needed a form",
    description:
      "A straight Word to PDF export gives you a static document. If the goal was ever for someone to type into it, tick a box, or sign it on screen, a plain conversion was never going to get you there.",
  },
  {
    id: "privacy-risk",
    number: "05",
    name: "Confidential files uploaded to unknown servers",
    description:
      "Free online converters require uploading your document to a third-party server, often with vague terms about how long the file is kept or who can access it. For contracts, HR records, or financial documents, that is a real risk, not a hypothetical one.",
  },
];

const WordToPdfProblem = () => (
  <section className={styles.section} style={{ scrollMarginTop: "150px" }}>
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Recognise any of these?</p>
        <h2 className={styles.heading}>
          Where free converters{" "}
          <span className={styles.headingMuted}>let businesses down.</span>
        </h2>
        <p className={styles.intro}>
          A quick conversion is fine for a personal document. It becomes a
          problem the moment the file represents your business, needs to be
          filled in by someone else, or has to be produced fifty times a week
          without anyone checking each one by hand.
        </p>
      </div>
    </AnimateOnScroll>

    <div className={styles.rows} role="list">
      {painPoints.map((point, i) => (
        <AnimateOnScroll
          key={point.id}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.06}
        >
          <article className={styles.row} role="listitem">
            <div className={styles.rowLeft}>
              <span className={styles.rowNum} aria-hidden="true">
                {point.number}
              </span>
              <h3 className={styles.rowName}>{point.name}</h3>
            </div>
            <p className={styles.rowDesc}>{point.description}</p>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default WordToPdfProblem;
