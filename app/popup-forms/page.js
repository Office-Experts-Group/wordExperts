// app/popup-forms/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PopupFormsHero from "./(components)/PopupFormsHero";

// Below-the-fold components loaded dynamically
const PopupFormsProblem = dynamic(
  () => import("./(components)/PopupFormsProblem"),
);
const PopupFormsServices = dynamic(
  () => import("./(components)/PopupFormsServices"),
);
const PopupFormsUseCases = dynamic(
  () => import("./(components)/PopupFormsUseCases"),
);
const PopupFormsProcess = dynamic(
  () => import("./(components)/PopupFormsProcess"),
);
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Contact = dynamic(() => import("../../components/Contact"));

import faqs from "../../faqs/popup-forms";
import faqSchema from "../../faqs/popupFormsSchema";

import notes from "../../public/pageHeros/notes.webp";
import graphTableMob from "../../public/pageHeros/mob/graphTableMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const PAGE_URL = "https://www.wordexperts.com.au/popup-forms";

// ── Structured data ────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.wordexperts.com.au",
      "Word Experts",
      "Australia-wide Microsoft Word Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Word Popup Form | Word Popup Window | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-01-13T14:27:08+00:00",
      dateModified: "2026-09-18T00:00:00+00:00",
      description:
        "Professional Microsoft Word popup form development. Custom data entry forms with validation, conditional logic and document integration. Improve efficiency and data accuracy.",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wordexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Popup Forms",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Word Popup Form Development",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Professional Microsoft Word popup form development and automation services, including guided data capture, validation, conditional logic and document integration.",
      serviceType: "Form Development",
      category: "Document Automation",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Popup Form Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Guided Data Capture",
              description:
                "Custom VBA UserForms that guide staff through document data entry",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Validation & Error Checking",
              description:
                "Field validation, mandatory field enforcement and business rule checks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Conditional Logic & Branching",
              description:
                "Forms that adapt fields and requirements based on earlier answers",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document & Field Integration",
              description:
                "Direct insertion of captured data into Word bookmarks, content controls and mail merge fields",
            },
          },
        ],
      },
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="Popup Forms"
        desktopImage={notes}
        mobileImage={graphTableMob}
        altDesk={"sticky notes on a table"}
        altMob={"graphs on an office table"}
      />
      <PopupFormsHero />
      <PopupFormsProblem />
      <PopupFormsServices />
      <PopupFormsUseCases />
      <PopupFormsProcess />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
