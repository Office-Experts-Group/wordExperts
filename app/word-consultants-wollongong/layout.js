import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Consultants Wollongong",
  description:
    "Local consultants supporting Wollongong businesses within an Australia-wide team. Over 25 years of experience in document automation, custom templates, ribbon development and system integration.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Consultants Wollongong",
    description:
      "Local consultants supporting Wollongong businesses within an Australia-wide team. Over 25 years of experience in document automation, custom templates, ribbon development and system integration.",
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
    site: "@WordExpertsAU",
    title: "Word Experts Wollongong | Microsoft Office Solutions",
    description:
      "Local consultants supporting Wollongong businesses within an Australia-wide team. Over 25 years of experience in document automation, custom templates, ribbon development and system integration.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-consultants-wollongong",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
