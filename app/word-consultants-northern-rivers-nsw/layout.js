import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Consultants Northern Rivers, NSW",
  description:
    "Word Experts is headquartered in Northern Rivers NSW, providing Australia-wide Microsoft Word consulting. Over 25 years of expertise in document development, system integration and support.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Consultants Northern Rivers, NSW",
    description:
      "Word Experts is headquartered in Northern Rivers NSW, providing Australia-wide Microsoft Word consulting. Over 25 years of expertise in document development, system integration and support.",
    url: "https://www.wordexperts.com.au/word-consultants-northern-rivers-nsw",
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
    // Location-specific
    "Microsoft Word consultants Northern Rivers, NSW",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Experts Northern Rivers, NSW | Microsoft Office Solutions",
    description:
      "Word Experts is headquartered in Northern Rivers NSW, providing Australia-wide Microsoft Word consulting. Over 25 years of expertise in document development, system integration and support.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-consultants-northern-rivers-nsw",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
