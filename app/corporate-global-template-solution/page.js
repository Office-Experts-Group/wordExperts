import React from "react";
import dynamic from "next/dynamic";

import Contents from "./(components)/Contents";
import ServiceHero from "../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";

const IFrame = dynamic(() => import("../(components)/IFrame"));
const Contact = dynamic(() => import("../../components/Contact"));
const PageSegmentMain = dynamic(() => import("./(components)/PageSegmentMain"));
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));
const PageSegment8 = dynamic(() => import("./(components)/PageSegment8"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const BookSegment = dynamic(() => import("./(components)/BookSegment"));

import faqs from "../../faqs/corporate-solutions";
import faqSchema from "../../faqs/corporateSolutionsSchema";

import deskGraph from "../../public/pageHeros/deskGraph.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

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
      "@id":
        "https://www.wordexperts.com.au/corporate-global-template-solution",
      url: "https://www.wordexperts.com.au/corporate-global-template-solution",
      name: "Corporate Word Solutions | Microsoft Word Corporate Integrity",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T15:50:26+00:00",
      dateModified: "2025-07-30T00:00:00+00:00",
      description:
        "Advanced Corporate Word Template Solutions enabling efficient creation of corporate documents, brand consistency and document integrity.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/corporate-global-template-solution#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/corporate-global-template-solution",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/corporate-global-template-solution#breadcrumb",
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
          name: "Corporate Global Template Solution",
          item: "https://www.wordexperts.com.au/corporate-global-template-solution",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.wordexperts.com.au/corporate-global-template-solution#service",
      name: "Corporate Global Template Solution",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Advanced Corporate Word Template Solution for enterprise-wide document control and brand consistency",
      serviceType: "Enterprise Document Management",
      category: "Corporate Solutions",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Corporate Template Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Global Template Development",
              description: "Creation of enterprise-wide document templates",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Template Implementation",
              description: "Deployment and integration of corporate templates",
            },
          },
        ],
      },
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
      <Contents />
      <ServiceHero
        title="Corporate Global Template Solution"
        desktopImage={deskGraph}
        mobileImage={graph}
        altDesk={"graphs"}
        altMob={"graphs"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment8 />
      <BookSegment />
      <BlackSegment />
      <PageSegment4 />
      <PageSegment5 />
      <IFrame />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
