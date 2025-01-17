import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";

import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

import HeadTop from "../components/HeadTop";
import Header from "./(components)/Header";

const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false, // Client-side only
});

const Footer = dynamic(() => import("./(components)/Footer"), {
  ssr: true, // We want this server rendered but loaded dynamically
});

const Copyright = dynamic(() => import("../components/Copyright"));
const ScrollBtn = dynamic(() => import("../components/ScrollBtn"), {
  ssr: false, // Client-side only as it depends on scroll
});

import "./global.css";

const aptos = localFont({
  src: [
    {
      path: "../public/fonts/aptos/Aptos.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-aptos",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-garamond",
});

export const metadata = {
  title: "Microsoft Word Designer & Experts | Word Consulting",
  description:
    "Word Experts is the Leading Microsoft Word Design Service in Australia. Expert Word Development & Consulting. Call 1300 122 038",
  keywords: [
    // already ranking
    "microsoft word consulting",
    "microsoft word designer",
    "microsoft word development",
    "microsoft word expert",
    "word consulting",
    "word design",
    "word designer",
    "word designs",
    "word expert",
    "word specialist",
  ],
  openGraph: {
    title: "Microsoft Word Designer & Experts | Word Consulting",
    description:
      "Word Experts is the Leading Microsoft Word Design Service in Australia. Expert Word Development & Consulting. Call 1300 122 038",
    url: "https://www.wordexperts.com.au/",
    siteName: "Word Experts",
    images: [
      {
        url: "https://www.wordexperts.com.au/logo.webp",
        width: 1200,
        height: 620,
        alt: "Word Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Word Designer & Experts | Word Consulting",
    description:
      "Word Experts is the Leading Microsoft Word Design Service in Australia. Expert Word Development & Consulting. Call 1300 122 038",
    images: ["https://www.wordexperts.com.au/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  metadataBase: new URL("https://www.wordexperts.com.au"),
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": "/",
    },
  }, // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body className={`${aptos.variable} ${garamond.variable}`}>
        <HeadTop />
        <Header />
        {children}
        <CookieConsent />
        <Footer />
        <Copyright />
        <ScrollBtn />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
