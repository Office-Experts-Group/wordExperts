import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import TrainingHero from "./(components)/TrainingHero";

const TrainingNav = dynamic(() => import("./(components)/TrainingNav"));
const TrainingAssistance = dynamic(
  () => import("./(components)/TrainingAssistance"),
);
const TrainingSkills = dynamic(() => import("./(components)/TrainingSkills"));
const TrainingEfficiency = dynamic(
  () => import("./(components)/TrainingEfficiency"),
);
const TrainingSupport = dynamic(() => import("./(components)/TrainingSupport"));
const Contact = dynamic(() => import("../../components/Contact"));

import training from "../../public/pageHeros/training.webp";
import coffeeMob from "../../public/pageHeros/mob/coffeeMob.webp";

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
      "@id": "https://www.wordexperts.com.au/training",
      url: "https://www.wordexperts.com.au/training",
      name: "Microsoft Word Training | Microsoft Word Help | Word Experts",
      description:
        "Professional Microsoft Word training and support services. Expert help with templates, documents, and automation. Available remotely or onsite across Australia.",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T15:59:22+00:00",
      dateModified: "2026-06-17T00:00:00+00:00",
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
          name: "Microsoft Word Training",
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
      <ServiceHero
        title="Microsoft Word Support and Training"
        desktopImage={training}
        mobileImage={coffeeMob}
        altDesk={"computer with word documents"}
        altMob={"coffee cup and laptop"}
      />
      <TrainingHero />
      <TrainingNav />
      <TrainingAssistance />
      <TrainingSkills />
      <TrainingEfficiency />
      <Contact />
    </>
  );
};

export default Page;
