import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../components/Contact";
import ExpertsAwait from "../../components/ExpertsAwait";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment8 from "./(components)/PageSegment8";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import Segment4Repeat from "./(components)/Segment4Repeat";
import FAQSection from "../../components/FAQSection";
import Contents from "./(components)/Contents";

import faqs from "../../faqs/training";
import faqSchema from "../../faqs/trainingSchema";

import twoComputers from "../../public/pageHeros/twoComputers.webp";
import coffeeMob from "../../public/pageHeros/mob/coffeeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import Segment4 from "./(components)/Segment4";
import PageSegment4New from "./(components)/PageSegment4New";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
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
