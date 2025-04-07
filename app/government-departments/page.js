import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Contact from "../../components/Contact";
import Segment4Repeat from "./(components)/Segment4Repeat";
import ExpertsAwait from "../../components/ExpertsAwait";
import FAQSection from "../../components/FAQSection";

import faqs from "../../faqs/government-departments";
import faqSchema from "../../faqs/govSchema";

import deskGraph from "../../public/pageHeros/deskGraph.webp";
import meetingMob from "../../public/pageHeros/mob/meetingMob.webp";

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
      "@id": "https://www.wordexperts.com.au/government-departments",
      url: "https://www.wordexperts.com.au/government-departments",
      name: "Government Department Word Document Solutions | Word Government Consultants",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:07:45+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Specialised Microsoft Word solutions for government departments. Accessible documents, compliant templates, and secure document management solutions.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/government-departments#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/government-departments"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/government-departments#breadcrumb",
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
          name: "Government Departments",
          item: "https://www.wordexperts.com.au/government-departments",
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
        title="Government Departments"
        desktopImage={deskGraph}
        mobileImage={meetingMob}
        altDesk={"graphs on a table"}
        altMob={"meeting at an office a table"}
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
