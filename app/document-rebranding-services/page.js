import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const PageSegmentDropdowns = dynamic(
  () => import("./(components)/PageSegmentDropdowns"),
);
const Contact = dynamic(() => import("../../components/Contact"));
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));

import rebrand from "../../public/pageHeros/rebrand.webp";
import rebrandingMob from "../../public/pageHeros/mob/rebrandingMob.webp";

import {
  generateProfessionalServiceSchema,
  generateWebSiteSchema,
  generateOrganizationSchema,
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
      "@id": "https://www.wordexperts.com.au/document-rebranding-services",
      url: "https://www.wordexperts.com.au/document-rebranding-services",
      name: "Document Rebranding Services | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2025-04-30T15:51:37+00:00",
      dateModified: "2025-10-28T00:00:00+00:00",
      description:
        "Our Microsoft Word designers create custom templates with brand-consistent formatting and professional rebranding services.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/document-rebranding-services#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/document-rebranding-services",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/document-rebranding-services#breadcrumb",
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
          name: "Corporate Identity",
          item: "https://www.wordexperts.com.au/document-rebranding-services",
        },
      ],
    },
  ],
};
const page = () => {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Document Rebranding Services"
        desktopImage={rebrand}
        mobileImage={rebrandingMob}
        altDesk={"Rebuild and Rebrand"}
        altMob={"alarm clock with time to rebranding"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <BlackSegment />
      <PageSegment5 />
      <PageSegmentDropdowns />
      <Contact />
    </main>
  );
};

export default page;
