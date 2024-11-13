export const metadata = {
  title:
    "Microsoft Word Document Quick Parts Services | Quick Parts Design Consulting Services | Word Experts",
  description:
    "Expert Microsoft Word Quick Parts implementation. Enhance document creation with pre-built content and automated building blocks. Improve efficiency and consistency.",
  keywords: [
    // Core features
    "word quick parts",
    "building blocks gallery",
    "document automation",
    "content management",
    "template components",

    // Technical aspects
    "quick parts development",
    "building blocks creation",
    "content controls",
    "autotext elements",
    "document fragments",

    // Business benefits
    "document efficiency",
    "content consistency",
    "productivity improvement",
    "time saving solutions",
    "standardized content",

    // Implementation
    "quick parts design",
    "building block management",
    "content organization",
    "template automation",
    "document assembly",

    // Applications
    "corporate documents",
    "business templates",
    "document sections",
    "reusable content",
    "standard elements",
  ],
  openGraph: {
    title:
      "Microsoft Word Document Quick Parts Services | Quick Parts Design Consulting",
    description:
      "Expert Microsoft Word Quick Parts implementation. Enhance document creation with pre-built content and automated building blocks.",
    url: "https://www.wordexperts.com.au/quick-parts/",
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
    title: "Microsoft Word Quick Parts Services",
    description:
      "Expert Microsoft Word Quick Parts implementation and building blocks development.",
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
  canonical: "https://www.wordexperts.com.au/quick-parts/",
};

export default function Layout({ children }) {
  return <>{children}</>;
}
