// Base URLs for different sites (change these for production)
const WORD_EXPERTS_URL = "/";
const OFFICE_EXPERTS_URL = "https://www.officeexperts.com.au";
const EXCEL_EXPERTS_URL = "https://www.excelexperts.com.au";
const POWER_PLATFORM_EXPERTS_URL = "https://www.powerplatformexperts.com.au";
const ACCESS_EXPERTS_URL = "https://www.accessexperts.com.au";
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
        href: "/",
      },
    ],
  },
  services: {
    label: "Services",
    items: [
      {
        label: "Microsoft Word",
        href: "/",
        items: [
          {
            label: "Corporate Global Template",
            href: "/corporate-global-template-solution",
          },
          {
            label: "Corporate Identity",
            href: "/corporate-identity",
          },
          {
            label: "Word Document Template Creation",
            href: "/word-document-template-creation",
          },
          {
            label: "Government Departments",
            href: "/government-departments",
          },
          {
            label: "Companies & Organisations",
            href: "/companies-and-organisations",
          },
          {
            label: "Remove Repitition, Increase Productivity",
            href: "/remove-repetition-and-increase-productivity",
          },
          {
            label: "Quick Parts",
            href: "/quick-parts",
          },
          {
            label: "Popup Forms",
            href: "/popup-forms",
          },
          {
            label: "Fill-In Forms",
            href: "fill-in-forms",
          },
          {
            label: "Upgrading Word",
            href: "/upgrades-and-migration",
          },
          {
            label: "Online Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/online-solutions`,
          },
          {
            label: "Accessibility",
            href: "/accessibility",
          },
          {
            label: "Convert Adobe to Word",
            href: "/word-template-conversions",
          },
          {
            label: "Custom Toolbars & Ribbons",
            href: "/custom-toolbars-and-ribbons",
          },
          {
            label: "Training and User Support",
            href: "/training",
          },
          {
            label: "Document Rebranding",
            href: "/document-rebranding-services",
          },
          {
            label: "Brand Templates",
            href: "/brand-templates",
          },
          {
            label: "Google Docs Migration",
            href: "/google-docs-to-word-migration",
          },
          {
            label: "API Integrations",
            href: "/microsoft-word-api-integrations",
          },
        ],
      },
      {
        label: "Microsoft Office",
        href: `${OFFICE_EXPERTS_URL}/services`,
        items: [
          {
            label: "VBA & Macro Development",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/vba-macro-development`,
          },
          {
            label: "Database Development Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/database-development-and-solutions`,
          },
          {
            label: "3rd Party App or Office Integration",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/3rd-party-application-or-office-integration`,
          },
          {
            label: "SQL Server",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/office-and-sql-server-integration`,
          },
          {
            label: "Online Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/online-solutions`,
          },
          {
            label: "Cloud Based Solutions with Azure",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/cloud-based-solutions-with-azure`,
          },
          {
            label: "Upgrades and Migration",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office/upgrades-and-migration`,
          },
          {
            label: "VBScript",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-vbscript`,
          },
        ],
      },
      {
        label: "Microsoft Excel",
        href: EXCEL_EXPERTS_URL,
        items: [
          {
            label: "Custom Design & Development",
            href: `${EXCEL_EXPERTS_URL}/custom-design-and-development`,
          },
          {
            label: "VBA Macro Development",
            href: `${EXCEL_EXPERTS_URL}/vba-macro-development`,
          },
          {
            label: "Formulas",
            href: `${EXCEL_EXPERTS_URL}/excel-formulas-and-custom-formulas`,
          },
          {
            label: "Training and Skill Development",
            href: `${EXCEL_EXPERTS_URL}/excel-support`,
          },
          {
            label: "Data analysis and reporting",
            href: `${EXCEL_EXPERTS_URL}/data-manipulation`,
          },
          {
            label: "Dashboards",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/dashboards`,
          },
          {
            label: "Online Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/online-solutions`,
          },
          {
            label: "Office Integrations",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/3rd-party-application-or-office-integration`,
          },
          {
            label: "Charting & Pivot Tables",
            href: `${EXCEL_EXPERTS_URL}/pivot-tables-charts-and-reporting-solutions`,
          },
          {
            label: "Upgrades & Migration",
            href: `${EXCEL_EXPERTS_URL}/upgrades-and-migration`,
          },
          {
            label: "Add-In Development",
            href: `${EXCEL_EXPERTS_URL}/add-in-development`,
          },
          {
            label: "Office Integration with Excel",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/3rd-party-application-or-office-integration`,
          },
          {
            label: "Add-in Creation",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/add-in-creation`,
          },
        ],
      },
      {
        label: "Microsoft Access",
        href: ACCESS_EXPERTS_URL,
        items: [
          {
            label: "Database Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/database-development-and-solutions`,
          },
          {
            label: "Is Access right for you company?",
            href: `${ACCESS_EXPERTS_URL}/is-access-right-for-your-company`,
          },
          {
            label: "3rd Party Product Integration",
            href: `${ACCESS_EXPERTS_URL}/3rd-party-product-integration`,
          },
          {
            label: "Help & Training",
            href: `${ACCESS_EXPERTS_URL}/access-support`,
          },
          {
            label: "Upgrades & Migration",
            href: `${ACCESS_EXPERTS_URL}/upgrades-and-migration`,
          },
          {
            label: "Cloud-based and Online Database Solutions",
            href: `${ACCESS_EXPERTS_URL}/access-online`,
          },
        ],
      },
      {
        label: "Microsoft Power Platform",
        href: POWER_PLATFORM_EXPERTS_URL,
        items: [
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
        label: "Office 365",
        href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365`,
        items: [
          {
            label: "365 Implementation",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365/office-365-implementation`,
          },
          {
            label: "365 Migration",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365/office-365-migration`,
          },
          {
            label: "Business Process Automation",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365/business-process-automation`,
          },
          {
            label: "Remote Data Gathering",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365/remote-data-gathering-from-any-device`,
          },
          {
            label: "Exchange Setup & Assistance",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365/exchange-online-setup-and-support`,
          },
          {
            label: "Help & Managed Services",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365/support-and-managed-services`,
          },
          {
            label: "Cloud Backup with OneDrive",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365/cloud-backup-with-onedrive`,
          },
          {
            label: "App & Custom Development",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365/app-and-custom-development`,
          },
        ],
      },
      {
        label: "Other Services",
        href: `${OFFICE_EXPERTS_URL}/services/by-business-solution`,
        items: [
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
            label: "PowerPoint",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-powerpoint`,
          },
          {
            label: ".NET",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-dot-net`,
          },
          {
            label: "Outlook",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/custom-office-solutions`,
          },
          {
            label: "Publisher",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-publisher`,
          },
          {
            label: "Microsoft Cloud Based Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/cloud-based-solutions-with-azure`,
          },
        ],
      },
    ],
  },
  staticLinks: [
    {
      label: "Testimonials",
      href: "/client-testimonials",
    },
    {
      label: "About Us",
      href: `/about-us`,
    },
    {
      label: "Meet Our Team",
      href: "/meet-the-team",
    },
  ],
};
