import React from "react";

export const metadata = {
  title: "About Us | Word Experts",
  description:
    "Word Experts are Australia's leading Microsoft Word specialists, creating custom templates, toolbars, ribbons, and document automation solutions for businesses nationwide.",

  openGraph: {
    title: "About Us | Word Experts",
    description:
      "Word Experts are Australia's leading Microsoft Word specialists, creating custom templates, toolbars, ribbons, and document automation solutions for businesses nationwide.",
    url: "https://www.wordexperts.com.au/about-us",
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
    type: "article",
  },

  keywords: ["microsoft word consultants australia"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "About Us | Word Experts",
    description:
      "Word Experts are Australia's leading Microsoft Word specialists, creating custom templates, toolbars, ribbons, and document automation solutions for businesses nationwide.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
