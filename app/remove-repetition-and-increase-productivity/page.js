import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Contact from "../../components/Contact";
import PageSegment4 from "./(components)/PageSegment4";
import ExpertsAwait from "../../components/ExpertsAwait";
import Promo from "../../components/Promo";
import FAQSection from "../../components/FAQSection";

import faqs from "../../faqs/remove-repitition";
import faqSchema from "../../faqs/repititionSchema";

import desk from "../../public/pageHeros/desk.webp";
import glassesMob from "../../public/pageHeros/mob/glassesMob.webp";

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
      "@id":
        "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
      url: "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
      name: "Word Remove Repetition | Word Increase Productivity | Word Document Services",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:11:12+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Automate repetitive Word tasks and increase productivity. Custom automation solutions for Microsoft Word documents and templates.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity#breadcrumb",
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
          name: "Remove Repetition and Increase Productivity",
          item: "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity#service",
      name: "Word Automation Solutions",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Professional Microsoft Word automation services for improved productivity",
      serviceType: "Document Automation",
      category: "Productivity Solutions",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Productivity Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Task Automation",
              description: "Automation of repetitive document tasks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow Optimization",
              description: "Streamlining document creation processes",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Template Automation",
              description: "Automated document template solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VBA Development",
              description: "Custom macro development for automation",
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
      <ServiceHero
        title="Remove Repetition and Increase Productivity"
        desktopImage={desk}
        mobileImage={glassesMob}
        altDesk={"office desk items"}
        altMob={"reading glasses on a computer desk"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <Promo
        h2="Boost Productivity with Automated Document Templates"
        p="Our automation solutions make document creation faster and more consistent, allowing your team to focus on high-priority work while we handle the repetitive tasks."
      />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
