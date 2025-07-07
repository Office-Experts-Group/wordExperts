import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Consultants Wollongong",
  description:
  "Microsoft Word consultants in Wollongong offering expert document development, system integration and support. Trusted solutions for over 25 years.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Consultants Wollongong",
    description:
      "Microsoft Word consultants in Wollongong offering expert document development, system integration and support. Trusted solutions for over 25 years.",
    url: "https://www.wordexperts.com.au/word-consultants-wollongong",
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
    "Microsoft Word consultants Wollongong",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Experts Wollongong | Microsoft Office Solutions",
    description:
      "Microsoft Word consultants in Wollongong offering expert document development, system integration and support. Trusted solutions for over 25 years.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-consultants-wollongong",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
