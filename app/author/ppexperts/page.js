import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import PageSegment4 from "./(components)/PageSegment4";

import tableGraph from "../../../public/pageHeros/tableGraph.webp";
import teamMob from "../../../public/pageHeros/mob/teamMob.webp";

import { generateProfessionalServiceSchema } from "../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/author/ppexperts",
      url: "https://www.wordexperts.com.au/author/ppexperts",
      name: "Word Experts Australia | Expert Authors",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Meet our Microsoft Word consultants and trainers. Specialists in document automation, template development, and corporate training across Australia.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/author/ppexperts#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/author/wordexperts"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/author/ppexperts#breadcrumb",
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
          name: "Authors",
          item: "https://www.wordexperts.com.au/author",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Word Experts Australia",
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
        title="Word Experts"
        desktopImage={tableGraph}
        mobileImage={teamMob}
        altDesk={"graphs on a table"}
        altMob={"office coworkers celebrating together"}
      />
      <PageSegment4 />
    </>
  );
};

export default Page;
