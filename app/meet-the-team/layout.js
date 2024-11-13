export const metadata = {
  title:
    "Meet The Team - Word Experts - Microsoft Word Design, Development and Consulting",
  description:
    "Meet our expert team of Microsoft Word consultants, developers, and designers. Professional Word template and document specialists across Australia.",
  keywords: [
    // Team expertise
    "word expert team",
    "microsoft consultants",
    "document specialists",
    "template developers",
    "word professionals",

    // Professional roles
    "word designers",
    "template specialists",
    "document consultants",
    "word developers",
    "solution architects",

    // Expertise areas
    "template development experts",
    "document automation specialists",
    "word customization pros",
    "corporate template experts",
    "document design specialists",

    // Professional skills
    "microsoft word expertise",
    "document design skills",
    "template development",
    "word automation",
    "consulting experience",

    // Location specific
    "australian word experts",
    "sydney consultants",
    "melbourne specialists",
    "brisbane developers",
    "perth word professionals",
  ],
  openGraph: {
    title:
      "Meet The Team - Word Experts - Microsoft Word Design, Development and Consulting",
    description:
      "Meet our expert team of Microsoft Word consultants, developers, and designers. Professional Word specialists across Australia.",
    url: "https://www.wordexperts.com.au/meet-the-team/",
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
    title: "Meet The Word Experts Team",
    description:
      "Meet our expert team of Microsoft Word consultants, developers, and designers.",
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
  canonical: "https://www.wordexperts.com.au/meet-the-team/",
};

export default function Layout({ children }) {
  return <>{children}</>;
}
