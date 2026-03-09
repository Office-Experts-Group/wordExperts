import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment4Repeat = dynamic(
  () => import("./(components)/PageSegment4Repeat"),
);
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));

import faqs from "../../faqs/template-conversions";

import penPoint from "../../public/pageHeros/penPoint.webp";
import seatMob from "../../public/pageHeros/mob/seatMob.webp";

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
      "@id": "https://www.wordexperts.com.au/word-template-conversions",
      url: "https://www.wordexperts.com.au/word-template-conversions",
      name: "Word template conversions | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-01-13T14:25:35+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Professional Word template conversion services. Convert Adobe, InDesign and other formats to fully functional Microsoft Word templates with preserved branding.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/word-template-conversions#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/word-template-conversions"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/word-template-conversions#breadcrumb",
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
          name: "Word Template Conversions",
          item: "https://www.wordexperts.com.au/word-template-conversions",
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
      <ServiceHero
        title="Word Template Conversions"
        desktopImage={penPoint}
        mobileImage={seatMob}
        altMob="Empty office environment"
        altDesk="person pointing at a computer"
      />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment4Repeat />
      <PageSegment5 />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
