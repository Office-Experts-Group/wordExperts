// app/word-to-pdf-conversion/(components)/WordToPdfComparison.jsx

import styles from "../../../styles/wordToPdfComparison.module.css";

const rows = [
  {
    attribute: "Formatting accuracy",
    free: "Tables, columns, and fonts often shift or substitute on complex documents",
    pro: "Layout checked and corrected so the PDF matches the source exactly",
  },
  {
    attribute: "Volume",
    free: "One file at a time through a browser, manually, every time",
    pro: "Bulk conversion of hundreds of files in a single batch",
  },
  {
    attribute: "Fillable forms",
    free: "Not supported, or limited to basic field recognition that needs manual fixing",
    pro: "Built properly in Adobe Acrobat Pro with validated fields and logical tab order",
  },
  {
    attribute: "Document security",
    free: "Files uploaded to a third-party server with unclear retention practices",
    pro: "Handled through an agreed, controlled process with no unknown third parties",
  },
  {
    attribute: "Consistency at scale",
    free: "Every conversion is a one-off, quality depends on the specific file",
    pro: "A repeatable process means every document comes out the same way",
  },
];

const WordToPdfComparison = () => {
  return (
    <section className={styles.section} style={{ scrollMarginTop: "150px" }}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Decision Guide</span>
          <h2 className={styles.heading}>
            Free converter or professional service?
            <br />
            <span className={styles.accentSpan}>
              It depends what's at stake.
            </span>
          </h2>
          <p className={styles.intro}>
            A free tool is a perfectly reasonable choice for a personal, one-off
            document. Once the file represents your business, needs to be filled
            in by someone else, or has to be produced repeatedly, the trade-offs
            start to matter.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thLabel}></th>
                <th className={styles.thFree}>
                  <span className={styles.thBadge}>Free converter</span>
                </th>
                <th className={styles.thPro}>
                  <span className={styles.thBadgePro}>Word Experts</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.attribute} className={styles.row}>
                  <td className={styles.tdLabel}>{row.attribute}</td>
                  <td className={styles.tdFree}>{row.free}</td>
                  <td className={styles.tdPro}>{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WordToPdfComparison;
