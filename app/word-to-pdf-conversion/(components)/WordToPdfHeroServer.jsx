// app/word-to-pdf-conversion/(components)/WordToPdfHeroServer.jsx
import Link from "next/link";
import WordToPdfHero from "./WordToPdfHero";

import styles from "../../../styles/wordToPdfHero.module.css";

const WordToPdfHeroServer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* ── Left column — headline, intro, visual, CTAs ── */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>With 25+ years experience</span>

          <h1 className={styles.heading}>
            Word to PDF conversion,{" "}
            <span className={styles.accentWord}>done properly.</span>
          </h1>

          <div className={styles.body}>
            <p>
              Anyone can drag a file into a free online converter. Getting the
              fonts, tables, and layout to come out exactly as they went in,
              every time, at volume, without your documents passing through an
              unknown server, is a different job entirely.
            </p>
            <p>
              We convert Word documents to PDF for businesses that need it done
              right the first time, including fillable PDF forms built from your
              existing Word templates.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Get a free quote
            </Link>
            <Link href="#services" className={styles.ctaSecondary}>
              See what we convert
            </Link>
          </div>
        </div>
        <WordToPdfHero />
      </div>
    </section>
  );
};

export default WordToPdfHeroServer;
