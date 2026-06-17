import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Consultants Richmond",
  description:
    "Australia-wide Microsoft Word consulting team with consultants in Richmond. Over 25 years of experience in document development and system integrations with remote or onsite support.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Consultants Richmond",
    description:
      "Australia-wide Microsoft Word consulting team with consultants in Richmond. Over 25 years of experience in document development and system integrations with remote or onsite support.",
    url: "https://www.wordexperts.com.au/word-consultants-richmond",
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
    "Microsoft Word consultants Richmond",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Word Experts Richmond | Microsoft Office Solutions",
    description:
      "Australia-wide Microsoft Word consulting team with consultants in Richmond. Over 25 years of experience in document development and system integrations with remote or onsite support.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-consultants-richmond",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
