import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contents from "./(components)/Contents";

const Contact = dynamic(() => import("../../components/Contact"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const PageSegmentMain = dynamic(() => import("./(components)/PageSegmentMain"));
const PageSegment8 = dynamic(() => import("./(components)/PageSegment8"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const PageSegment4New = dynamic(() => import("./(components)/PageSegment4New"));

import faqs from "../../faqs/training";
import faqSchema from "../../faqs/trainingSchema";

import twoComputers from "../../public/pageHeros/twoComputers.webp";
import coffeeMob from "../../public/pageHeros/mob/coffeeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";
import Segment4 from "./(components)/Segment4";

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
      "@id": "https://www.wordexperts.com.au/training",
      url: "https://www.wordexperts.com.au/training",
      name: "Microsoft Word Training | Microsoft Word Help | Word Experts",
      description:
        "Professional Microsoft Word training and support services. Expert help with templates, documents, and automation. Available remotely or onsite across Australia.",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T15:59:22+00:00",
      dateModified: "2025-07-30T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/training#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/training"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/training#breadcrumb",
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
          name: "MIcrosoft Word Training",
          item: "https://www.wordexperts.com.au/training",
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
      <Contents />
      <ServiceHero
        title="Microsoft Word Support and Training"
        desktopImage={twoComputers}
        mobileImage={coffeeMob}
        altDesk={"two computers"}
        altMob={"coffee cup and laptop"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <Segment4 />
      {/* <PageSegment4 /> */}
      <PageSegment4New />
      <ExpertsAwait />
      {/* <PageSegment5 />
      <Segment4Repeat /> */}
      <PageSegment8 />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
