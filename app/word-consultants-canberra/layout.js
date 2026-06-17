import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Consultants Canberra, ACT",
  description:
    "Australia-wide Microsoft Word consulting team with experienced consultants based in Canberra. Over 25 years of expertise delivering document development, system integration and custom business solutions.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Consultants Canberra, ACT",
    description:
      "Australia-wide Microsoft Word consulting team with experienced consultants based in Canberra. Over 25 years of expertise delivering document development, system integration and custom business solutions.",
    url: "https://www.wordexperts.com.au/word-consultants-canberra",
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
    "Microsoft Word consultants Canberra",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Word Experts Canberra, ACT | Microsoft Office Solutions",
    description:
      "Australia-wide Microsoft Word consulting team with experienced consultants based in Canberra. Over 25 years of expertise delivering document development, system integration and custom business solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-consultants-canberra",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
