import React from 'react'

import ServiceHero from '../../components/ServiceHero'
import PageSegmentMain from './(components)/PageSegmentMain'
import PageSegment4 from './(components)/PageSegment4'
import PageSegment5 from './(components)/PageSegment5'
import PageSegmentDropdowns from './(components)/PageSegmentDropdowns'
import Contact from '../../components/Contact'

import rebrand from '../../public/pageHeros/rebrand.webp'
import rebrandingMob from '../../public/pageHeros/mob/rebrandingMob.webp'
import BlackSegment from './(components)/BlackSegment'

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
      "@id": "https://www.wordexperts.com.au/document-rebranding-services",
      url: "https://www.wordexperts.com.au/document-rebranding-services",
      name: "Document Rebranding Services | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2025-04-30T15:51:37+00:00",
      dateModified: "2025-04-30T00:00:00+00:00",
      description:
      "Our Microsoft Word experts create custom templates with brand-consistent formatting to ensure your documents maintain a professional look.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/document-rebranding-services#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/document-rebranding-services"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/document-rebranding-services#breadcrumb",
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
          name: "Corporate Identity",
          item: "https://www.wordexperts.com.au/document-rebranding-services",
        },
      ],
    },
  ],
};
const page = () => {

  return (
    <main>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
              <ServiceHero
        title="Document Rebranding Services"
        desktopImage={rebrand}
        mobileImage={rebrandingMob}
        altDesk={"Rebuild and Rebrand"}
        altMob={"alarm clock with time to rebranding"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <BlackSegment />
      <PageSegment5 />
      <PageSegmentDropdowns />
      <Contact />
    </main>
  )
}

export default page