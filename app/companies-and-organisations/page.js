import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import BlackSegment from "./(components)/BlackSegment";
import PageSegment8 from "./(components)/PageSegment8";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import FAQSection from "../../components/FAQSection";
import Contents from "./(components)/Contents";

import faqs from "../../faqs/companies-and-organisations";

import report from "../../public/pageHeros/report.webp";
import glassesMob from "../../public/pageHeros/mob/glassesMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/companies-and-organisations/",
      url: "https://www.wordexperts.com.au/companies-and-organisations/",
      name: "Word Template Designers | Word Document Designer | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2018-07-15T16:09:50+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Professional Word template solutions for companies and organizations. Custom document templates that protect corporate identity and improve efficiency.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/companies-and-organisations/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/companies-and-organisations/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/companies-and-organisations/#breadcrumb",
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
          name: "Companies and Organisations",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.wordexperts.com.au/companies-and-organisations/#service",
      name: "Corporate Document Solutions",
      provider: {
        "@id": "https://www.wordexperts.com.au/#organization",
      },
      description:
        "Professional Microsoft Word template and document solutions for companies and organizations",
      serviceType: "Business Solutions",
      category: "Document Management",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Corporate organizations and businesses",
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
              description: "Custom template development for organizations",
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
              name: "Document Standardization",
              description: "Enterprise-wide document standards",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow Optimization",
              description:
                "Business process improvement through document automation",
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
      <Contents />
      <ServiceHero
        title="Microsoft Power Apps Consulting Services"
        desktopImage={report}
        mobileImage={glassesMob}
        altMob={"glasses on a desk with a graph"}
        altDesk={"meeting with person looking at a computer"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment8 />
      <BlackSegment />
      <PageSegment4 />
      <PageSegment5 />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
