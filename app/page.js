import React from "react";

import dynamic from "next/dynamic";

// Keep Hero static as it's above fold
import Hero from "./(components)/Hero";

// Dynamically import everything else
const Services = dynamic(() => import("./(components)/Services"));
const CTAMain = dynamic(() => import("./(components)/CTAMain"));
const IsRight = dynamic(() => import("./(components)/IsRight"));
const SolutionsCarousel = dynamic(() =>
  import("./(components)/SolutionsCarousel")
);
const CTAFull = dynamic(() => import("./(components)/CTAFull"));
const Testimonials = dynamic(() => import("./(components)/Testimonials"));
const Brands = dynamic(() => import("../components/Brands"));
const Promo = dynamic(() => import("../components/Promo"));
const Contact = dynamic(() => import("../components/Contact"));
const FAQSection = dynamic(() => import("../components/FAQSection"));

import faqs from "../faqs/home";
import faqSchema from "../faqs/homeSchema";

import { getHomePageSchema } from "../utils/testimonialSchemaGenerator";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../utils/schemaGenerators";
import { testimonials } from "../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    ...getHomePageSchema(testimonials, "word")["@graph"],
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au",
      url: "https://www.wordexperts.com.au",
      name: "Microsoft Word Designer & Experts | Word Consulting",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2017-11-22T14:23:06+00:00",
      dateModified: "2025-03-17T23:52:31+00:00",
      description:
        "Word Experts is the Leading Microsoft Word Design Service in Australia. Expert Word Development & Consulting.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.wordexperts.com.au#website",
      url: "https://www.wordexperts.com.au",
      name: "Word Experts: Microsoft Word Development and Consulting Services",
      description:
        "Word Experts is the Leading Microsoft Word Design Service in Australia. Expert Word Development & Consulting.",
      publisher: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.wordexperts.com.au?s={search_term_string}",
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
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Services />
      <CTAMain />
      <IsRight />
      <SolutionsCarousel />
      <Testimonials testimonials={testimonials} />
      <Brands isBelowFold={true} />
      <CTAFull />
      <Promo
        h2="Master Your Documents"
        p="Professional Microsoft Word solutions to protect your brand, automate workflows, and empower your team to create consistent, high-quality documentation."
      />
      <div style={{ marginTop: "-6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
