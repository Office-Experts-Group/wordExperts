// Page component for /mail-merge route
import React from "react";

// Shared components from main components folder
import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import ExpertsAwait from "../../components/ExpertsAwait";
import Promo from "../../components/Promo";

// Page-specific components from local folder
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PageSegmentEnd from "./(components)/PageSegmentEnd";

// Hero images - update these paths to your actual images
import mailMerge from "../../public/pageHeros/mailMerge.webp";
import mailMergeMob from "../../public/pageHeros/mob/mailMergeMob.webp";

// Schema generators for consistent structured data
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

// JSON-LD structured data for search engines
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/mail-merge",
      url: "https://www.wordexperts.com.au/mail-merge",
      name: "Mail Merge Services | Microsoft Word Experts Australia",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2025-11-20T00:00:00+00:00",
      dateModified: "2025-11-20T00:00:00+00:00",
      description:
        "Streamline your document creation with professional Mail Merge solutions. Word Experts helps Australian businesses automate letters, invoices, labels, and emails using Microsoft Word and Excel.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/mail-merge#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/mail-merge"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/mail-merge#breadcrumb",
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
          name: "Mail Merge Services",
          item: "https://www.wordexperts.com.au/mail-merge",
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
        title="Mail Merge Services"
        desktopImage={mailMerge}
        mobileImage={mailMergeMob}
        altDesk={"documents being merged together"}
        altMob={"mail merge automation concept"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <PageSegment4 />
      <ExpertsAwait />
      <Promo
  h2="Get Started with Mail Merge Today"
  p="If you're tired of copy-pasting names and details into dozens of Word documents, it's time to automate your process. We'll help you set up a professional Mail Merge system tailored to your business."
/>
<PageSegmentEnd />
      <Contact />
    </>
  );
};

export default Page;