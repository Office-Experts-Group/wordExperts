// import React from "react";
// import Image from "next/image";

// import AnimateOnScroll from "../../../components/AnimateOnScroll";

// import styles from "../../../styles/pageSegment4.module.css";

// import blueCode from "../../../public/blueCode600x400.webp";

// const Segment4Repeat = () => {
//   const checkItems = [
//     "Covers",
//     "Image layout pages",
//     "Chapter break pages",
//     "Pre-built tables",
//     "Landscape pages",
//     "Content",
//     "A3 pages",
//     "Multiple column sections",
//     "Appendix sections",
//     "Terms and conditions sections",
//     "Automation of header and footer content",
//   ];

//   return (
//     <div className="animate-wrapper">
//       <div className={styles.pageSegment} style={{ margin: "6rem 0" }}>
//         <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
//           <div className={styles.content}>
//             <h2 style={{ marginBottom: "1rem" }}>
//               Custom Document Components for Tailored Solutions
//             </h2>
//             <p>
//               Our comprehensive suite of custom document components gives you
//               access to advanced formatting and layout options, including:
//             </p>
//           </div>

//           <div className={styles.pointsGrid}>
//             {checkItems.map((text, index) => (
//               <div key={index} className={styles.point}>
//                 <div className={styles.tick}>
//                   <svg
//                     stroke="currentColor"
//                     fill="currentColor"
//                     strokeWidth="1"
//                     viewBox="0 0 24 24"
//                     height="1em"
//                     width="1em"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
//                   </svg>
//                 </div>
//                 <p>{text}</p>
//               </div>
//             ))}
//           </div>
//         </AnimateOnScroll>

//         <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
//           <div className="image-wrapper">
//             <Image
//               src={blueCode}
//               alt="digital design, futuristic coder"
//               width={450}
//               height={300}
//             />
//           </div>
//         </AnimateOnScroll>
//       </div>
//     </div>
//   );
// };

// export default Segment4Repeat;

import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import blueCode from "../../../public/blueCode600x400.webp";

const Segment4Repeat = () => {
  const layoutItems = [
    "Covers",
    "Image layout pages",
    "Chapter break pages",
    "Pre-built tables",
    "Landscape pages (A4 & A3, insert/remove)",
    "A3 pages",
    "Multiple column sections",
    "Appendix sections",
    "Terms and conditions sections",
    "Document content options",
    "Styles clean up",
    "Multilevel list clean up",
    "Table list styles button & reset table numbering",
    "Insert and remove columns",
    "Additional custom colours theme",
    "Chart templates",
    "Custom page layouts",
  ];

  const automationItems = [
    "Automation of header and footer content",
    "Insert table of contents",
    "Insert table & format table",
    "Apply table sub header/format cells",
    "Remove instructional text",
    "Removing heading numbers",
    "Apply paragraph numbering",
    "Custom find & replace",
    "Search and insert from a content data source",
    "Change entity",
  ];

  const renderList = (items) => (
    <div className={styles.pointsGrid}>
      {items.map((text, index) => (
        <div key={index} className={styles.point}>
          <div className={styles.tick}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
            </svg>
          </div>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "6rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Custom Document Components for Tailored Solutions
            </h2>
            <p>
              Our comprehensive suite of components gives you access to advanced
              formatting, design, and smart automation tools that help you
              create polished, professional documents.
            </p>

            <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
              Advanced Layout & Design Options
            </h3>
            <p>
              Go beyond standard Word formatting with professional-grade layout
              and styling features:
            </p>
            {renderList(layoutItems)}

            <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
              Automation & Smart Document Tools
            </h3>
            <p>
              Save time and reduce errors with intelligent automation and
              content management tools:
            </p>
            {renderList(automationItems)}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={blueCode}
              alt="digital design, futuristic coder"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
