import React from "react";

import ServiceHero from "../../components/ServiceHero";
// import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import DeskImage from "./(components)/DeskImage";
import ExpertsAwait from "../../components/ExpertsAwait";
// import FAQSection from "../../components/FAQSection";
// import Contents from "./(components)/Contents";

import faqs from "../../faqs/companies-and-organisations";
import faqSchema from "../../faqs/companiesSchema";

import report from "../../public/pageHeros/report.webp";
import glassesMob from "../../public/pageHeros/mob/glassesMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import Bullets from "./(components)/Bullets";
import UseCases from "./(components)/UseCases";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/companies-and-organisations",
      url: "https://www.wordexperts.com.au/companies-and-organisations",
      name: "Companies and Organisations | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:09:50+00:00",
      dateModified: "2025-09-10T00:00:00+00:00",
      description:
        "Professional Word template solutions for companies and organisations. Custom document templates that protect corporate identity and improve efficiency.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/companies-and-organisations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/companies-and-organisations",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/companies-and-organisations#breadcrumb",
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
          name: "Companies and Organisations",
          item: "https://www.wordexperts.com.au/companies-and-organisations",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.wordexperts.com.au/companies-and-organisations#service",
      name: "Corporate Document Solutions",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Professional Microsoft Word template and document solutions for companies and organisations",
      serviceType: "Business Solutions",
      category: "Document Management",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Corporate organisations and businesses",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Corporate Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Templates",
              description: "Custom template development for organisations",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brand Protection",
              description: "Document controls for brand consistency",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document Standardisation",
              description: "Enterprise-wide document standards",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow Optimisation",
              description:
                "Business process improvement through document automation",
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
      {/* <Contents /> */}
      <ServiceHero
        title="Microsoft Word API Integrations & Development"
        desktopImage={report}
        mobileImage={glassesMob}
        altMob={"glasses on a desk with a graph"}
        altDesk={"meeting with person looking at a computer"}
      />
      {/* <ServicePageCards /> */}
      <PageSegmentMain />
      <DeskImage />
      <Bullets />
      <PageSegment4 />
      <ExpertsAwait />
      <UseCases />
      {/* <FAQSection faqs={faqs} /> */}
      <Contact />
    </>
  );
};

export default Page;
