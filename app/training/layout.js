export const metadata = {
  title: "Microsoft Word Training | Microsoft Word Help | Word Experts",
  description:
    "Professional Microsoft Word training and support services. Expert help with templates, documents, and Word automation. Available remotely or onsite across Australia.",
  keywords: [
    // Core training
    "microsoft word training",
    "word template training",
    "word document training",
    "microsoft word help",
    "word expert support",

    // Training types
    "onsite word training",
    "remote word training",
    "group word training",
    "individual word coaching",
    "corporate word training",

    // Specific skills
    "word template creation training",
    "word automation training",
    "document design training",
    "word accessibility training",
    "word macro training",

    // Support services
    "word template support",
    "document troubleshooting",
    "word expert help",
    "microsoft word consulting",
    "word document assistance",

    // Location specific
    "word training australia",
    "microsoft word courses sydney",
    "word expert training melbourne",
    "word document training brisbane",
    "word consulting perth",
  ],
  openGraph: {
    title: "Microsoft Word Training | Microsoft Word Help | Word Experts",
    description:
      "Professional Microsoft Word training and support services. Expert help with templates, documents, and Word automation.",
    url: "https://www.wordexperts.com.au/training/",
    siteName: "Word Experts",
    images: [
      {
        url: "https://www.wordexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Word Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Word Training | Microsoft Word Help | Word Experts",
    description:
      "Professional Microsoft Word training and support services. Expert help with templates, documents, and Word automation.",
    images: [
      "https://www.wordexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  canonical: "https://www.wordexperts.com.au/training/",
  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
