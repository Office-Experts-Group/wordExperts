import React from "react";

import ServiceHero from "../../components/ServiceHero";
import MeetTheTeam from "../../components/MeetTheTeam";
import Contact from "../../components/Contact";

import handShake from "../../public/pageHeros/handShake.webp";
import handShakeMob from "../../public/pageHeros/mob/handShakeMob.webp";

import { generateProfessionalServiceSchema } from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
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
        title={"Meet The Team"}
        desktopImage={handShake}
        mobileImage={handShakeMob}
        altDesk={"Handshake"}
        altMob={"Handshake"}
        isMeetTeam={true}
      />
      <MeetTheTeam />
      <Contact />
    </>
  );
};

export default Page;
