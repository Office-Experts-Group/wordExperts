// Base URLs for different sites (change these for production)
const WORD_EXPERTS_URL = "/";
const OFFICE_EXPERTS_URL = "https://office-experts.vercel.app";
const EXCEL_EXPERTS_URL = "https://excel-experts.vercel.app";
const POWER_PLATFORM_EXPERTS_URL = "https://power-platform-experts.vercel.app";
const ACCESS_EXPERTS_URL = "https://access-experts.vercel.app";

export const oldNavigationData = {
  home: {
    label: "Home",
    href: "/",
    items: [
      {
        label: "Office Experts",
        href: OFFICE_EXPERTS_URL,
      },
      {
        label: "Excel Experts",
        href: EXCEL_EXPERTS_URL,
      },
      {
        label: "Power Platform Experts",
        href: POWER_PLATFORM_EXPERTS_URL,
      },
      {
        label: "Access Experts",
        href: ACCESS_EXPERTS_URL,
      },
      {
        label: "Word Experts",
        href: WORD_EXPERTS_URL,
      },
    ],
  },
  services: {
    label: "Services",
    items: [
      {
        label: "Word Services",
        href: "/services",
        items: [
          // {
          //   label: "Word Experts Home",
          //   href: WORD_EXPERTS_URL,
          // },
          {
            label: "Template Creation and Standardisation",
            href: "/word-document-template-creation",
          },
          {
            label: "Automation with Macros and Custom Functions",
            href: "/custom-toolbars-and-ribbons",
          },
          {
            label: "Training and User Support",
            href: "/training",
          },
        ],
      },
      {
        label: "Office Solutions",
        href: `${OFFICE_EXPERTS_URL}/services`,
        items: [
          {
            label: "Office Experts Home",
            href: OFFICE_EXPERTS_URL,
          },
          {
            label: "SharePoint",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/online-solutions`,
          },
          {
            label: "Azure",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/cloud-based-solutions-with-azure`,
          },
          {
            label: "SQL Server",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/office-and-sql-server-integration`,
          },
          {
            label: ".NET",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-dot-net`,
          },
          {
            label: "Office 365",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365`,
          },
          {
            label: "Outlook",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/custom-office-solutions`,
          },
          {
            label: "VBScript",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-vbscript`,
          },
          {
            label: "Publisher",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-publisher`,
          },
        ],
      },
      {
        label: "Excel Services",
        href: EXCEL_EXPERTS_URL,
        items: [
          {
            label: "Excel Experts Home",
            href: EXCEL_EXPERTS_URL,
          },
          {
            label: "Data analysis and reporting",
            href: `${EXCEL_EXPERTS_URL}/data-manipulation`,
          },
          {
            label: "Automation and VBA programming",
            href: `${EXCEL_EXPERTS_URL}/vba-macro-development`,
          },
          {
            label: "Dashboard and Visualisation Design",
            href: `${EXCEL_EXPERTS_URL}/custom-design-and-development`,
          },
          {
            label: "Training and Skill Development",
            href: `${EXCEL_EXPERTS_URL}/excel-support`,
          },
        ],
      },
      {
        label: "Access Services",
        href: ACCESS_EXPERTS_URL,
        items: [
          {
            label: "Access Experts Home",
            href: ACCESS_EXPERTS_URL,
          },
          {
            label: "Cloud-based and Online Database Solutions",
            href: `${ACCESS_EXPERTS_URL}/access-online`,
          },
          {
            label: "Integration with Other Systems",
            href: `${ACCESS_EXPERTS_URL}/3rd-party-product-integration`,
          },
        ],
      },
      {
        label: "Power Platform",
        href: POWER_PLATFORM_EXPERTS_URL,
        items: [
          {
            label: "Power Platform Home",
            href: POWER_PLATFORM_EXPERTS_URL,
          },
          {
            label: "App Development with Power Apps",
            href: `${POWER_PLATFORM_EXPERTS_URL}/services/microsoft-power-platform/microsoft-power-apps`,
          },
          {
            label: "Workflow Automation with Power Automate",
            href: `${POWER_PLATFORM_EXPERTS_URL}/services/microsoft-power-platform/microsoft-power-automate`,
          },
          {
            label: "Data Analytics with Power BI",
            href: `${POWER_PLATFORM_EXPERTS_URL}/services/microsoft-power-platform/microsoft-power-bi`,
          },
          {
            label: "Simple, Scalable Websites with Power Pages",
            href: `${POWER_PLATFORM_EXPERTS_URL}/services/microsoft-power-platform/microsoft-power-pages`,
          },
        ],
      },
      {
        label: "Business Solutions",
        href: `${OFFICE_EXPERTS_URL}/services/by-business-solution`,
        items: [
          {
            label: "VBA Macro Development",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/vba-macro-development`,
          },
          {
            label: "Custom Office Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/custom-office-solutions`,
          },
          {
            label: "Database Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/database-development-and-solutions`,
          },
          {
            label: "Online Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/online-solutions`,
          },
          {
            label: "Microsoft Cloud Based Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/cloud-based-solutions-with-azure`,
          },
          {
            label: "Dashboards",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/dashboards`,
          },
          {
            label: "3rd Party App or Office Integration",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/3rd-party-application-or-office-integration`,
          },
          {
            label: "Office and SQL Server",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/office-and-sql-server-integration`,
          },
          {
            label: "Upgrades and Migration",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office/upgrades-and-migration`,
          },
          {
            label: "Add-in Creation",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/add-in-creation`,
          },
        ],
      },
    ],
  },
  aboutUs: {
    label: "About Us",
    items: [
      {
        label: "About Us",
        href: "/about-us",
      },
      {
        label: "Meet Our Team",
        href: "/meet-the-team",
      },
    ],
  },
  staticLinks: [
    {
      label: "Testimonials",
      href: "/client-testimonials",
    },
  ],
};
