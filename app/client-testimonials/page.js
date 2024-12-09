import React from "react";

import Contact from "../../components/Contact";
import TestimonialPage from "./(components)/TestimonialPage";
import ServiceHero from "../../components/ServiceHero";

import { getTestimonialsPageSchema } from "../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials)["@graph"],
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
        "@type": "LocalBusiness",
        name: "Word Experts Group",
        "@id": "https://www.wordexperts.com.au/#organization",
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
        name: "Word Experts Group",
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
    {
      "@type": "Organization",
      "@id": "https://www.wordexperts.com.au/#organization",
      name: "Word Experts Group",
      url: "https://www.wordexperts.com.au/",
      telephone: "1300 122 038",
      email: "consult@wordexperts.com.au",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 122 038",
          contactType: "customer service",
          email: "consult@wordexperts.com.au",
          availableLanguage: ["en", "en-AU"],
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "New South Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "Victoria",
        },
        {
          "@type": "AdministrativeArea",
          name: "Queensland",
        },
        {
          "@type": "AdministrativeArea",
          name: "Western Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "South Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tasmania",
        },
        {
          "@type": "AdministrativeArea",
          name: "Australian Capital Territory",
        },
        {
          "@type": "AdministrativeArea",
          name: "Northern Territory",
        },
      ],
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-AU",
        "@id": "https://www.wordexperts.com.au/#/schema/logo/image/",
        url: "/logo.png",
        contentUrl: "/logo.png",
        width: 1181,
        height: 1181,
        caption: "Word Experts Group",
      },
      image: {
        "@id": "https://www.wordexperts.com.au/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/MSOfficeExperts",
        "https://x.com/OfficeExpertsG1",
        "https://www.instagram.com/officeexpertsgroup",
        "https://www.linkedin.com/company/office-experts-group",
        "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
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
      <ServiceHero title="Client Testimonials" />
      <TestimonialPage testimonials={testimonials} />
      <Contact />
    </>
  );
};

export default Page;
