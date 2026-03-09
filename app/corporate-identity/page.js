import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Contact = dynamic(() => import("../../components/Contact"));

import faqs from "../../faqs/corporate-identity";
import faqSchema from "../../faqs/corporateSchema";

import invoice from "../../public/pageHeros/invoice.webp";
import codingMob from "../../public/pageHeros/mob/codingMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

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
      "@id": "https://www.wordexperts.com.au/corporate-identity",
      url: "https://www.wordexperts.com.au/corporate-identity",
      name: "Word/Corporate Global Template Solution / Corporate Governance Word Document",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T15:51:37+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Professional corporate identity protection through Microsoft Word templates. Ensure brand consistency and document compliance across your organisation.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/corporate-identity#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/corporate-identity"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/corporate-identity#breadcrumb",
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
          name: "Corporate Identity",
          item: "https://www.wordexperts.com.au/corporate-identity",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/corporate-identity#service",
      name: "Corporate Identity Protection",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Professional Microsoft Word template solutions for corporate identity protection and brand consistency",
      serviceType: "Corporate Document Services",
      areaServed: {
        "@type": "Country",
        name: "Australia",
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
