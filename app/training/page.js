import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../components/Contact";
import ExpertsAwait from "../../components/ExpertsAwait";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment8 from "./(components)/PageSegment8";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import Segment4Repeat from "./(components)/Segment4Repeat";
import FAQSection from "../../components/FAQSection";
import Contents from "./(components)/Contents";

import faqs from "../../faqs/training";

import support from "../../public/pageHeros/support.webp";
import coffeeMob from "../../public/pageHeros/mob/coffeeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/training/",
      url: "https://www.wordexperts.com.au/training/",
      name: "Microsoft Word Training | Microsoft Word Help | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2018-07-15T15:59:22+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/training/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/training/"],
        },
      ],
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
        title="Microsoft Word Help and Training"
        desktopImage={support}
        mobileImage={coffeeMob}
        altDesk={"support"}
        altMob={"coffee cup and laptop"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment8 />
      <PageSegment4 />
      <ExpertsAwait />
      <PageSegment5 />
      <Segment4Repeat />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
