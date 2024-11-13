export const metadata = {
  title:
    "Testimonials - Word Experts - Microsoft Word Design, Development and Consulting",
  description:
    "Read what our clients say about Word Experts' professional Microsoft Word services. Client testimonials from businesses across Australia.",
  keywords: [
    // Reviews and feedback
    "word experts reviews",
    "microsoft word testimonials",
    "client feedback",
    "word service reviews",
    "customer testimonials",

    // Service experience
    "word expert experience",
    "document solution reviews",
    "template service feedback",
    "consulting testimonials",
    "client satisfaction",

    // Client types
    "corporate testimonials",
    "business client reviews",
    "government feedback",
    "enterprise testimonials",
    "client success stories",

    // Service areas
    "template design reviews",
    "document automation feedback",
    "word consulting reviews",
    "solution implementation",
    "service quality",

    // Geographic
    "australian word experts",
    "sydney word services",
    "melbourne document solutions",
    "brisbane word consulting",
    "perth template services",
  ],
  openGraph: {
    title:
      "Testimonials - Word Experts - Microsoft Word Design, Development and Consulting",
    description:
      "Read what our clients say about Word Experts' professional Microsoft Word services. Client testimonials from businesses across Australia.",
    url: "https://www.wordexperts.com.au/client-testimonials/",
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
    title: "Client Testimonials - Word Experts",
    description:
      "Read what our clients say about Word Experts' professional Microsoft Word services.",
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
  canonical: "https://www.wordexperts.com.au/client-testimonials/",
};

export default function Layout({ children }) {
  return <>{children}</>;
}
