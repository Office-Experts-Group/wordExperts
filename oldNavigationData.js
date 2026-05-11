// navigationData.js - wordexperts.com.au

// Base URLs for different sites (change these for production)
const WORD_EXPERTS_URL = "/";
const OFFICE_EXPERTS_URL = "https://www.officeexperts.com.au";
const EXCEL_EXPERTS_URL = "https://www.excelexperts.com.au";
const POWER_PLATFORM_EXPERTS_URL = "https://www.powerplatformexperts.com.au";
const ACCESS_EXPERTS_URL = "https://www.accessexperts.com.au";

export const oldNavigationData = {
  locations: {
    label: "Locations",
    href: "/locations",
    items: [
      {
        label: "New South Wales",
        href: "/locations",
        items: [
          {
            label: "Sydney",
            href: "/word-consultants-sydney",
          },
          {
            label: "Wollongong",
            href: "/word-consultants-wollongong",
          },
          {
            label: "Central Coast",
            href: "/word-consultants-central-coast-nsw",
          },
          {
            label: "Northern Rivers",
            href: "/word-consultants-northern-rivers-nsw",
          },
        ],
      },
      {
        label: "Victoria",
        href: "/locations",
        items: [
          {
            label: "Melbourne",
            href: "/word-consultants-melbourne",
          },
          {
            label: "Richmond",
            href: "/word-consultants-richmond",
          },
        ],
      },
      {
        label: "Queensland",
        href: "/locations",
        items: [
          {
            label: "Brisbane",
            href: "/word-consultants-brisbane",
          },
          {
            label: "Gold Coast",
            href: "/word-consultants-gold-coast",
          },
        ],
      },
      {
        label: "Western Australia",
        href: "/locations",
        items: [
          {
            label: "Perth",
            href: "/word-consultants-perth",
          },
        ],
      },
      {
        label: "ACT",
        href: "/locations",
        items: [
          {
            label: "Canberra",
            href: "/word-consultants-canberra",
          },
        ],
      },
      {
        label: "Northern Territory",
        href: "/locations",
        items: [
          {
            label: "Darwin",
            href: "/word-consultants-darwin",
          },
        ],
      },
      {
        label: "South Australia",
        href: "/locations",
        items: [
          {
            label: "Adelaide",
            href: "/word-consultants-adelaide",
          },
        ],
      },
    ],
  },
  services: {
    label: "Services",
    items: [
      {
        label: "Microsoft Word",
        href: `/`,
        items: [
          {
            label: "Corporate Global Template",
            href: `/corporate-global-template-solution`,
          },
          {
            label: "Corporate Identity",
            href: `/corporate-identity`,
          },
          {
            label: "Word Document Template Creation",
            href: `/word-document-template-creation`,
          },
          {
            label: "Government Departments",
            href: `/government-departments`,
          },
          {
            label: "Companies & Organisations",
            href: `/companies-and-organisations`,
          },
          {
            label: "Remove Repetition, Increase Productivity",
            href: `/remove-repetition-and-increase-productivity`,
          },
          {
            label: "Quick Parts",
            href: `/quick-parts`,
          },
          {
            label: "Popup Forms",
            href: `/popup-forms`,
          },
          {
            label: "Fill-In Forms",
            href: `/fill-in-forms`,
          },
          {
            label: "Upgrading Word",
            href: `/upgrades-and-migration`,
          },
          {
            label: "Accessibility",
            href: `/accessibility`,
          },
          {
            label: "Converting to Word Documents",
            href: `/word-template-conversions`,
          },
          {
            label: "Custom Toolbars & Ribbons",
            href: `/custom-toolbars-and-ribbons`,
          },
          {
            label: "Training and User Support",
            href: `/training`,
          },
          {
            label: "Document Rebranding",
            href: `/document-rebranding-services`,
          },
          {
            label: "Brand Templates",
            href: `/brand-template`,
          },
          {
            label: "Google Docs Migration",
            href: `/google-docs-to-word-migration`,
          },
          {
            label: "API Integrations",
            href: `/microsoft-word-api-integrations`,
          },
          {
            label: "Mail Merge",
            href: `/mail-merge`,
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
            label: "Remote Data Access",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365/remote-data-gathering-from-any-device`,
          },
          {
            label: "Online Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/online-solutions`,
          },
          {
            label: "Upgrades and Migration",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office/upgrades-and-migration`,
          },
          {
            label: "VBScript",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-vbscript`,
          },
          {
            label: "Add-in Creation",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/add-in-creation`,
          },
          {
            label: "Power Query",
            href: `${OFFICE_EXPERTS_URL}/services/power-query`,
          },
          {
            label: "Power Pivot",
            href: `${OFFICE_EXPERTS_URL}/services/power-pivot`,
          },
          {
            label: "Support & Training",
            href: `${OFFICE_EXPERTS_URL}/microsoft-support-and-training-australia`,
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
        ],
      },
      {
        label: "Microsoft Access",
        href: ACCESS_EXPERTS_URL,
        items: [
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
            label: "Cloud-based Solutions",
            href: `${ACCESS_EXPERTS_URL}/access-online`,
          },
          {
            label: "Power BI Integration",
            href: `${ACCESS_EXPERTS_URL}/integrate-access-with-power-bi`,
          },
          {
            label: "Database Optimisation and Repair",
            href: `${ACCESS_EXPERTS_URL}/access-database-optimisation-and-repair`,
          },
          {
            label: "SQL Server Backend Solutions",
            href: `${ACCESS_EXPERTS_URL}/sql-server-backend-business-solutions`,
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
          {
            label: "Power Bi Support",
            href: `${POWER_PLATFORM_EXPERTS_URL}/power-bi-support`,
          },
          {
            label: "Power Apps Support",
            href: `${POWER_PLATFORM_EXPERTS_URL}/power-apps-support`,
          },
          {
            label: "Data Integration",
            href: `${POWER_PLATFORM_EXPERTS_URL}/power-bi-data-integration`,
          },
          {
            label: "Excel to Power BI Migration",
            href: `${POWER_PLATFORM_EXPERTS_URL}/excel-to-power-bi-migration`,
          },
        ],
      },
      // {
      //   label: "Office 365",
      //   href: `/services/microsoft-office-365`,
      //   items: [
      //     {
      // redirected to /services/microsoft-office-365
      //       label: "365 Implementation",
      //       href: `/services/microsoft-office-365/office-365-implementation`,
      //     },
      //     {
      // redirected to /services/microsoft-office-365
      //       label: "365 Migration",
      //       href: `/services/microsoft-office-365/office-365-migration`,
      //     },
      //     {
      // redirected to /microsoft-support-and-training-australia
      //       label: "Exchange Setup & Assistance",
      //       href: `/services/microsoft-office-365/exchange-online-setup-and-support`,
      //     },
      //     {
      // redirected to /microsoft-support-and-training-australia
      //       label: "Help & Managed Services",
      //       href: `/services/microsoft-office-365/support-and-managed-services`,
      //     },
      //     {
      //       label: "Cloud Backup with OneDrive",
      //       href: `/services/microsoft-office-365/cloud-backup-with-onedrive`,
      //     },
      //     {
      //       label: "App & Custom Development",
      //       href: `/services/microsoft-office-365/app-and-custom-development`,
      //     },
      //   ],
      // },
      {
        label: "Other Services",
        href: `/services/by-business-solution`,
        items: [
          {
            label: "Office 365",
            href: `/services/microsoft-office-365`,
          },
          {
            label: "SharePoint",
            href: `${POWER_PLATFORM_EXPERTS_URL}/sharepoint-consulting-and-development`,
          },
          {
            label: "Business Process Automation",
            href: `/services/microsoft-office-365/business-process-automation`,
          },
          {
            label: "Azure Cloud Solutions",
            href: `/services/by-business-solution/cloud-based-solutions-with-azure`,
          },
          {
            label: "SQL Server",
            href: `/services/by-business-solution/office-and-sql-server-integration`,
          },
          {
            label: "PowerPoint",
            href: `/services/microsoft-powerpoint`,
          },
          {
            label: ".NET",
            href: `/services/microsoft-dot-net`,
          },
          {
            label: "Outlook",
            href: `/services/by-business-solution/custom-office-solutions`,
          },
          {
            label: "Publisher",
            href: `/services/microsoft-publisher`,
          },
        ],
      },
    ],
  },
  staticLinks: [
    {
      label: "About Us",
      href: `/about-us`,
    },
    {
      label: "Testimonials",
      href: "/client-testimonials",
    },
    {
      label: "Meet Our Team",
      href: "/meet-the-team",
    },
  ],
};
