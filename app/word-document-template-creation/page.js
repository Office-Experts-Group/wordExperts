import React from "react";

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../components/ExpertsAwait";
import FAQSection from "../../components/FAQSection";

import faqs from "../../faqs/document-template-creation";
import faqSchema from "../../faqs/homeSchema";

import graphTable from "../../public/pageHeros/graphTable.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

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
      "@id": "https://www.wordexperts.com.au/word-document-template-creation",
      url: "https://www.wordexperts.com.au/word-document-template-creation",
      name: "Word Template Creation | Word Document Creation | Microsoft Word Services",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-01-13T14:26:07+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Professional Microsoft Word template creation services. Custom document templates that maintain brand consistency and improve productivity.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/word-document-template-creation#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/word-document-template-creation",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/word-document-template-creation#breadcrumb",
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
          name: "Word Document/Template Creation",
        },
      ],
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
        title="Word Document Template Creation"
        desktopImage={graphTable}
        mobileImage={graph}
        altDesk={"graphs on a table"}
        altMob={"graphs"}
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
