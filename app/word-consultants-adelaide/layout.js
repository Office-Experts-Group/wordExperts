import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Consultants Adelaide",
  description:
    "Australia-wide Microsoft Word consulting team with experienced consultants based in Adelaide. Over 25 years of expertise with remote or onsite support.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Consultants Adelaide",
    description:
      "Australia-wide Microsoft Word consulting team with experienced consultants based in Adelaide. Over 25 years of expertise with remote or onsite support.",
    url: "https://www.wordexperts.com.au/word-consultants-adelaide",
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
    "Microsoft Word consultants Adelaide",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Word Experts Adelaide | Microsoft Office Solutions",
    description:
      "Australia-wide Microsoft Word consulting team with experienced consultants based in Adelaide. Over 25 years of expertise with remote or onsite support.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-consultants-adelaide",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
