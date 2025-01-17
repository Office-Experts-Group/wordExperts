import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegmentMain from "./(components)/PageSegmentMain";
import ExpertsAwait from "../../components/ExpertsAwait";
import FAQSection from "../../components/FAQSection";
import Contact from "../../components/Contact";

import faqs from "../../faqs/accesibility";

import deskGraph from "../../public/pageHeros/deskGraph.webp";
import calcMob from "../../public/pageHeros/mob/calcMob.webp";

import { generateProfessionalServiceSchema } from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/accessibility/",
      url: "https://www.wordexperts.com.au/accessibility/",
      name: "Word Accessibility Solutions | Microsoft Word Accessibility | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2018-07-15T16:14:28+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Professional accessible Word document creation and template services. WCAG compliant documents, accessibility audits, and remediation services.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/accessibility/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/accessibility/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/accessibility/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wordexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Accessibility",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/accessibility/#service",
      name: "Word Accessibility Solutions",
      provider: {
        "@id": "https://www.wordexperts.com.au/#organization",
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
    {
      "@type": "WebSite",
      "@id": "https://www.wordexperts.com.au/#website",
      url: "https://www.wordexperts.com.au/",
      name: "Word Experts: Microsoft Word Development and Consulting Services",
      description:
        "Your Microsoft Word Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.wordexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.wordexperts.com.au/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
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
