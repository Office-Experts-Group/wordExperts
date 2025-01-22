import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Contact from "../../components/Contact";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../components/ExpertsAwait";
import Promo from "../../components/Promo";
import FAQSection from "../../components/FAQSection";

import faqs from "../../faqs/quick-parts";
import faqSchema from "../../faqs/quickPartsSchema";

import whiteBoard from "../../public/pageHeros/whiteBoard.webp";
import puzzleMob from "../../public/pageHeros/mob/puzzleMob.webp";

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
      "@id": "https://www.wordexperts.com.au/quick-parts/",
      url: "https://www.wordexperts.com.au/quick-parts/",
      name: "Microsoft Word Document Quick Parts Services | Quick Parts Design Consulting",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2018-01-13T14:26:38+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Expert Microsoft Word Quick Parts implementation. Enhance document creation with pre-built content and automated building blocks.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/quick-parts/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/quick-parts/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/quick-parts/#breadcrumb",
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
          name: "Quick Parts",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/quick-parts/#service",
      name: "Word Quick Parts Development",
      provider: {
        "@id": "https://www.wordexperts.com.au/#organization",
      },
      description:
        "Professional Microsoft Word Quick Parts and Building Blocks implementation services",
      serviceType: "Document Automation",
      category: "Content Management",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Quick Parts Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Building Blocks Development",
              description:
                "Creation and organization of reusable content blocks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Quick Parts Implementation",
              description: "Setup and configuration of Quick Parts galleries",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Management",
              description:
                "Organization and maintenance of document components",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Template Integration",
              description: "Integration of Quick Parts with document templates",
            },
          },
        ],
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="Quick Parts"
        desktopImage={whiteBoard}
        mobileImage={puzzleMob}
        altDesk={"person making an office presentation on a whiteboard"}
        altMob={"people holding large jigsaw puzzle pieces together"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <PageSegment5 />
      <Promo
        h2="Optimise Document Creation with Quick Parts"
        p="Our Quick Parts solutions allow your team to easily insert prebuilt content blocks, ensuring faster document creation, consistency, and improved productivity across the board."
      />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
