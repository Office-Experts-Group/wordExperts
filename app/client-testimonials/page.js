import React from "react";

import Contact from "../../components/Contact";
import TestimonialPage from "./(components)/TestimonialPage";
import ServiceHero from "../../components/ServiceHero";

import { getTestimonialsPageSchema } from "../../utils/testimonialSchemaGenerator";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

import { testimonials } from "../../testimonials";

import testimonialsPic from "../../public/pageHeros/testimonials.webp";
import testimonialsMob from "../../public/pageHeros/mob/testimonialsMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials)["@graph"],
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/client-testimonials/",
      url: "https://www.wordexperts.com.au/client-testimonials/",
      name: "Testimonials - Word Experts - Microsoft Word Design, Development and Consulting",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2019-08-06T07:26:47+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Read what our clients say about Word Experts' professional Microsoft Word services. Client testimonials from businesses across Australia.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/client-testimonials/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/client-testimonials/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/client-testimonials/#breadcrumb",
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
          name: "Testimonials",
        },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://www.wordexperts.com.au/client-testimonials/#reviews",
      itemReviewed: {
        "@type": "ProfessionalService", // Changed from LocalBusiness
        "@id": "https://www.wordexperts.com.au/#business", // Reference the ProfessionalService above
      },
      reviewRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "112",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Organization",
        name: "Word Experts Clients",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.wordexperts.com.au/#organization",
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
      <ServiceHero
        title="Client Testimonials"
        desktopImage={testimonialsPic}
        mobileImage={testimonialsMob}
        altDesk={"Wooden block with smiley face"}
        altMob={"five stars"}
      />
      <TestimonialPage testimonials={testimonials} />
      <Contact />
    </>
  );
};

export default Page;
