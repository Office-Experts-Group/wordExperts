// app/word-to-pdf-conversion/layout.js
import React from "react";

export const metadata = {
  title: "Word to PDF Conversion & Fillable PDF Forms | Word Experts",
  description:
    "Professional Word to PDF conversion for Australian businesses. Bulk document conversion and fillable, editable PDF forms built by the experts. Fixed-price quotes.",

  openGraph: {
    title: "Word to PDF Conversion & Fillable PDF Forms | Word Experts",
    description:
      "Professional Word to PDF conversion for Australian businesses. Bulk document conversion and fillable, editable PDF forms built by the experts. Fixed-price quotes.",
    url: "https://www.wordexperts.com.au/word-to-pdf-conversion",
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Word Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    "word to pdf conversion",
    "convert word to pdf",
    "fillable pdf forms",
    "editable pdf forms from word",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word to PDF Conversion & Fillable PDF Forms | Word Experts",
    description:
      "Professional Word to PDF conversion for Australian businesses. Bulk document conversion and fillable, editable PDF forms built by the experts. Fixed-price quotes.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-to-pdf-conversion",
  },
};

export default function WordToPdfConversionLayout({ children }) {
  return <>{children}</>;
}
