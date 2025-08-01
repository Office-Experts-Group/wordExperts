import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegmentMain from "./(components)/PageSegmentMain";
import ExpertsAwait from "../../components/ExpertsAwait";
import FAQSection from "../../components/FAQSection";
import Contact from "../../components/Contact";

import faqs from "../../faqs/accesibility";
import faqSchema from "../../faqs/accessibilitySchema";

import deskGraph from "../../public/pageHeros/deskGraph.webp";
import calcMob from "../../public/pageHeros/mob/calcMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/accessibility",
      url: "https://www.wordexperts.com.au/accessibility",
      name: "Word Accessibility Solutions | Microsoft Word Accessibility | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:14:28+00:00",
      dateModified: "2025-07-30T00:00:00+00:00",
      description:
        "Accessible Word document creation and template services. WCAG-compliant documents, accessibility audits, and remediation services for government and enterprise.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/accessibility#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/accessibility"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/accessibility#breadcrumb",
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
          name: "Accessibility",
          item: "https://www.wordexperts.com.au/accessibility",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/accessibility#service",
      name: "Word Accessibility Solutions",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Professional Microsoft Word accessibility services including WCAG compliance and document remediation",
      serviceType: "Document Accessibility",
      category: "Accessibility Services",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Accessibility Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WCAG Compliance",
              description:
                "Document compliance with Web Content Accessibility Guidelines",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Accessibility Audit",
              description: "Comprehensive document accessibility assessment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document Remediation",
              description:
                "Converting existing documents to accessible formats",
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
        title="Accessibility"
        desktopImage={deskGraph}
        mobileImage={calcMob}
        altDesk={"Graphs on a table"}
        altMob={"Calculator on a table"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
