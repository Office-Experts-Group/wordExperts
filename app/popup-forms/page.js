import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Contact from "../../components/Contact";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../components/ExpertsAwait";
import Promo from "../../components/Promo";
import FAQSection from "../../components/FAQSection";

import faqs from "../../faqs/popup-forms";
import faqSchema from "../../faqs/popupSchema";

import notes from "../../public/pageHeros/notes.webp";
import graphTableMob from "../../public/pageHeros/mob/graphTableMob.webp";

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
      "@id": "https://www.wordexperts.com.au/popup-forms/",
      url: "https://www.wordexperts.com.au/popup-forms/",
      name: "Word Popup Form | Word Popup Window | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2018-01-13T14:27:08+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Professional Microsoft Word popup form development. Custom data entry forms with validation and automation. Improve efficiency and data accuracy.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/popup-forms/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/popup-forms/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/popup-forms/#breadcrumb",
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
          name: "Popup Forms",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/popup-forms/#service",
      name: "Word Popup Form Development",
      provider: {
        "@id": "https://www.wordexperts.com.au/#organization",
      },
      description:
        "Professional Microsoft Word popup form development and automation services",
      serviceType: "Form Development",
      category: "Document Automation",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Popup Form Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Form Development",
              description: "Development of tailored popup forms for data entry",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Validation",
              description:
                "Implementation of data validation and error checking",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Form Automation",
              description: "Automation of form data processing and integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VBA Development",
              description:
                "Custom VBA programming for advanced form functionality",
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
        title="Popup Forms"
        desktopImage={notes}
        mobileImage={graphTableMob}
        altDesk={"sticky notes on a table"}
        altMob={"graphs on an office table"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <PageSegment5 />
      <Promo
        h2="Empowering Your Documents with Seamless Integration"
        p="Our popup forms are designed to simplify data entry, reduce errors, and enhance document consistency, giving your team a more efficient and reliable way to work in Microsoft Word."
      />

      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
