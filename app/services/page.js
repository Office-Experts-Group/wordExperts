import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import ServicesSection from "./(components)/ServicesSection";
import WhyChooseUs from "../../app/about-us/(components)/WhyChooseUs";
import IndustrySection from "./(components)/IndustrySection";
import HowWeWork from "./(components)/HowWeWork";
import AustraliaWide from "./(components)/AustraliaWide";
import Testimonials from "../../app/(components)/Testimonials";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";

import { testimonials } from "../../testimonials";

import services from "../../public/pageHeros/services.webp";
import servicesMob from "../../public/pageHeros/mob/servicesMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/services",
      url: "https://www.wordexperts.com.au/services",
      name: "Microsoft Word Services | Word Consultants Australia",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2025-12-26T00:00:00+00:00",
      dateModified: "2026-01-29T00:00:00+00:00",
      description:
        "Comprehensive Microsoft Word services including template creation, document automation, VBA development, accessibility compliance, custom ribbons, forms and training across Australia.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/services#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/services"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/services#breadcrumb",
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
          name: "Services",
          item: "https://www.wordexperts.com.au/services",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/services#service",
      serviceType: "Microsoft Word Consulting Services",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Word Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Global Template Solution",
              description:
                "Enterprise-grade Word template solutions with automated styling, custom ribbons, and centralised template management",
              url: "https://www.wordexperts.com.au/corporate-global-template-solution",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document Template Creation & Design",
              description:
                "Professional Word template design incorporating advanced features, building blocks, and intelligent workflows",
              url: "https://www.wordexperts.com.au/word-document-template-creation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document Automation & VBA Development",
              description:
                "Custom VBA macro programming for document generation, workflow automation, and business system integration",
              url: "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Toolbars & Ribbons",
              description:
                "Custom Word ribbon interfaces with one-click automation buttons and department-specific functionality",
              url: "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Forms & Data Entry Solutions",
              description:
                "Sophisticated Word forms with validation, protected content, and database integration capabilities",
              url: "https://www.wordexperts.com.au/popup-forms",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mail Merge & Data Integration",
              description:
                "Professional mail merge solutions connecting Word with Excel, Access, and external data sources",
              url: "https://www.wordexperts.com.au/mail-merge",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Accessibility & Compliance",
              description:
                "WCAG-compliant document creation, accessibility audits, and government compliance solutions",
              url: "https://www.wordexperts.com.au/accessibility",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Upgrades, Migration & Conversions",
              description:
                "Word version upgrades, document migration from other platforms, and legacy template modernisation",
              url: "https://www.wordexperts.com.au/upgrades-and-migration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Training & Support",
              description:
                "Customised Word training programmes, ongoing support packages, and technical assistance",
              url: "https://www.wordexperts.com.au/training",
            },
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.wordexperts.com.au/services#industries",
      name: "Industries We Serve",
      description:
        "Word Experts provides specialised Microsoft Word services across diverse Australian industries",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Government & Public Sector",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Legal Services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Financial Services",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Healthcare & Medical",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Education & Training",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Professional Services",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Manufacturing & Engineering",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Corporate Enterprise",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Not-for-Profit Organisations",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Property & Real Estate",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.wordexperts.com.au/services#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What Microsoft Word services do you provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide comprehensive Word services including template creation, document automation, VBA macro development, custom ribbons and forms, mail merge solutions, accessibility compliance, upgrades and migration, training and ongoing support. Our consultants work across all Word versions and integrate with other Microsoft Office applications.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide services Australia-wide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide Word consulting services across all Australian states and territories. We have consultants in major cities including Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, and regional areas. We offer both remote consulting and on-site services depending on your requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How experienced are your Word consultants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All our Word consultants have extensive professional experience in document design and automation. Our team includes senior developers and VBA programmers who specialise in creating custom Word solutions for Australian businesses. We have over 25 years of combined experience serving businesses across all industries.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate Word with other systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we specialise in Word integration with other Microsoft Office applications, databases, CRM systems, document management systems, and third-party software.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide ongoing support after project completion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer ongoing support and maintenance services. This includes troubleshooting, updates, enhancements, training, and technical assistance.",
          },
        },
        {
          "@type": "Question",
          name: "What industries do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work across all industries including government, legal, financial services, healthcare, education, professional services, manufacturing, corporate enterprises, not-for-profit organisations, and more..",
          },
        },
        {
          "@type": "Question",
          name: "Can you fix or update our existing templates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We regularly update and repair existing templates, resolve compatibility issues, modernise legacy documents, and enhance templates with additional features.",
          },
        },
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
      <ServiceHero
        title="Microsoft Word Services"
        desktopImage={services}
        mobileImage={servicesMob}
        altDesk="Microsoft Word professional services and solutions"
        altMob="Word consulting services Australia"
      />
      <PageSegmentMain />
      <ServicesSection />
      <WhyChooseUs />
      <IndustrySection />
      <ExpertsAwait />
      <HowWeWork />
      <AustraliaWide />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </>
  );
};

export default Page;
