import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../components/Contact";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegmentMain from "./(components)/PageSegmentMain";
import BlackSegment from "./(components)/BlackSegment";
import Promo from "./(components)/Promo";
import Segment4Repeat from "./(components)/Segment4Repeat";
import ExpertsAwait from "./(components)/ExpertsAwait";
import Contents from "./(components)/Contents";

import twoComputers from "../../public/pageHeros/twoComputers.webp";
import seatMob from "../../public/pageHeros/mob/seatMob.webp";

import { generateProfessionalServiceSchema } from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/upgrades-and-migration/",
      url: "https://www.wordexperts.com.au/upgrades-and-migration/",
      name: "Word Upgrades and Migration | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2018-09-11T00:20:15+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Stuck on an old version? Expert Microsoft Word upgrade and migration services. Resolve formatting issues, maintain document integrity, and ensure smooth transitions.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/upgrades-and-migration/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/upgrades-and-migration/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/upgrades-and-migration/#breadcrumb",
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
          name: "Upgrades and Migration",
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
      <Contents />
      <ServiceHero
        title="Upgrades and Migration"
        desktopImage={twoComputers}
        mobileImage={seatMob}
        altDesk={"two computers analysing graphs"}
        altMob={"an empty office chair at a desk"}
      />
      <ServicePageCards />
      <PageSegment4 />
      <PageSegmentMain />
      <BlackSegment />
      <Promo />
      <Segment4Repeat />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
