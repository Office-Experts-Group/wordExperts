import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const PageSegmentDropdowns = dynamic(
  () => import("./(components)/PageSegmentDropdowns"),
);
const CompareContainer = dynamic(
  () => import("./(components)/CompareContainer"),
);

import brandTemplate from "../../public/pageHeros/brandTemplate.webp";
import brandTemplateMob from "../../public/pageHeros/mob/brandTemplateMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";
import BoxSegment from "./(components)/BoxSegment";

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
      "@id": "https://www.wordexperts.com.au/brand-template",
      url: "https://www.wordexperts.com.au/brand-template",
      name: "Microsoft Word Brand Template Services | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:09:50+00:00",
      dateModified: "2026-03-12T00:00:00+00:00",
      description:
        "Professional Microsoft Word brand template services. Custom document templates that ensure consistent branding and professional appearance across your organization.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/brand-template#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/brand-template"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/brand-template#breadcrumb",
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
          name: "Microsoft Word Brand Templates",
          item: "https://www.wordexperts.com.au/brand-template",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/brand-template#service",
      name: "Microsoft Word Brand Template Services",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Professional Microsoft Word brand template service that creates custom templates aligned with your business identity, including letterheads, reports, proposals, and more to ensure consistent branding across all your business documentation.",
      serviceType: "Document Branding",
      category: "Brand Template Design",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Businesses and Organizations",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Word Brand Template Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Template Design & Creation",
              description:
                "Custom template development aligned with brand identity",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rebranding & Style Guide Implementation",
              description: "Brand consistency across all document templates",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Advanced Word Functionality",
              description: "Professional document automation and styling",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Document Templates",
              description:
                "Letterheads, reports, proposals and presentation templates",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        price: "",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
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
      <main>
        <ServiceHero
          title="Microsoft Word Brand Templates"
          desktopImage={brandTemplate}
          mobileImage={brandTemplateMob}
          altDesk={"Microsoft Word Brand Template Services"}
          altMob={"Brand templates for Microsoft Word"}
        />
        <PageSegmentMain />
        <PageSegment4 />
        <BlackSegment />
        <CompareContainer />
        <BoxSegment />
        {/* <PageSegment5 /> */}
        <PageSegmentDropdowns />
        <Contact />
      </main>
    </>
  );
};

export default Page;
