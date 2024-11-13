export const metadata = {
  title: "Contact | Microsoft Excel | Microsoft Access | Power BI | MS Office",
  description:
    "Contact Word Experts for professional Microsoft Word solutions. Expert consultants across Australia available onsite or by remote access. Call 1300 12 20 38.",
  keywords: [
    // Contact methods
    "contact word experts",
    "word consultants contact",
    "microsoft word support",
    "document experts contact",
    "word template help",

    // Service availability
    "remote word consulting",
    "onsite word services",
    "australia wide support",
    "online word help",
    "virtual consulting",

    // Expertise areas
    "word template assistance",
    "document design contact",
    "corporate template support",
    "word automation help",
    "document solutions",

    // Location specific
    "australian word experts",
    "sydney word consultants",
    "melbourne word support",
    "brisbane word services",
    "perth word consulting",

    // Contact purposes
    "word consultation booking",
    "template quote request",
    "document support inquiry",
    "word expert consultation",
    "professional word advice",
  ],
  openGraph: {
    title:
      "Contact | Microsoft Excel | Microsoft Access | Power BI | MS Office",
    description:
      "Contact Word Experts for professional Microsoft Word solutions. Expert consultants across Australia.",
    url: "https://www.wordexperts.com.au/contact-us/",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Word Experts | Professional Microsoft Word Solutions",
    description:
      "Contact Word Experts for professional Microsoft Word solutions. Expert consultants across Australia.",
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
  canonical: "https://www.wordexperts.com.au/contact-us/",
};

export default function Layout({ children }) {
  return <>{children}</>;
}
