// app/word-to-pdf-conversion/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";

import wordToPdf from "../../public/pageHeros/wordToPdf.webp";
import wordToPdfMob from "../../public/pageHeros/mob/wordToPdfMob.webp";

// Above-the-fold components
const WordToPdfHeroServer = dynamic(
  () => import("./(components)/WordToPdfHeroServer"),
);
const WordToPdfProblem = dynamic(
  () => import("./(components)/WordToPdfProblem"),
);
const WordToPdfServices = dynamic(
  () => import("./(components)/WordToPdfServices"),
);
const WordToPdfComparison = dynamic(
  () => import("./(components)/WordToPdfComparison"),
);
const WordToPdfProcess = dynamic(
  () => import("./(components)/WordToPdfProcess"),
);
const WordToPdfFaq = dynamic(() => import("./(components)/WordToPdfFaq"));
const WordToPdfCta = dynamic(() => import("./(components)/WordToPdfCta"));
const Contact = dynamic(() => import("../../components/Contact"));

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
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/word-to-pdf-conversion#service",
      name: "Word to PDF Conversion",
      serviceType: "Document conversion",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      description:
        "Professional Word to PDF conversion for Australian businesses. Bulk document conversion and fillable, editable PDF forms built by the experts. Fixed-price quotes.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/word-to-pdf-conversion",
      url: "https://www.wordexperts.com.au/word-to-pdf-conversion",
      name: "Word to PDF Conversion | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      about: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      datePublished: "2026-07-20T09:00:00+10:00",
      dateModified: "2026-07-20T09:00:00+10:00",
      description:
        "Professional Word to PDF conversion for Australian businesses. Bulk document conversion and fillable, editable PDF forms built by the experts. Fixed-price quotes.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/word-to-pdf-conversion#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/word-to-pdf-conversion#breadcrumb",
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
          name: "Word to PDF Conversion",
          item: "https://www.wordexperts.com.au/word-to-pdf-conversion",
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
        title="Word To PDF Conversions"
        desktopImage={wordToPdf}
        mobileImage={wordToPdfMob}
        altMob="Word to pdf conversion"
        altDesk="Word to pdf conversion"
      />{" "}
      <WordToPdfHeroServer />
      <WordToPdfProblem />
      <WordToPdfServices />
      <WordToPdfComparison />
      <WordToPdfProcess />
      <WordToPdfFaq />
      <WordToPdfCta />
      <Contact />
    </>
  );
};

export default Page;
