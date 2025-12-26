import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import manufacturing from "../../../public/manufacturing.webp";
import healthcare from "../../../public/healthcare.webp";
import government from "../../../public/government.webp";
import financial from "../../../public/financial.webp";
import education from "../../../public/education.webp";
import professional from "../../../public/professional.webp";
import legal from "../../../public/legal.webp";
import nonprofit from "../../../public/non-profit.webp";
import property from "../../../public/property.webp";
import corporate from "../../../public/corporateIcon.webp";

const IndustrySection = () => {
  const industries = [
    {
      title: "Government & Public Sector",
      description: "Accessible documents and compliance templates",
      detail:
        "Create WCAG-compliant documents, standardised templates for departmental use, secure document management systems, accessibility auditing, and automated reporting solutions that meet strict government compliance and security requirements.",
      image: government,
    },
    {
      title: "Legal Services",
      description: "Precedent documents and matter management",
      detail:
        "Design sophisticated precedent libraries, automated document generation from matter data, custom numbering systems for legal documents, clause libraries, contract templates, and document automation that integrates with practice management systems.",
      image: legal,
    },
    {
      title: "Financial Services",
      description: "Compliant reporting and secure documentation",
      detail:
        "Develop compliant document templates for financial reporting, client communications, regulatory submissions, automated calculation documents, policy templates, and secure document workflows that meet financial services regulations.",
      image: financial,
    },
    {
      title: "Healthcare & Medical",
      description: "Patient documentation and clinical forms",
      detail:
        "Create patient documentation templates, clinical forms with data validation, medical reporting systems, appointment letters, referral documents, and HIPAA-compliant templates that streamline clinical workflows.",
      image: healthcare,
    },
    {
      title: "Education & Training",
      description: "Academic templates and accessible materials",
      detail:
        "Design course materials, assessment templates, student reports, accessible educational documents, curriculum templates, and automated certificate generation that support teaching staff and adhere to accessibility standards.",
      image: education,
    },
    {
      title: "Professional Services",
      description: "Proposal automation and client reporting",
      detail:
        "Automate proposal generation, client report templates, project documentation, statement of work templates, invoice generation, and branded communications that maintain professional standards.",
      image: professional,
    },
    {
      title: "Manufacturing & Engineering",
      description: "Technical documentation and procedures",
      detail:
        "Develop technical specification templates, quality control procedures, safety documentation, work instructions, equipment manuals, and ISO-compliant documentation systems that ensure consistency in technical communications.",
      image: manufacturing,
    },
    {
      title: "Corporate Enterprise",
      description: "Global template systems and brand governance",
      detail:
        "Implement enterprise-wide template solutions, multi-brand document systems, automated report generation, executive communications, policy document templates, and centralised template management that enforce corporate identity.",
      image: corporate,
    },
    {
      title: "Not-for-Profit Organisations",
      description: "Grant applications and donor communications",
      detail:
        "Create grant application templates, donation receipts, volunteer documentation, annual report templates, fundraising materials, and impact reporting documents that help not-for-profits communicate effectively with stakeholders.",
      image: nonprofit,
    },
    {
      title: "Property & Real Estate",
      description: "Contract templates and property documentation",
      detail:
        "Design property listing templates, contract documents, tenancy agreements, inspection reports, settlement documentation, and automated property communications that streamline real estate transactions.",
      image: property,
    },
  ];

  return (
    <section
      className={styles.pageSegment}
      id="industries"
      style={{
        padding: "6rem 0 0 0",
        scrollMarginTop: "100px",
        margin: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={styles.content}
      >
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2
              style={{
                fontSize: "2rem",
                textAlign: "center",
                padding: "0 1rem",
              }}
            >
              Industry-Specific Document Solutions
            </h2>
          </div>
          <p
            style={{
              maxWidth: "100vw",
              textAlign: "center",
              padding: "0 10vw",
            }}
          >
            Our Word consultants bring deep industry knowledge and cross-sector
            expertise to every project. Our solutions cover diverse industries
            throughout Australia, understanding the unique document
            requirements, compliance needs and automation challenges each sector
            faces.
          </p>
        </AnimateOnScroll>

        <div className={styles.useCases}>
          {industries.map((industry, index) => (
            <AnimateOnScroll
              key={index}
              animation="slide-left"
              duration={1}
              delay={0.2}
            >
              <div className={styles.gridHolder}>
                <Image
                  src={industry.image}
                  width={150}
                  height={150}
                  alt={`${industry.title} icon`}
                />
                <div>
                  <h3 style={{ color: "#046999" }}>{industry.title}</h3>
                  <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
                    {industry.description}
                  </p>
                  <p style={{ color: "#777a7e" }}>{industry.detail}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
