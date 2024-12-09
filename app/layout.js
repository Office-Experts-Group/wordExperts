import React from "react";
import PropTypes from "prop-types";

import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

import HeadTop from "../components/HeadTop";
import Header from "./(components)/Header";
import CookieConsent from "../components/CookieConsent";
import Footer from "./(components)/Footer";
import Copyright from "../components/Copyright";
import ScrollBtn from "../components/ScrollBtn";

import "./global.css";

const aptos = localFont({
  src: [
    {
      path: "../public/fonts/aptos/Aptos.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-Light.ttf",
      weight: "300",
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
    {
      path: "../public/fonts/aptos/Aptos-Black.ttf",
      weight: "900",
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
    // Core services
    "microsoft word design australia",
    "word template design services",
    "microsoft word consulting",
    "word document automation",
    "word template development",

    // Location specific
    "word consultants sydney",
    "microsoft word experts melbourne",
    "word template designers brisbane",
    "word document specialists perth",

    // Service specific
    "corporate word templates",
    "word document automation",
    "microsoft word form creation",
    "word accessibility solutions",
    "word template conversion services",

    // Task specific
    "word document formatting",
    "custom word toolbar development",
    "word macro programming",
    "word template migration",
    "document standardization services",

    // Industry specific
    "government word templates",
    "corporate word solutions",
    "business document automation",
    "professional word consulting",
    "enterprise document solutions",
  ],
  openGraph: {
    title: "Microsoft Word Designer & Experts | Word Consulting",
    description:
      "Word Experts is the Leading Microsoft Word Design Service in Australia. Expert Word Development & Consulting. Call 1300 122 038",
    url: "https://www.wordexperts.com.au/",
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
    title: "Microsoft Word Designer & Experts | Word Consulting",
    description:
      "Word Experts is the Leading Microsoft Word Design Service in Australia. Expert Word Development & Consulting. Call 1300 122 038",
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
  canonical: "https://www.wordexperts.com.au/",
  // Icons
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
