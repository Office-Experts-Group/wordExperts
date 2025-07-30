import React from "react";

export const metadata = {
  // Basic metadata
  title: "How to Convert a Canva Design into a Microsoft Word Template",
  description:
    "Convert Canva designs into functional Microsoft Word templates. Create editable Word documents while maintaining your brand elements from Canva designs.",

  // OpenGraph
  openGraph: {
    title: "How to Convert a Canva Design into a Microsoft Word Template",
    description:
      "Convert Canva designs into functional Microsoft Word templates. Create editable Word documents while maintaining your brand elements from Canva designs.",
    url: "https://www.wordexperts.com.au/blog/convert-canva-to-word",
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
  keywords: ["Canva to Word template"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "How to Convert a Canva Design into a Microsoft Word Template",
    description:
      "Convert Canva designs into functional Microsoft Word templates. Create editable Word documents while maintaining your brand elements from Canva designs.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/convert-canva-to-word",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
