import React from "react";

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import DeskImage from "./(components)/DeskImage";
import ExpertsAwait from "../../components/ExpertsAwait";
import Bullets from "./(components)/Bullets";
import UseCases from "./(components)/UseCases";
import WhyExperts from "./(components)/WhyExperts";

import javascript from "../../public/pageHeros/javascript.webp";
import javascriptMob from "../../public/pageHeros/mob/javascriptMob.webp";

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
      "@id": "https://www.wordexperts.com.au/microsoft-word-api-integrations",
      url: "https://www.wordexperts.com.au/microsoft-word-api-integrations",
      name: "Microsoft Word API Development & Integrations | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:09:50+00:00",
      dateModified: "2025-09-10T00:00:00+00:00",
      description:
        "Expert Microsoft Word API development and custom integrations. Connect Word with CRM, SharePoint, databases and business systems for automated document workflows.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/microsoft-word-api-integrations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/microsoft-word-api-integrations",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/microsoft-word-api-integrations#breadcrumb",
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
          name: "API Development & Integrations",
          item: "https://www.wordexperts.com.au/microsoft-word-api-integrations",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.wordexperts.com.au/microsoft-word-api-integrationss#service",
      name: "Microsoft Word API Development & Integration Services",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Professional Microsoft Word API development and custom integration solutions for business automation",
      serviceType: "Software Development",
      category: "API Development & Integration",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Businesses requiring Word automation and API integrations",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Word API Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Word JavaScript API Development",
              description:
                "Custom Word add-ins and Office JavaScript API solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft Graph Integration",
              description:
                "Connect Word with Microsoft 365 ecosystem via Graph API",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business System Integration",
              description: "Connect Word with CRM, ERP, and database systems",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SharePoint & OneDrive Integration",
              description:
                "Seamless document management and collaboration solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document Automation",
              description:
                "Automated document generation and workflow solutions",
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

      <ServiceHero
        title="Microsoft Word API Development & Custom Integrations"
        desktopImage={javascript}
        mobileImage={javascriptMob}
        altMob={"javascript code on a screen"}
        altDesk={"javascript code on a screen"}
      />

      <PageSegmentMain />
      <DeskImage />
      <Bullets />
      <PageSegment4 />
      <ExpertsAwait />
      <UseCases />
      <WhyExperts />
      <Contact />
    </>
  );
};

export default Page;
