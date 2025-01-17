import React from "react";
import ServiceHero from "../../components/ServiceHero";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import CTAMainProps from "../(components)/CTAMainProps";
import LocationPages from "../(components)/LocationPages";
import LocationPromos from "../(components)/LocationPromos";

import sydney from "../../public/pageHeros/sydney.webp";

import sydneyMob from "../../public/pageHeros/mob/sydneyMob.webp";

import { generateProfessionalServiceSchema } from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/excel-and-access-experts-sydney/",
      url: "https://www.wordexperts.com.au/excel-and-access-experts-sydney/",
      name: "Excel and Access Experts - Sydney - Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au/#website",
      },
      datePublished: "2019-06-24T07:07:52+00:00",
      dateModified: "2024-11-24T07:07:52+00:00",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/excel-and-access-experts-sydney/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/excel-and-access-experts-sydney/",
          ],
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
  const location = "Sydney";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Excel and Access Consultants ${location}`}
        desktopImage={sydney}
        mobileImage={sydneyMob}
        altDesk={"Sydney Harbor Bridge, Australia"}
        altMob={"centrepoint tower Sydney, Australia"}
      />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <LocationPromos location={location} />
      <p
        style={{
          textAlign: "center",
          fontStyle: "italic",
          margin: "2rem 1rem 6rem 1rem",
          color: "#046999;",
          fontWeight: "700",
        }}
      >
        <strong>NOTE* </strong>Our services are available Australia-wide via
        remote access which is typically the most cost and time effective
        method.
      </p>
      <ContactLocationSegment location={location} />
    </>
  );
};

export default Page;
