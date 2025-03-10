import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationGroups from "./(components)/LocationGroups";
import Promo from "../../components/Promo";
import Contact from "../../components/Contact";

import australia from "../../public/pageHeros/australia.webp";
import australiaMob from "../../public/pageHeros/mob/australiaMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

// Import location images

import sydney from "../../public/pageHeros/sydney.webp";
import melbourne from "../../public/pageHeros/mob/melbourneMob.webp";
import brisbane from "../../public/pageHeros/mob/brisbaneMob.webp";
import perth from "../../public/pageHeros/mob/perthMob.webp";
import adelaide from "../../public/pageHeros/mob/adelaideMob.webp";
import canberra from "../../public/pageHeros/mob/canberraMob.webp";
import northernRivers from "../../public/pageHeros/mob/northernRiversMob.webp";
import wollongong from "../../public/pageHeros/mob/wollongongMob.webp";
import richmond from "../../public/pageHeros/mob/richmondMob.webp";
import darwin from "../../public/pageHeros/mob/darwinMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/locations",
      url: "https://www.wordexperts.com.au/locations",
      name: "Microsoft Word Experts Locations | Australia-Wide Service",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-03-26T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/locations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/locations"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/locations#breadcrumb",
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
          name: "Locations",
        },
      ],
    },
  ],
};

const Page = () => {
  // Define the location data
  const locationData = [
    {
      id: "nsw",
      sectionTitle: "New South Wales",
      locations: [
        {
          name: "Sydney, NSW",
          image: sydney,
          alt: "Sydney skyline",
          description:
            "Our Sydney team provides expert Microsoft Word consulting services across the Greater Sydney metropolitan area. Customising templates, fill in forms, our team also offers support and training along with a variety of Microsoft Word Services",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Northern Rivers, NSW",
          image: northernRivers,
          alt: "Northern Rivers region",
          description:
            "Serving the Northern Rivers region of NSW, our team delivers comprehensive Microsoft Word solutions for businesses of all sizes. We offer both remote and on-site support for businesses of all sizes",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Wollongong, NSW",
          image: wollongong,
          alt: "Wollongong coastline",
          description:
            "Our Wollongong team serves the Illawarra region with specialised Microsoft consulting services. We provide expert solutions for businesses seeking to optimise their Microsoft software infrastructure and improve productivity.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "vic",
      sectionTitle: "Victoria",
      locations: [
        {
          name: "Melbourne, VIC",
          image: melbourne,
          alt: "Melbourne cityscape",
          description:
            "Our Melbourne team delivers expert Microsoft Word consulting services throughout the Greater Melbourne area. Office Experts Group specialises in custom Office development, database solutions, and business process automation using the entire Microsoft suite. Our dedicated Word team are experts in their field",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Richmond, VIC",
          image: richmond,
          alt: "Richmond area",
          description:
            "Located in the heart of Richmond, our specialists provides tailored Microsoft solutions for local businesses. We offer expert consulting for all Microsoft Office applications with a focus on task automation and improving business efficiency.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "qld",
      sectionTitle: "Queensland",
      locations: [
        {
          name: "Brisbane, QLD",
          image: brisbane,
          alt: "Brisbane river and skyline",
          description:
            "Our Brisbane team provides comprehensive Microsoft Office consulting services across Southeast Queensland. We deliver custom solutions, training, and support for all Microsoft applications to help businesses maximise their productivity. Our dedicated Word team has provided consistent reliable services for the last 25 years",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "wa",
      sectionTitle: "Western Australia",
      locations: [
        {
          name: "Perth, WA",
          image: perth,
          alt: "Perth skyline",
          description:
            "Our Perth consultants deliver expert Microsoft Word solutions to businesses throughout Western Australia. We provide specialised services to help automate and streamline your business processes.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "sa",
      sectionTitle: "South Australia",
      locations: [
        {
          name: "Adelaide, SA",
          image: adelaide,
          alt: "Adelaide city view",
          description:
            "Serving South Australia businesses, our Adelaide team provides expert Microsoft Word consulting and development services. We specialise in creating custom solutions that address unique business challenges.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "act",
      sectionTitle: "Australian Capital Territory",
      locations: [
        {
          name: "Canberra, ACT",
          image: canberra,
          alt: "Canberra parliament house",
          description:
            "Our Canberra team specialises in Microsoft solutions for government departments and local businesses. We provide expert consulting for all Microsoft Office applications within the Office Experts Group, our Word Experts team are dedicated to providing outstanding services for government departments and local businesses.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "nt",
      sectionTitle: "Northern Territory",
      locations: [
        {
          name: "Darwin, NT",
          image: darwin,
          alt: "Darwin harbor",
          description:
            "Our Northern Territory team delivers specialised Microsoft Word consulting services to Darwin businesses and organisations. We provide remote and on-site support for all Microsoft applications.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Our Locations"
        desktopImage={australia}
        mobileImage={australiaMob}
        altDesk="Australia map"
        altMob="man holding Australia flag"
      />

      {locationData.map((section) => (
        <LocationGroups
          key={section.id}
          sectionTitle={section.sectionTitle}
          locations={section.locations}
        />
      ))}

      <Promo
        h2={"Need Microsoft expertise in your area?"}
        p={
          "Contact us today to discover how our local and remote services can help your business leverage the full power of Microsoft Word."
        }
      />
      <Contact />
    </>
  );
};

export default Page;
