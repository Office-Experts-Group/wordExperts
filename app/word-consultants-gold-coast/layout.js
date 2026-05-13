import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Consultants Gold Coast",
  description:
    "Australia-wide Microsoft Word consulting team with experienced consultants based on the Gold Coast. Over 25 years of expertise delivering document development, automation and remote or onsite support.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Consultants Gold Coast",
    description:
      "Australia-wide Microsoft Word consulting team with experienced consultants based on the Gold Coast. Over 25 years of expertise delivering document development, automation and remote or onsite support.",
    url: "https://www.wordexperts.com.au/word-consultants-gold-coast",
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
    "Microsoft Word consultants Gold Coast",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Experts Gold Coast | Microsoft Office Solutions",
    description:
      "Australia-wide Microsoft Word consulting team with experienced consultants based on the Gold Coast. Over 25 years of expertise delivering document development, automation and remote or onsite support.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-consultants-gold-coast",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
