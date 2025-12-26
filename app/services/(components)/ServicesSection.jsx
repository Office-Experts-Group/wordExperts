import React from "react";
import Link from "next/link";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import CardIntersectionWrapper from "../../../components/CardIntersectionWrapper";

import styles from "../../../styles/servicesSection.module.css";

import background from "../../../public/gearBG.webp";

const ServicesSection = () => {
  const services = [
    {
      title: "Corporate Global Template Solution",
      description:
        "Transform your organisation's document workflow with enterprise-grade Word template solutions. Our custom Template Solutions empower users to efficiently create professional documents within a controlled environment that enforces branding guidelines, maintains consistency, and protects corporate identity. We design intelligent template systems featuring automated styling, pre-built content blocks, custom ribbons, and smart workflows that eliminate repetitive work.",
      links: [
        {
          href: "/corporate-global-template-solution",
          text: "Enterprise Templates",
        },
      ],
    },
    {
      title: "Document Template Creation & Design",
      description:
        "Professional Word template design and creation services tailored to your organisation's needs. We create easy-to-use, properly engineered templates for all your business documents, from reports and proposals to letters and forms. Our templates go beyond basic formatting to incorporate advanced features like automated styling, building blocks, content controls, dynamic fields, and intelligent workflows.",
      links: [
        {
          href: "/word-document-template-creation",
          text: "Template Creation",
        },
      ],
    },
    {
      title: "Document Automation & VBA Development",
      description:
        "Eliminate repetitive tasks and streamline document workflows with powerful Word automation solutions. Our VBA macro development services automate everything from document generation and formatting to complex data integration and processing. We create custom automation's that can generate documents from databases, populate templates with external data, perform batch processing, create dynamic reports, and integrate Word with other business systems.",
      links: [
        {
          href: "/remove-repetition-and-increase-productivity",
          text: "Automation Services",
        },
        {
          href: "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development",
          text: "VBA Development",
        },
      ],
    },
    {
      title: "Custom Toolbars & Ribbons",
      description:
        "Boost productivity across your organisation with custom Word toolbars and ribbons tailored to your workflows. We design and implement intuitive ribbon interfaces that put your most-used features at users' fingertips, reducing clicks, minimising training time, and ensuring consistency. Our custom toolbars can include buttons for landscape pages, cover page insertion, chapter breaks, automated formatting, pre-written paragraphs, signature blocks, and any other frequently used functions. ",
      links: [
        {
          href: "/custom-toolbars-and-ribbons",
          text: "Custom Ribbons",
        },
      ],
    },
    {
      title: "Forms & Data Entry Solutions",
      description:
        "Create sophisticated Word forms that streamline data collection whilst maintaining document integrity and brand consistency. We design both popup forms with VBA-powered interfaces and fill-in forms using content controls. Our forms feature validated data entry, dropdown lists, checkboxes, date pickers, conditional logic, protected content, and automatic calculations. Forms can integrate with databases, generate completed documents automatically, and ensure data accuracy through intelligent validation.",
      links: [
        {
          href: "/popup-forms",
          text: "Popup Forms",
        },
        {
          href: "/fill-in-forms",
          text: "Fill-In Forms",
        },
      ],
    },
    {
      title: "Mail Merge & Data Integration",
      description:
        "Automate personalised document creation with professional mail merge solutions that save hours of manual work. We set up and optimise mail merge workflows connecting Word templates with Excel spreadsheets, Access databases, Outlook contacts, or external data sources. Our solutions handle everything from simple letter generation to complex reports with conditional content, charts, and integrated images.",
      links: [
        {
          href: "/mail-merge",
          text: "Mail Merge Services",
        },
      ],
    },
    {
      title: "Accessibility & Compliance",
      description:
        "Ensure your documents meet WCAG accessibility standards and government compliance requirements. We create and audit Word documents for accessibility, implementing proper heading structures, alternative text, reading order, colour contrast, and semantic markup. Our services include accessibility template creation, document remediation, compliance auditing, and staff training. Essential for government departments, educational institutions, and any organisation committed to inclusive document design.",
      links: [
        {
          href: "/accessibility",
          text: "Accessibility Services",
        },
      ],
    },
    {
      title: "Upgrades, Migration & Conversions",
      description:
        "Modernise legacy documents and templates with our comprehensive upgrade and migration services. We handle Word version upgrades, resolve compatibility issues, convert documents from other formats (InDesign, PDF, Google Docs), and migrate legacy systems to contemporary architectures. Our process includes thorough testing, formatting preservation, macro updates, style sheet reconstruction, and user training.",
      links: [
        {
          href: "/upgrades-and-migration",
          text: "Upgrade Services",
        },
        {
          href: "/word-template-conversions",
          text: "Template Conversions",
        },
        {
          href: "/google-docs-to-word-migration",
          text: "Google Docs Migration",
        },
      ],
    },
    {
      title: "Quick Parts & Building Blocks",
      description:
        "Boost productivity with Quick Parts and Building Blocks that put pre-designed content at your users' fingertips. We create custom building blocks including signature blocks, common paragraphs, disclaimers, company information, formatted tables, cover pages, and frequently used document sections. Users can insert these elements with a single click, ensuring consistency and reducing document creation time.",
      links: [
        {
          href: "/quick-parts",
          text: "Quick Parts",
        },
      ],
    },
    {
      title: "Training & Support",
      description:
        "Empower your team with expert Word training and responsive support services. We provide customised training programmes covering everything from core skills to advanced template usage, automation, and best practices. Our training is task-specific and practical, designed to solve real business challenges. We offer one-on-one sessions, group meetings, remote training, and ongoing support packages.",
      links: [
        {
          href: "/training",
          text: "Training Services",
        },
      ],
    },
    {
      title: "Document Rebranding Services",
      description:
        "Transform your organisation's documents with professional rebranding services that implement your updated brand identity across all templates and documentation. When your company updates its logo, colour palette, or undergoes a complete visual overhaul, we ensure your Word templates reflect these changes perfectly. Our rebranding services include style sheet recreation, template redesign, image updates, brand guideline implementation, and template distribution.",
      links: [
        {
          href: "/document-rebranding-services",
          text: "Rebranding Services",
        },
        {
          href: "/brand-template",
          text: "Brand Templates",
        },
        {
          href: "/corporate-identity",
          text: "Corporate Identity",
        },
      ],
    },
    {
      title: "Microsoft Office Integration",
      description:
        "As part of the Office Experts Group, we provide seamless integration between Word and other Microsoft applications. Connect your documents with Excel spreadsheets, Access databases, PowerPoint presentations, Outlook email systems, and SharePoint document management. We automate data flows across the Microsoft ecosystem, eliminate manual data entry, and ensure consistency across all your business applications.",
      links: [
        {
          href: "/microsoft-word-api-integrations",
          text: "Word API Integrations",
        },
        {
          href: "https://www.officeexperts.com.au",
          text: "Office Integration",
        },
      ],
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <Image
        src={background}
        alt="Background"
        className={`${styles.backgroundImage} ${styles.top}`}
      />
      <Image
        src={background}
        alt="Background"
        className={`${styles.backgroundImage} ${styles.bottom}`}
      />
      <div className={styles.container}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Microsoft Word Services</h2>
            <p className={styles.sectionSubtitle}>
              Tailored Document Solutions for Every Business Need
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-down" delay={0.2} duration={1}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <CardIntersectionWrapper key={index}>
                <div className={styles.serviceCard}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>

                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>

                  {service.links.length > 0 && (
                    <div className={styles.serviceLinks}>
                      {service.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className={styles.serviceLink}
                        >
                          <span>{link.text}</span>
                          <svg viewBox="0 0 24 24" className={styles.linkIcon}>
                            <path
                              d="M7 17L17 7M17 7H8M17 7V16"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </CardIntersectionWrapper>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ServicesSection;
