import React from "react";

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../components/ExpertsAwait";
import FAQSection from "../../components/FAQSection";

import faqs from "../../faqs/template-conversions";

import penPoint from "../../public/pageHeros/penPoint.webp";
import seatMob from "../../public/pageHeros/mob/seatMob.webp";

import { generateProfessionalServiceSchema } from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/word-template-conversions/",
      url: "https://www.wordexperts.com.au/word-template-conversions/",
      name: "Word Design Services | Word Template Designers | Word Design Company | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2018-01-13T14:25:35+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Professional Word template conversion services. Convert Adobe, InDesign and other formats to fully functional Microsoft Word templates with preserved branding.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/word-template-conversions/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/word-template-conversions/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/word-template-conversions/#breadcrumb",
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
          name: "Word Template Conversions",
        },
      ],
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
        title="Word Template Conversions"
        desktopImage={penPoint}
        mobileImage={seatMob}
        altMob="Empty office environment"
        altDesk="person pointing at a computer"
      />
      <PageSegmentMain />
      <PageSegment4 />
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
