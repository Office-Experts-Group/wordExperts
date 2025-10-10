"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/footerServices.module.scss";

const FooterServicesSection = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);

    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.dropdownSection}`)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (section, e) => {
    if (isTouchDevice) {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === section ? null : section);
    }
  };

  return (
    <div className={styles.servicesSection}>
      {/* Main Business Links - Always Visible */}
      <div className={styles.mainLinks}>
        <h3>Our Business</h3>
        <Link href="/about-us">Our Company</Link>
        <Link href="/meet-the-team">Our Team</Link>
        <Link href="/client-testimonials">Testimonials</Link>
        <Link href="/blog">Blog</Link>
      </div>

      {/* Power Platform Services Dropdown */}
      <div
        className={`${styles.dropdownSection} ${
          activeDropdown === "platform" ? styles.active : ""
        }`}
        onClick={(e) => handleDropdownClick("platform", e)}
      >
        <h3 className={styles.dropdownHeader}>
          Microsoft Power Platform Services
        </h3>
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownBackground}></div>
          <div className={styles.dropdownContent}>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform"
            >
              Power Platform Services
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps"
            >
              Microsoft Power Apps
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi"
            >
              Microsoft Power BI
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate"
            >
              Microsoft Power Automate
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages"
            >
              Microsoft Power Pages
            </Link>
          </div>
        </div>
      </div>

      {/* Office Services Dropdown */}
      <div
        className={`${styles.dropdownSection} ${
          activeDropdown === "office" ? styles.active : ""
        }`}
        onClick={(e) => handleDropdownClick("office", e)}
      >
        <h3 className={styles.dropdownHeader}>Microsoft Office Services</h3>
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownBackground}></div>
          <div className={styles.dropdownContent}>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.officeexperts.com.au"
            >
              Microsoft Office
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.excelexperts.com.au"
            >
              Microsoft Excel
            </Link>
            <Link href="https://www.accessexperts.com.au">
              Microsoft Access
            </Link>
            <Link href="/">Microsoft Word</Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.officeexperts.com.au/services/microsoft-powerpoint"
            >
              Microsoft PowerPoint
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.officeexperts.com.au/services/microsoft-office-365"
            >
              Microsoft Office 365
            </Link>
          </div>
        </div>
      </div>

      {/* Other Microsoft Services Dropdown */}
      <div
        className={`${styles.dropdownSection} ${
          activeDropdown === "other" ? styles.active : ""
        }`}
        onClick={(e) => handleDropdownClick("other", e)}
      >
        <h3 className={styles.dropdownHeader}>Other Microsoft Services</h3>
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownBackground}></div>
          <div className={styles.dropdownContent}>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure"
            >
              Microsoft Azure
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration"
            >
              Microsoft SQL Server
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.officeexperts.com.au/services/by-business-solution/online-solutions"
            >
              Microsoft SharePoint
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.officeexperts.com.au/services/microsoft-dot-net"
            >
              Microsoft .NET
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions"
            >
              Microsoft Outlook
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              href="https://www.officeexperts.com.au/services/microsoft-publisher"
            >
              Microsoft Publisher
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterServicesSection;
