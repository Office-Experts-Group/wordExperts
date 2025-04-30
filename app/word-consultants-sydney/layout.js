import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Consultants Sydney",
  description:
  "Microsoft Word consultants in Sydney offering expert document development, system integration and support. Trusted solutions for over 25 years.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Consultants Sydney",
    description:
      "Microsoft Word consultants in Sydney offering expert document development, system integration and support. Trusted solutions for over 25 years.",
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
      "Microsoft Word consultants in Sydney offering expert document development, system integration and support. Trusted solutions for over 25 years.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-consultants-sydney",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
