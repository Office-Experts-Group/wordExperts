import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import GovDeptIntro from "./(components)/GovDeptIntro";

const Contact = dynamic(() => import("../../components/Contact"));
const GovDeptCompliance = dynamic(
  () => import("./(components)/GovDeptCompliance"),
);
const GovDeptTemplateSystem = dynamic(
  () => import("./(components)/GovDeptTemplateSystem"),
);
const GovDeptCapabilities = dynamic(
  () => import("./(components)/GovDeptCapabilities"),
);
const GovDeptProcess = dynamic(() => import("./(components)/GovDeptProcess"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));

import faqs from "../../faqs/government-departments";
import faqSchema from "../../faqs/govSchema";

import government from "../../public/pageHeros/government.webp";
import governmentMob from "../../public/pageHeros/mob/governmentMob.webp";

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
      "@id": "https://www.wordexperts.com.au/government-departments",
      url: "https://www.wordexperts.com.au/government-departments",
      name: "Government Department Word Document Solutions | Word Government Consultants",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:07:45+00:00",
      dateModified: "2026-09-18T00:00:00+00:00",
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
        desktopImage={government}
        mobileImage={governmentMob}
        altDesk={"Canberra Parliament house with word documents"}
        altMob={"Canberra Parliament house with word documents"}
      />
      <GovDeptIntro />
      <GovDeptCompliance />
      <GovDeptTemplateSystem />
      <GovDeptCapabilities />
      <GovDeptProcess />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
