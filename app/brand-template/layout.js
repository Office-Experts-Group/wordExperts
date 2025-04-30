import React from "react";
import Script from "next/script";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Brand Template Services | Word Experts",
  description:
  "Our Microsoft Word experts create custom brand templates that ensure your documents maintain consistent branding and professional look across your organisation.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Brand Template Services | Word Experts",
    description:
    "Our Microsoft Word experts create custom brand templates that ensure your documents maintain consistent branding and professional look across your organisation.",
    url: "https://www.wordexperts.com.au/brand-template",
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    "Microsoft Word Brand Templates",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Word Brand Template Services | Word Experts",
    description:
    "Our Microsoft Word experts create custom brand templates that ensure your documents maintain consistent branding and professional look across your organisation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/brand-template",
  },
};

// Schema for the service
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Microsoft Word Brand Template Services",
  "serviceType": "Document Branding",
  "provider": {
    "@type": "Organization",
    "name": "Word Experts",
    "url": "https://www.wordexperts.com.au",
    "telephone": "+611300122038",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Australia"
    }
  },
  "description": "Professional Microsoft Word brand template service that creates custom templates aligned with your business identity, including letterheads, reports, proposals, and more to ensure consistent branding across all your business documentation.",
  "offers": {
    "@type": "Offer",
    "price": "",
    "priceCurrency": "AUD",
    "availability": "https://schema.org/InStock"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Australia"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Businesses and Organizations"
  },
  "serviceOutput": "Professionally branded Microsoft Word templates and styling",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Microsoft Word Brand Template Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Template Design & Creation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rebranding & Style Guide Implementation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Advanced Word Functionality"
        }
      }
    ]
  }
};

// Add structured data for the service using next/script
export default function RootLayout({ children }) {
  return (
    <>
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
      {children}
    </>
  );
}