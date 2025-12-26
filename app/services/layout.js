import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Services | Word Consultants Australia",
  description:
    "Comprehensive Microsoft Word services including template creation, document automation, VBA development, accessibility compliance, custom ribbons, forms and training across Australia.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Services | Word Consultants Australia",
    description:
      "Comprehensive Microsoft Word services including template creation, document automation, VBA development, accessibility compliance, custom ribbons, forms and training across Australia.",
    url: "https://www.wordexperts.com.au/services",
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Keywords
  keywords: [
    // Core service keywords
    "Microsoft Word services Australia",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Word Services | Word Consultants Australia",
    description:
      "Comprehensive Microsoft Word services including template creation, document automation, VBA development, accessibility compliance and training across Australia.",
    images: ["/logo.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.wordexperts.com.au/services",
  },
};

export default function ServicesLayout({ children }) {
  return <section>{children}</section>;
}
