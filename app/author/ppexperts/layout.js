import React from "react";
import PropTypes from "prop-types";

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
    url: "https://www.wordexperts.com.au",
    siteName: "Word Experts",
    images: [
      {
        url: "https://www.wordexperts.com.au/images/word-experts-logo.png", // Update with actual logo path
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
    // Core services
    "Microsoft Word consulting services",
    "Word document automation",
    "Microsoft Word template development",
    "Word corporate training Australia",

    // Specific solutions
    "Word document standardization",
    "Custom Word template design",
    "Legal document automation Word",
    "Microsoft Word forms development",

    // Industry focus
    "Legal Word document solutions",
    "Corporate Word document templates",
    "Government Word documentation",
    "Financial Word reporting templates",

    // Technical expertise
    "Word VBA automation",
    "Word macro development",
    "Microsoft Word styles guide",
    "Word document migration",

    // Training specific
    "Microsoft Word corporate training",
    "Word template training",
    "Advanced Word skills courses",
    "Word efficiency workshops",

    // Implementation
    "Word document management",
    "Word template deployment",
    "Document standardization process",
    "Word automation implementation",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU", // Update with actual Twitter handle
    title: "Word Experts | Microsoft Word Consulting & Training",
    description:
      "Professional Microsoft Word consulting, template development, and corporate training solutions from certified Australian specialists.",
    images: [
      "https://www.wordexperts.com.au/images/word-experts-logo.png", // Update with actual logo path
    ],
  },

  // Additional tags
  canonical: "https://www.wordexperts.com.au",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
