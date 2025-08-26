export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are fill-in forms, and how can they benefit my team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill-in forms are custom data entry templates designed to make data input easy, accurate, and consistent. They help your team efficiently collect and manage information, minimizing errors and ensuring uniformity across documents.",
      },
    },
    {
      "@type": "Question",
      name: "Can the forms be customised to fit our specific needs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we design forms that are tailored to your requirements, from simple step-by-step forms to more complex templates with controls and protection. We work closely with you to create forms that are intuitive and aligned with your workflow.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of data can be collected with these fill-in forms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our fill-in forms can handle a wide range of data, from text and numerical entries to dates and dropdown selections. The forms can be designed to capture any type of structured data you need, ensuring ease of use and accuracy.",
      },
    },
    {
      "@type": "Question",
      name: "How does VBA enhance the functionality of these forms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With VBA (Visual Basic for Applications), we can add automation features to your forms, such as data validation, auto-filling, and customised data extraction. VBA enables advanced functionality, helping your team save time and reduce manual errors.",
      },
    },
    {
      "@type": "Question",
      name: "Can these forms be protected to prevent data tampering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We implement controls and protection features that restrict editing to specific fields, ensuring data integrity. Only designated fields will be editable, protecting the rest of the form content from unintended changes.",
      },
    },
  ],
};

export default faqSchema;
