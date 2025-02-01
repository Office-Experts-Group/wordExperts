import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word Experts | Professional Microsoft Word Consultants & Trainers",
  description:
    "Expert Microsoft Word consulting, training, and document automation solutions from certified Microsoft specialists. Custom template development and corporate training in Australia.",

  // OpenGraph
  openGraph: {
    title: "Word Experts | Microsoft Word Consulting & Training",
    description:
      "Professional Microsoft Word consulting, template development, and corporate training solutions from certified Australian specialists.",
    url: "https://www.wordexperts.com.au/author/ppexperts",
  },

  // Additional metadata
  keywords: ["Office Experts Group Author"],

  // Additional tags
  metadataBase: new URL("https://www.wordexperts.com.au"),
  alternates: {
    canonical: "/author/ppexperts",
    languages: {
      "en-AU": "/author/ppexperts",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
