import React from "react";
import Link from "next/link";

import CodeBlock from "../../../components/CodeBlock";
import Contact from "../../../components/Contact";

import styles from "../../../styles/blogPost.module.scss";
import Image from "next/image";

const CanvaToWordBlogPost = () => {
  // Sample code for Word style setup
  const wordStylesCode = `# Setting up Word Styles for brand consistency
1. Go to the Home tab in Word
2. Right-click on a style in the Styles gallery
3. Select "Modify"
4. Set font, size, color, and spacing
5. Check "New documents based on this template"
6. Click "OK" to save changes`;

  // Content controls code
  const contentControlsCode = `# Adding Content Controls in Word
1. Enable the Developer tab:
   File > Options > Customize Ribbon > Check "Developer"

2. Place cursor where you want a control
3. Go to Developer tab > Controls section
4. Choose appropriate control (Rich Text, Plain Text, etc.)
5. Click "Properties" to set restrictions
6. Optional: Click "Group" to prevent deletion`;

  // Word template code
  const saveTemplateCode = `# Save as Word Template (.dotx)
1. Click File > Save As
2. Select location (Templates folder recommended)
3. In "Save as type" dropdown, select "Word Template (*.dotx)"
4. Name your template
5. Click Save

# To use your template later:
1. Click File > New > Personal
2. Your template will appear in the gallery`;

  // Main BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":
      "https://www.wordexperts.com.au/blog/convert-canva-to-word#BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/blog/convert-canva-to-word",
    },
    headline: "How to Convert a Canva Design into a Microsoft Word Template",
    name: "How to Convert a Canva Design into a Microsoft Word Template",
    description:
      "Learn how to convert Canva designs into functional Microsoft Word templates. This comprehensive guide shows you the best methods for creating editable Word documents while maintaining your brand elements from Canva designs.",
    image: {
      "@type": "ImageObject",
      url: "https://www.wordexperts.com.au/canva-to-word.webp",
      width: 600,
      height: 400,
      caption: "Canva to Word Template conversion process",
    },
    author: {
      "@type": "Person",
      name: "Daniel Thomas",
      url: "https://www.wordexperts.com.au/about/daniel-thomas",
      jobTitle: "Microsoft Word Expert",
      worksFor: {
        "@type": "Organization",
        name: "Word Experts",
        url: "https://www.wordexperts.com.au",
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.wordexperts.com.au#organization",
      name: "Word Experts",
      url: "https://www.wordexperts.com.au",
      logo: {
        "@type": "ImageObject",
        url: "https://www.wordexperts.com.au/logo.png",
        width: 1200,
        height: 630,
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "Australia",
      },
      telephone: "+611300122038",
    },
    datePublished: "2025-04-14T09:00:00+10:00",
    dateModified: "2025-04-14T09:00:00+10:00",
    inLanguage: "en-AU",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Business owners, admin staff, and Microsoft Word users",
    },
    about: [
      {
        "@type": "SoftwareApplication",
        name: "Canva",
        applicationCategory: "Design Software",
      },
      {
        "@type": "SoftwareApplication",
        name: "Microsoft Word",
        applicationCategory: "Word Processing Software",
      },
      {
        "@type": "Thing",
        name: "Document Templates",
        description: "Professional business document formatting solutions",
      },
    ],
    keywords: [
      "Canva to Word template",
      "convert Canva design",
      "Microsoft Word templates",
      "document conversion",
      "brand consistency",
      "template design",
    ],
    wordCount: 1800,
    timeRequired: "PT5M",
    articleSection: "Tutorial",
    isPartOf: {
      "@type": "Blog",
      "@id": "https://www.wordexperts.com.au/blog#Blog",
      name: "Word Experts Blog",
      description: "Expert tips and tutorials for Microsoft Word users",
    },
  };

  // HowTo Schema for the conversion process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://www.wordexperts.com.au/blog/convert-canva-to-word#HowTo",
    name: "How to Convert a Canva Design into a Microsoft Word Template",
    description:
      "Step-by-step instructions for converting Canva designs into functional Microsoft Word templates while maintaining brand consistency.",
    image: {
      "@type": "ImageObject",
      url: "https://www.wordexperts.com.au/canva-to-word.webp",
      width: 600,
      height: 400,
    },
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "AUD",
      value: "0",
    },
    totalTime: "PT30M",
    supply: [
      {
        "@type": "HowToSupply",
        name: "Canva design (exported as PDF or PNG)",
      },
      {
        "@type": "HowToSupply",
        name: "Microsoft Word software",
      },
      {
        "@type": "HowToSupply",
        name: "Brand assets (logos, fonts, color codes)",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Microsoft Word",
        description: "Word processing software for template creation",
      },
      {
        "@type": "HowToTool",
        name: "Canva",
        description: "Design software for creating original designs",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Export from Canva",
        text: "Download your Canva design as a high-resolution PDF or PNG for reference. Note the exact fonts, colors, and measurements used.",
        image: {
          "@type": "ImageObject",
          url: "https://www.wordexperts.com.au/canva-export-step.webp",
          width: 400,
          height: 300,
        },
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Set up Word document",
        text: "Open Microsoft Word with a blank document. Set the page size to match your Canva design using Layout > Margins > Custom Margins.",
        image: {
          "@type": "ImageObject",
          url: "https://www.wordexperts.com.au/word-setup-step.webp",
          width: 400,
          height: 300,
        },
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Recreate the structure",
        text: "Use tables, shapes, and text boxes to recreate your Canva layout. Insert logos and images from your Canva design using Insert > Pictures.",
        image: {
          "@type": "ImageObject",
          url: "https://www.wordexperts.com.au/word-structure-step.webp",
          width: 400,
          height: 300,
        },
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Apply brand formatting",
        text: "Match fonts and colors exactly using Format > Font Color > More Colors > Custom to enter RGB values from your brand guidelines.",
        image: {
          "@type": "ImageObject",
          url: "https://www.wordexperts.com.au/word-formatting-step.webp",
          width: 400,
          height: 300,
        },
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Lock formatting and save template",
        text: "Use Word's Styles and Content Controls to prevent unwanted changes. Save as .dotx Word Template file for reuse.",
        image: {
          "@type": "ImageObject",
          url: "https://www.wordexperts.com.au/word-save-template-step.webp",
          width: 400,
          height: 300,
        },
      },
    ],
    video: {
      "@type": "VideoObject",
      name: "Converting Canva Design to Word Template",
      description:
        "Video tutorial showing the complete process of converting a Canva design into a Microsoft Word template",
      thumbnailUrl:
        "https://www.wordexperts.com.au/canva-to-word-video-thumb.webp",
      uploadDate: "2025-04-14T09:00:00+10:00",
      duration: "PT8M30S",
      embedUrl: "https://www.youtube.com/embed/placeholder-video-id",
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id":
      "https://www.wordexperts.com.au/blog/convert-canva-to-word#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.wordexperts.com.au",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.wordexperts.com.au/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to Convert a Canva Design into a Microsoft Word Template",
        item: "https://www.wordexperts.com.au/blog/convert-canva-to-word",
      },
    ],
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.wordexperts.com.au#organization",
    name: "Word Experts",
    alternateName: "Office Experts Group - Word Division",
    url: "https://www.wordexperts.com.au",
    logo: {
      "@type": "ImageObject",
      url: "https://www.wordexperts.com.au/logo.png",
      width: 1200,
      height: 630,
    },
    description:
      "Professional Microsoft Word template and document solutions for Australian businesses and organizations",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Australia",
    },
    telephone: "+611300122038",
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceArea: {
      "@type": "Country",
      name: "Australia",
    },
    sameAs: [
      "https://twitter.com/OfficeExpertsG1",
      "https://www.facebook.com/MSOfficeExperts",
      "https://www.linkedin.com/company/office-experts-group",
    ],
    founder: {
      "@type": "Person",
      name: "Scott Robinson",
      jobTitle: "Managing Director",
    },
    foundingDate: "2002",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 50,
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Microsoft Word Template Design",
          description: "Custom Word template creation and brand implementation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Document Conversion Services",
          description:
            "Convert designs from Canva, PDF, or other formats to Word templates",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Word Training and Support",
          description:
            "Expert training and ongoing support for Microsoft Word users",
        },
      },
    ],
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.wordexperts.com.au/blog/convert-canva-to-word",
    url: "https://www.wordexperts.com.au/blog/convert-canva-to-word",
    name: "How to Convert a Canva Design into a Microsoft Word Template",
    description:
      "Convert Canva designs into functional Microsoft Word templates. Create editable Word documents while maintaining your brand elements from Canva designs.",
    inLanguage: "en-AU",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.wordexperts.com.au#website",
      name: "Word Experts",
      url: "https://www.wordexperts.com.au",
    },
    datePublished: "2025-04-14T09:00:00+10:00",
    dateModified: "2025-04-14T09:00:00+10:00",
    author: {
      "@type": "Person",
      name: "Daniel Thomas",
    },
    publisher: {
      "@id": "https://www.wordexperts.com.au#organization",
    },
    breadcrumb: {
      "@id":
        "https://www.wordexperts.com.au/blog/convert-canva-to-word#breadcrumb",
    },
    mainEntity: {
      "@id":
        "https://www.wordexperts.com.au/blog/convert-canva-to-word#BlogPosting",
    },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://www.wordexperts.com.au/blog/convert-canva-to-word"],
      },
      {
        "@type": "ShareAction",
        target: ["https://www.wordexperts.com.au/blog/convert-canva-to-word"],
      },
    ],
  };

  // Combined Schema using @graph
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      blogPostingSchema,
      howToSchema,
      breadcrumbSchema,
      organizationSchema,
      webPageSchema,
    ],
  };

  return (
    <>
      {/* Primary comprehensive schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      {/* Additional standalone schema for better compatibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <div className={styles.head}></div>
      <div className={styles.blogContainer}>
        <div className={styles.preface}>
          <div>
            <p>Author: Daniel Thomas</p>
            <p>Reading time: 5min</p>
          </div>
        </div>
        <h1 className={styles.blogTitle}>
          How to Convert a Canva Design into a Microsoft Word Template
        </h1>

        <Image
          src="/canva-to-word.webp"
          alt="Canva to Word Template conversion process"
          width={600}
          height={400}
          priority
          className={styles.img}
          style={{ margin: "2rem auto 0 auto" }}
        />

        <div className={styles.blogContent}>
          <h2>Introduction</h2>
          <p>
            <strong>
              Love your Canva design but need it in Microsoft Word for editing
              or printing?
            </strong>{" "}
            You're not alone — many business owners and admin staff design their
            letterheads, invoices, or proposals in Canva but eventually need a{" "}
            <strong>fully editable Word version</strong>. Whether it's for
            compatibility, brand consistency, or easier collaboration,
            converting a Canva design into a functional Word template is totally
            doable — and in this guide, we'll show you how.
          </p>

          <h2>Why Convert from Canva to Word?</h2>
          <p>
            There are several compelling reasons why you might need to convert
            your beautiful Canva designs into Microsoft Word templates:
          </p>
          <ul>
            <li>You need editable documents for clients or team members</li>
            <li>
              Your business operates primarily in Word (policies, letters,
              proposals)
            </li>
            <li>You want to lock branding and formatting for consistency</li>
            <li>Not everyone on your team uses or has access to Canva</li>
            <li>Printing or compliance requirements demand Word format</li>
          </ul>
          <p>
            <strong>Example:</strong> NDIS providers often need service
            agreement templates in Word, not PDF or Canva, for editable
            compliance use.
          </p>

          <h2>Canva to Word: What You Can and Can't Do</h2>
          <p>
            Before diving in, it's important to set realistic expectations about
            what transfers well from Canva to Word and what doesn't.
          </p>

          <h3>What works:</h3>
          <ul>
            <li>Layout replication</li>
            <li>Fonts (if available in Word)</li>
            <li>Colors and spacing</li>
            <li>Logos and images</li>
          </ul>

          <h3>What doesn't:</h3>
          <ul>
            <li>Canva elements like animations</li>
            <li>Complex text layering or effects</li>
            <li>Interactive buttons or links (unless re-added)</li>
          </ul>
          <p>
            <strong>Tip:</strong> Think of this as a redesign, not a 1:1
            conversion. Focus on maintaining the visual identity and
            functionality rather than an exact replica.
          </p>

          <h2>Step-by-Step: How to Convert Canva to Microsoft Word</h2>
          <p>
            There are two main approaches to converting your Canva design to a
            Word template. Let's explore both options:
          </p>

          <h3>Option A: Manual Recreation (Recommended for Accuracy)</h3>
          <ol>
            <li>
              <strong>Export from Canva</strong>
              <ul>
                <li>Download as a high-res PDF or PNG for reference</li>
                <li>
                  If possible, note the exact fonts, colors, and measurements
                  used
                </li>
              </ul>
            </li>
            <li>
              <strong>Open Microsoft Word</strong>
              <ul>
                <li>
                  Start with a blank document or pre-made layout that's similar
                </li>
                <li>Set the page size to match your Canva design</li>
              </ul>
            </li>
            <li>
              <strong>Set margins and layout</strong>
              <ul>
                <li>Match sizes from your Canva file</li>
                <li>
                  Go to Layout {">"} Margins {">"} Custom Margins to set precise
                  measurements
                </li>
              </ul>
            </li>
            <li>
              <strong>Recreate the structure</strong>
              <ul>
                <li>Use tables, shapes, and text boxes</li>
                <li>Insert logos or images from Canva</li>
                <li>Use Insert {">"} Pictures to add your exported images</li>
              </ul>
            </li>
            <li>
              <strong>Apply fonts and colors</strong>
              <ul>
                <li>Use your brand guidelines</li>
                <li>
                  To match exact colors, use Format {">"} Font Color {">"} More
                  Colors {">"} Custom and enter RGB values
                </li>
              </ul>
            </li>
            <li>
              <strong>Lock formatting</strong>
              <ul>
                <li>
                  Use Word's <strong>Styles</strong> and{" "}
                  <strong>Content Controls</strong> to prevent unwanted changes
                </li>
                <li>This makes the template more usable for others</li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>Bonus:</strong> Save it as a <code>.dotx</code> Word
            Template file for reuse.
          </p>

          <h3>Option B: Canva's Export-to-Word Feature (Limited)</h3>
          <ul>
            <li>
              Canva allows you to{" "}
              <strong>Download {">"} File type: Microsoft Word (.docx)</strong>
            </li>
            <li>This works for simple text-heavy designs</li>
            <li>Doesn't always preserve spacing, layout, or fonts correctly</li>
          </ul>
          <p>
            <strong>Note:</strong> This option is not ideal for complex
            documents — use as a base, then clean up the formatting issues that
            typically arise.
          </p>

          <h2>Tips for Keeping Your Brand Consistent in Word</h2>
          <p>
            One of the biggest challenges when converting from Canva to Word is
            maintaining brand consistency. Here are some strategies:
          </p>

          <h3>Using Word Styles</h3>
          <p>Word's Style system is powerful for maintaining consistency:</p>

          <CodeBlock code={wordStylesCode} language="text" />

          <p>
            By setting up proper Styles for Heading 1, Heading 2, Body text,
            etc., you can ensure that formatting remains consistent throughout
            your document and across all documents based on your template.
          </p>

          <h3>Content Controls for User Input</h3>
          <p>To create fillable areas while protecting your design:</p>

          <CodeBlock code={contentControlsCode} language="text" />

          <p>
            Content controls are especially useful when creating templates that
            others will use, as they clearly indicate where information should
            be entered.
          </p>

          <h3>Saving as a Proper Template</h3>

          <CodeBlock code={saveTemplateCode} language="text" />

          <p>Other tips for brand consistency include:</p>
          <ul>
            <li>
              Match <strong>line spacing</strong>, <strong>font size</strong>,
              and <strong>color codes</strong> exactly
            </li>
            <li>
              Save brand assets in your header/footer for consistent appearance
            </li>
            <li>
              Use <strong>section breaks</strong> and{" "}
              <strong>page layout settings</strong> consistently
            </li>
            <li>Lock or restrict editing if sharing templates externally</li>
          </ul>

          <h2>When You Might Consider Our Professional Help</h2>
          <p>
            Converting from Canva to Word can be time-consuming, especially for
            complex designs. Consider professional help if you:
          </p>
          <ul>
            <li>Have a multi-page branded document</li>
            <li>Need fillable sections or interactivity</li>
            <li>Want to restrict editing to protect your brand</li>
            <li>Need compatibility across devices and screen readers</li>
            <li>
              Are{" "}
              <Link href={"../../custom-toolbars-and-ribbons"}>
                creating templates that many people will use
              </Link>
            </li>
          </ul>
          <p>
            At <strong>Word Experts</strong>, we specialise in turning Canva or
            PDF designs into clean, editable, on-brand Word templates for
            businesses, NDIS providers, consultants, and more.
          </p>

          <h2>Conclusion</h2>
          <p>
            Converting a Canva design into Microsoft Word isn't just possible —
            it can be a smart move for your brand. With a little time and
            attention to detail (or help from us!), you can create a branded
            template that works just as beautifully in Word as it does in Canva.
          </p>
          <p>
            The key is to focus on the function of the document in Word, not
            just its appearance. By understanding what elements transfer well
            and which need reimagining, you can create professional Word
            templates that maintain your brand identity while adding the
            editability and compatibility that Word provides.
          </p>

          <p>
            If you need professional support with Microsoft Word templates, be
            sure to get in contact with me at{" "}
            <Link href={"/"}> Word Experts.</Link>
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default CanvaToWordBlogPost;
