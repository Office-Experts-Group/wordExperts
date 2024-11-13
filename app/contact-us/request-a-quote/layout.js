export const metadata = {
  title: "Request a Quote | Get a Quote | Office Experts Group",
  description:
    "Use the form below to provide us with all relevant information to quickly and efficiently process your enquiry. For quotes and estimates include associated requirements, issues, budget and time constraints.",
  keywords: [
    // Core quote services
    "microsoft word quote services",
    "word template quote request",
    "document design quotation",
    "word consulting estimate",
    "template development quote",

    // Service specific
    "word document automation pricing",
    "microsoft template cost estimate",
    "word accessibility quote",
    "document conversion pricing",
    "custom toolbar development cost",

    // Location specific
    "word consulting quote sydney",
    "template design quote melbourne",
    "document services estimate brisbane",
    "word experts quote australia",

    // Request types
    "instant word quote",
    "free word consultation",
    "document design estimate",
    "template development pricing",
    "word automation cost",

    // Industry specific
    "corporate word solutions quote",
    "government document pricing",
    "business template estimate",
    "enterprise word solutions cost",
    "professional document quote",
  ],
  openGraph: {
    title: "Request a Quote | Get a Quote | Office Experts Group",
    description:
      "Use the form below to provide us with all relevant information to quickly and efficiently process your enquiry.",
    url: "https://www.wordexperts.com.au/contact-us/request-a-quote/",
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
    title: "Request a Quote | Get a Quote | Office Experts Group",
    description:
      "Use the form below to provide us with all relevant information to quickly and efficiently process your enquiry.",
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
  canonical: "https://www.wordexperts.com.au/contact-us/request-a-quote/",
};

export default function Layout({ children }) {
  return <>{children}</>;
}
