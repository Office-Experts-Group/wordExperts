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

const schema = {
  "@context": "https://schema.org",
  "@graph": [
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
    {
      "@type": "Organization",
      "@id": "https://www.wordexperts.com.au/#organization",
      name: "Word Experts Group",
      url: "https://www.wordexperts.com.au/",
      telephone: "1300 12 20 38",
      email: "consult@wordexperts.com.au",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 12 20 38",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "112",
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
      <ServiceHero title="Popup Forms" />
      <PageSegmentMain />
      <Segment4Repeat />
      <PageSegment5 />
      <Promo
        h2="Empowering Your Documents with Seamless Integration"
        p="Our popup forms are designed to simplify data entry, reduce errors, and enhance document consistency, giving your team a more efficient and reliable way to work in Microsoft Word."
      />

      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
