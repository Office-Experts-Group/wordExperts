// app/corporate-identity/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import CorporateIdentityAnatomy from "./(components)/CorporateIdentityAnatomy";

const CorporateIdentityDrift = dynamic(
  () => import("./(components)/CorporateIdentityDrift"),
);
const CorporateIdentityGovernance = dynamic(
  () => import("./(components)/CorporateIdentityGovernance"),
);
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Contact = dynamic(() => import("../../components/Contact"));

import faqs from "../../faqs/corporate-identity";
import faqSchema from "../../faqs/corporateSchema";

import identity from "../../public/pageHeros/identity.webp";
import identityMob from "../../public/pageHeros/mob/identityMob.webp";

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
      name: "Corporate Identity | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T15:51:37+00:00",
      dateModified: "2026-09-22T00:00:00+00:00",
      description:
        "Professional corporate identity protection expert Microsoft Word designers. Ensure brand consistency and document compliance across your organisation.",
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
        desktopImage={identity}
        mobileImage={identityMob}
        altDesk={"Design pallette for documents"}
        altMob={"Design pallette for documents"}
      />
      <CorporateIdentityAnatomy />
      <CorporateIdentityDrift />
      <CorporateIdentityGovernance />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
