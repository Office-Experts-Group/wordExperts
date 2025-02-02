import React from "react";

import ExpertsAwait from "../../components/ExpertsAwait";
import FAQSection from "../../components/FAQSection";
import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";

import faqs from "../../faqs/automation";
import faqSchema from "../../faqs/customToolbarsSchema";

import puzzle from "../../public/pageHeros/puzzle.webp";
import puzzleMob from "../../public/pageHeros/mob/puzzleMob.webp";

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
      "@id": "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
      url: "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
      name: "Advanced Customer Toolbars / Ribbons | Custom Toolbar Services | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:04:37+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Expert Microsoft Word toolbar and ribbon customisation services. Improve productivity with custom Word toolbars tailored to your business needs.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/custom-toolbars-and-ribbons#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
          ],
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
        title="Custom Toolbars and Ribbons"
        desktopImage={puzzle}
        mobileImage={puzzleMob}
        altDesk={"people holding large puzzle pieces"}
        altMob={"people holding large puzzle pieces"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
