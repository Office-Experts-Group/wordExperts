import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Consultants Sydney",
  description:
    "Leading Microsoft Word consultants in Sydney specialising in expert development, integration and support. Word Experts have provided custom solutions for over 25yrs",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Consultants Sydney",
    description:
      "Leading Microsoft Word consultants in Sydney specialising in expert development, integration and support. Word Experts have provided custom solutions for over 25yrs",
    url: "https://www.wordexperts.com.au/word-consultants-sydney",
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
    "Microsoft Word consultants Sydney",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Experts Sydney | Microsoft Office Solutions",
    description:
      "Leading Microsoft Word consultants in Sydney specialising in expert development, integration and support. Word Experts have provided custom solutions for over 25yrs",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-consultants-sydney",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
