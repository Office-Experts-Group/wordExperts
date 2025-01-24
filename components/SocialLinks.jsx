import Link from "next/link";
import React from "react";
// import Image from "next/image";

import styles from "../styles/socialLinks.module.css";

// import x from "../public/icons/x.png";

const SocialLinks = ({ inNav }) => {
  return (
    <div className={styles.socials}>
      <Link
        href="https://www.facebook.com/MSOfficeExperts"
        target="_blank"
        rel="noreferrer"
        aria-label="visit our facebook page"
        className={inNav ? styles.socialLinkNav : ""}
      >
        <svg
          stroke="#f8f8f8"
          fill="#f8f8f8"
          strokeWidth="0"
          viewBox="0 0 320 512"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Facebook</title>
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
      </Link>

      <Link
        href="https://www.instagram.com/officeexpertsgroup"
        target="_blank"
        rel="noreferrer"
        aria-label="visit our instagram page"
        className={inNav ? styles.socialLinkNav : ""}
      >
        <svg
          stroke="#f8f8f8"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Instagram</title>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
        </svg>
      </Link>

      <Link
        href="https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw"
        target="_blank"
        rel="noreferrer"
        aria-label="visit our youtube channel"
        className={inNav ? styles.socialLinkNav : ""}
      >
        <svg
          stroke="#f8f8f8"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>YouTube</title>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      </Link>

      <Link
        href="https://www.linkedin.com/company/office-experts-group"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit our LinkedIn page"
        className={inNav ? styles.socialLinkNav : ""}
      >
        <svg
          stroke="#f8f8f8"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>LinkedIn</title>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </Link>
    </div>
  );
};

export default SocialLinks;
