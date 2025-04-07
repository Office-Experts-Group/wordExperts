import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationPages from "../(components)/LocationPages";
import CTAMainProps from "../(components)/CTAMainProps";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import ServicesLocation from "../(components)/ServicesLocation";
import Promo from "../../components/Promo";
import GoodToKnow from "../../components/GoodToKnow";

import northernRivers from "../../public/pageHeros/northernRivers.webp";
import northernRiversMob from "../../public/pageHeros/mob/northernRiversMob.webp";

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
      "@id":
        "https://www.wordexperts.com.au/word-consultants-northern-rivers-nsw",
      url: "https://www.wordexperts.com.au/word-consultants-northern-rivers-nsw",
      name: "Microsoft Word Consultants northern-rivers-nsw",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-03-26T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/word-consultants-northern-rivers-nsw#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/word-consultants-northern-rivers-nsw",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/word-consultants-northern-rivers-nsw#breadcrumb",
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
          name: "Microsoft Word Consultants northern-rivers-nsw",
          item:
            "https://www.wordexperts.com.au/word-consultants-northern-rivers-nsw",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Northern Rivers, NSW";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Microsoft Word Consultants ${location}`}
        desktopImage={northernRivers}
        mobileImage={northernRivers}
        altDesk="Northern Rivers, NSW. Coffs Harbour Jetty"
        altMob="Northern Rivers, NSW, Grafton Jacaranda trees"
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
