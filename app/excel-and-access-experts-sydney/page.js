import React from "react";
import ServiceHero from "../../components/ServiceHero";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import CTAMainProps from "../(components)/CTAMainProps";
import LocationPages from "../(components)/LocationPages";
import LocationPromos from "../(components)/LocationPromos";

import sydney from "../../public/pageHeros/sydney.webp";

import sydneyMob from "../../public/pageHeros/mob/sydneyMob.webp";

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
      "@id": "https://www.wordexperts.com.au/excel-and-access-experts-sydney",
      url: "https://www.wordexperts.com.au/excel-and-access-experts-sydney",
      name: "Excel and Access Experts - Sydney - Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2019-06-24T07:07:52+00:00",
      dateModified: "2024-11-24T07:07:52+00:00",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/excel-and-access-experts-sydney#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/excel-and-access-experts-sydney",
          ],
        },
      ],
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
