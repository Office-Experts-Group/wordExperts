import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationPages from "../(components)/LocationPages";
import CTAMainProps from "../(components)/CTAMainProps";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import ServicesLocation from "../(components)/ServicesLocation";
import Promo from "../../components/Promo";
import GoodToKnow from "../../components/GoodToKnow";

import darwin from "../../public/pageHeros/darwin.webp";
import darwinMob from "../../public/pageHeros/mob/darwinMob.webp";

import { getHomePageSchema } from "../../utils/testimonialSchemaGenerator";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import { testimonials } from "../../testimonials";

import LocationSummary from "../(components)/LocationSummary";
import Testimonials from "../(components)/Testimonials";
import MeetTheTeamSlider from "../../components/MeetTheTeamSlider";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    ...getHomePageSchema(testimonials, "word")["@graph"],
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/word-consultants-darwin",
      url: "https://www.wordexperts.com.au/word-consultants-darwin",
      name: "Microsoft Word Consultants darwin",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-03-26T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/word-consultants-darwin#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/word-consultants-darwin"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/word-consultants-darwin#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wordexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Microsoft Word Consultants Darwin",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Darwin";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Microsoft Word Consultants ${location}`}
        desktopImage={darwin}
        mobileImage={darwinMob}
        altDesk="Darwin"
        altMob="Darwin"
      />
      <LocationSummary location={location} service="Microsoft Word" />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <GoodToKnow />
      <Testimonials testimonials={testimonials} />
      <Promo
        h2={"Let's transform your documents!"}
        p={
          "Unlock the full potential of Microsoft Word with our expert consultant solutions—designed to enhance document productivity and streamline your documentation processes."
        }
      />
      <ContactLocationSegment location={location} />
    </>
  );
};

export default Page;
