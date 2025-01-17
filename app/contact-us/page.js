import React from "react";

import Contact from "../../components/Contact";
import ServiceHero from "../../components/ServiceHero";
import CTAMain from "./(components)/CTAMain";

import contactUs from "../../public/pageHeros/contactUs.webp";
import contactUsMob from "../../public/pageHeros/mob/contactUsMob.webp";

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
      "@id": "https://www.wordexperts.com.au/contact-us/",
      url: "https://www.wordexperts.com.au/contact-us/",
      name: "Contact | Microsoft Excel | Microsoft Access | Power BI | MS Office",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2017-11-19T03:48:14+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Contact Word Experts for professional Microsoft Word solutions. Expert consultants across Australia available onsite or by remote access.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/contact-us/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/contact-us/"],
        },
        {
          "@type": "CommunicateAction",
          target: [
            {
              "@type": "EntryPoint",
              urlTemplate: "tel:+61-1300-12-20-38",
              name: "Phone",
            },
            {
              "@type": "EntryPoint",
              urlTemplate: "mailto:consult@wordexperts.com.au",
              name: "Email",
            },
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/contact-us/#breadcrumb",
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
          name: "Contact Us",
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.wordexperts.com.au/contact-us/#contactpage",
      name: "Contact Word Experts",
      description:
        "Get in touch with our Microsoft Word experts for professional document solutions",
      url: "https://www.wordexperts.com.au/contact-us/",
      provider: {
        "@id": "https://www.wordexperts.com.au/#organization",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+61-1300-12-20-38",
          contactType: "customer service",
          email: "consult@wordexperts.com.au",
          availableLanguage: ["en", "en-AU"],
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
        title="Contact Us"
        desktopImage={contactUs}
        mobileImage={contactUsMob}
        altDesk={"contact method icons on wooden blocks"}
        altMob={"contact method icons on wooden blocks"}
      />
      <CTAMain />
      <Contact />
    </>
  );
};

export default Page;
