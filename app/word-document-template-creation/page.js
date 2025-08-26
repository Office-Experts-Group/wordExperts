import React from "react";

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../components/ExpertsAwait";
import Segment4 from "./(components)/Segment4";
import Segment5 from "./(components)/Segment5";
import Segment6 from "./(components)/Segment6";
import Segment7 from "./(components)/Segment7";
import Segment8 from "./(components)/Segment8";
import Conclusion from "./(components)/Conclusion";
import Image from "./(components)/Image";

import graphTable from "../../public/pageHeros/graphTable.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

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
      "@id": "https://www.wordexperts.com.au/word-document-template-creation",
      url: "https://www.wordexperts.com.au/word-document-template-creation",
      name: "Word Document Template Creation",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-01-13T14:26:07+00:00",
      dateModified: "2025-08-26T00:00:00+00:00",
      description:
        "Professional Microsoft Word template creation services. Custom document templates that maintain brand consistency and improve productivity.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/word-document-template-creation#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/word-document-template-creation",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/word-document-template-creation#breadcrumb",
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
          name: "Word Document/Template Creation",
          item: "https://www.wordexperts.com.au/word-document-template-creation",
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
        title="Word Document Template Creation"
        desktopImage={graphTable}
        mobileImage={graph}
        altDesk={"graphs on a table"}
        altMob={"graphs"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <section style={{ display: "flex", margin: "0 auto" }}>
        <Image />
      </section>
      <PageSegment5 />
      <Segment4 />
      <Segment5 />
      <Segment6 />
      <Segment7 />
      <ExpertsAwait />
      <Segment8 />
      <Conclusion />
      <Contact />
    </>
  );
};

export default Page;
