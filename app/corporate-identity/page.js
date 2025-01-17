import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../components/ExpertsAwait";
import FAQSection from "../../components/FAQSection";
import Contact from "../../components/Contact";

import faqs from "../../faqs/corporate-identity";

import invoice from "../../public/pageHeros/invoice.webp";
import codingMob from "../../public/pageHeros/mob/codingMob.webp";

import { generateProfessionalServiceSchema } from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/corporate-identity/",
      url: "https://www.wordexperts.com.au/corporate-identity/",
      name: "Word/Corporate Global Template Solution / Corporate Governance Word Document",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2018-07-15T15:51:37+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Professional corporate identity protection through Microsoft Word templates. Ensure brand consistency and document compliance across your organization.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/corporate-identity/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/corporate-identity/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/corporate-identity/#breadcrumb",
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
          name: "Corporate Identity",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/corporate-identity/#service",
      name: "Corporate Identity Protection",
      provider: {
        "@id": "https://www.wordexperts.com.au/#organization",
      },
      description:
        "Professional Microsoft Word template solutions for corporate identity protection and brand consistency",
      serviceType: "Corporate Document Services",
      areaServed: {
        "@type": "Country",
        name: "Australia",
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
        title="Corporate Identity"
        desktopImage={invoice}
        mobileImage={codingMob}
        altDesk={"spreadsheet on a computer screen"}
        altMob={"code being written on a computer"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment5 />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
