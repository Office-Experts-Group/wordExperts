import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Consultants Melbourne",
  description:
    "Australia-wide Microsoft Word consultants based in Melbourne. 25+ years expertise in document solutions and workflow optimisation. Get a free assessment today.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Consultants Melbourne",
    description:
      "Australia-wide Microsoft Word consultants based in Melbourne. 25+ years expertise in document solutions and workflow optimisation. Get a free assessment today.",
    url: "https://www.wordexperts.com.au/word-consultants-melbourne",
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
    "Microsoft Word consultants Melbourne",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Word Experts Melbourne | Microsoft Office Solutions",
    description:
      "Australia-wide Microsoft Word consultants based in Melbourne. 25+ years expertise in document solutions and workflow optimisation. Get a free assessment today.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-consultants-melbourne",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
