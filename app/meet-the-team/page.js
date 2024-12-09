import React from "react";

import ServiceHero from "../../components/ServiceHero";
import MeetTheTeam from "../../components/MeetTheTeam";
import Contact from "../../components/Contact";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/meet-the-team/",
      url: "https://www.wordexperts.com.au/meet-the-team/",
      name: "Meet The Team - Word Experts - Microsoft Word Design, Development and Consulting",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2019-08-06T07:28:06+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Meet our expert team of Microsoft Word consultants, developers, and designers. Professional Word template and document specialists across Australia.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/meet-the-team/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/meet-the-team/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/meet-the-team/#breadcrumb",
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
          name: "Meet The Team",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.wordexperts.com.au/meet-the-team/#team",
      name: "Word Experts Team",
      description: "Professional Microsoft Word consultants and developers",
      employee: [
        {
          "@type": "Person",
          name: "Scott",
          jobTitle: "Managing Director",
          description:
            "Excel, Word, Access, Outlook, VBA, SQL Server, Azure, VB.net, VSTO, Office 365",
        },
        {
          "@type": "Person",
          name: "Rochelle",
          jobTitle: "Senior Word/PowerPoint Designer",
          description: "Word, PowerPoint, Excel, InDesign",
        },
        {
          "@type": "Person",
          name: "David",
          jobTitle: "Senior Analyst Programmer",
          description:
            "Excel, Word, Access, PowerPoint, Outlook, Power Apps, Power Automate, VBA, SQL Server, Azure, .NET",
        },
      ],
      member: {
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
      <ServiceHero title="Meet The Team" />
      <MeetTheTeam />
      <Contact />
    </>
  );
};

export default Page;
