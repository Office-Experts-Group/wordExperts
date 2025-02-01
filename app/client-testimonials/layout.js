export const metadata = {
  title: "Client Testimonials | Word Experts",
  description:
    "Read what our clients say about Word Experts' professional Microsoft Word services. Client testimonials from businesses across Australia.",
  keywords: [
    // Reviews and feedback
    "word experts reviews",
  ],
  openGraph: {
    title: "Client Testimonials | Word Experts",
    description:
      "Read what our clients say about Word Experts' professional Microsoft Word services. Client testimonials from businesses across Australia.",
    url: "https://www.wordexperts.com.au/client-testimonials/",
  },

  metadataBase: new URL("https://www.wordexperts.com.au"),
  alternates: {
    canonical: "/client-testimonials",
    languages: {
      "en-AU": "/client-testimonials",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
