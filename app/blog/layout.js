import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word Experts Australia Blog",
  description:
    "Explore expert tutorials, tips, and best practices for Microsoft Word. Our experts share their knowledge to help you create professional documents and improve your productivity.",

  // OpenGraph
  openGraph: {
    title: "Word Experts Australia Blog",
    description:
      "Explore expert tutorials, tips, and best practices for Microsoft Word. Our experts share their knowledge to help you create professional documents and improve your productivity.",
    url: "https://www.wordexperts.com.au/blog",
    siteName: "Word Experts Australia",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Word Experts Australia Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    "Word experts blog",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Word Experts Australia Blog",
    description:
      "Explore expert tutorials, tips, and best practices for Microsoft Word. Our experts share their knowledge to help you create professional documents and improve your productivity.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/blog",
  },

  // Favicon/icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.wordexperts.com.au"
      : "http://localhost:3000"
  ),
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}