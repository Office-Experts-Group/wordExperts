// app/word-to-pdf-conversion/(components)/WordToPdfServices.jsx

import Link from "next/link";
import styles from "../../../styles/wordToPdfServices.module.css";

const services = [
  {
    id: "bulk-conversion",
    heading: "Single & Bulk Document Conversion",
    tag: "Any volume · Consistent output",
    description:
      "From a one-off contract to a batch of hundreds of documents, we convert Word files to PDF with formatting, tables, images, and fonts preserved exactly as they appear in the source document.",
    capabilities: [
      "Complex tables, multi-column layouts, and embedded images handled correctly",
      "Batch processing for large document sets, run overnight if needed",
      "Consistent output across every file in the batch, not just the first one",
      "Compatible with .doc, .docx, and .rtf source files",
    ],
  },
  {
    id: "fillable-forms",
    heading: "Fillable & Editable PDF Forms",
    tag: "Adobe Acrobat Pro · Interactive fields",
    description:
      "Word documents rebuilt in Adobe Acrobat Pro as proper fillable PDF forms, complete with text fields, checkboxes, dropdowns, and signature fields your recipients can complete on screen rather than print and scan.",
    capabilities: [
      "Text fields, checkboxes, radio buttons, and dropdown lists added to match your form",
      "Field validation and required-field rules where needed",
      "Tab order set up so the form completes logically from top to bottom",
      "Suitable for intake forms, HR paperwork, applications, and client onboarding",
    ],
  },
  {
    id: "templates",
    heading: "Template-Based Conversion Pipelines",
    tag: "Repeatable process · Set up once",
    description:
      "If you convert the same type of document on a regular basis, for example weekly reports, client agreements, or onboarding packs, we set up a repeatable conversion process so every future document comes out the same way with no manual checking required.",
    capabilities: [
      "A defined Word template that always converts cleanly",
      "Documented process your team can run without our involvement",
      "Consistent branding and formatting across every document produced",
      "Works alongside our wider Word template services if templates need rebuilding first",
    ],
  },
  {
    id: "security",
    heading: "Secure Handling for Sensitive Documents",
    tag: "No third-party uploads",
    description:
      "Contracts, HR files, financial records, and other confidential documents are converted through an agreed, controlled process rather than an anonymous online tool with unclear data handling.",
    capabilities: [
      "No uploading to unknown third-party servers",
      "Process agreed with you up front for handling and storage",
      "Suitable for legal, government, and regulated industry documents",
    ],
  },
];

const WordToPdfServices = () => {
  return (
    <section
      className={styles.section}
      id="services"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>What We Convert</span>
          <h2 className={styles.heading}>
            The right conversion for what the document needs to do.
          </h2>
          <p className={styles.intro}>
            Not every conversion is the same job. A one-off letter needs
            something different to a client-facing form, and a form needs
            something different again to a document you will be reproducing
            every week. We start by understanding what the PDF needs to do once
            it leaves Word.
          </p>
          <p className={styles.intro}>
            Interested in the reverse process instead? Read our guide on{" "}
            <Link
              href="/blog/pdf-to-word-conversion"
              className={styles.inlineLink}
            >
              PDF to Word conversion
            </Link>
            , or see our dedicated{" "}
            <Link href="/fill-in-forms" className={styles.inlineLink}>
              fill-in form services
            </Link>
            .
          </p>
        </div>

        <div className={styles.servicesList}>
          {services.map((service) => (
            <article
              key={service.id}
              className={styles.service}
              id={service.id}
            >
              <div className={styles.serviceTop}>
                <h3 className={styles.serviceHeading}>{service.heading}</h3>
                <span className={styles.serviceTag}>{service.tag}</span>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.capabilities}>
                {service.capabilities.map((cap, i) => (
                  <li key={i}>{cap}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordToPdfServices;
