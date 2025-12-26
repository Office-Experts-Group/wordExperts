import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/howWeWork.module.css";

import magnify from "../../../public/magnify.webp";
import pencils from "../../../public/pencils.webp";
import gears from "../../../public/gears.webp";
import rocket from "../../../public/rocket.webp";
import support from "../../../public/supportIcon.webp";
import analysis from "../../../public/analysis.webp";
import testing from "../../../public/testing.webp";

const HowWeWork = () => {
  const steps = [
    {
      icon: magnify,
      title: "Discovery",
      subtitle: "Understanding Your Document Needs",
      description:
        "We begin by listening. Our consultants meet with your team to understand your document workflows, template challenges, and business objectives. We identify inefficiencies in your current processes, discuss your vision for document automation, and establish clear project goals that align with your organisation's requirements for consistency, compliance, and efficiency.",
    },
    {
      icon: analysis,
      title: "Analysis",
      subtitle: "Requirements and Technical Assessment",
      description:
        "We conduct thorough analysis of your document requirements, evaluating existing templates, reviewing style sheets, and assessing automation opportunities. Our team examines your branding guidelines, compliance needs, user skill levels, and integration requirements. We provide honest recommendations on whether Word is the optimal solution or if alternative approaches better suit your needs.",
    },
    {
      icon: pencils,
      title: "Design",
      subtitle: "Template Architecture and Planning",
      description:
        "With requirements defined, we architect your Word solution. This may include designing template structure, planning style hierarchies, mapping automation workflows, designing custom ribbons and forms, and creating detailed specifications. We present mockups and prototypes for your review, ensuring the design meets your needs, maintains brand consistency, and supports your workflows before development begins.",
    },
    {
      icon: gears,
      title: "Development",
      subtitle: "Building Your Document Solution",
      description:
        "Our developers bring the design to life, building custom templates, VBA macros, user forms, content controls, building blocks, and custom ribbons. We follow best practices for template engineering, implement robust error handling, ensure cross-version compatibility, and build with future maintenance in mind. Throughout development, we maintain regular communication, providing progress updates and incorporating your feedback.",
    },
    {
      icon: testing,
      title: "Testing",
      subtitle: "Quality Assurance and Validation",
      description:
        "Rigorous testing ensures your Word solution performs flawlessly. We conduct functional testing of all features, validate formatting consistency across different scenarios, test automation and macros, verify accessibility compliance where required, and check compatibility across Word versions. We involve your team in user acceptance testing, addressing any issues before deployment.",
    },
    {
      icon: rocket,
      title: "Deployment",
      subtitle: "Implementation and Rollout",
      description:
        "We manage the deployment process carefully, whether implementing new templates or upgrading existing systems. This includes template distribution, add-in installation, ribbon deployment, integration with document management systems, and configuration of your IT environment. We can stage rollouts to minimise disruption or implement comprehensive system-wide deployment based on your preferences and organisational needs.",
    },
    {
      icon: support,
      title: "Support",
      subtitle: "Training and Ongoing Maintenance",
      description:
        "Our relationship doesn't end at deployment. We provide comprehensive training for your team on template usage, create detailed documentation and user guides, and offer ongoing support to ensure long-term success. Whether you need ad-hoc assistance, template updates, or a comprehensive maintenance agreement, we're here to help your Word solutions evolve with your business and adapt to changing requirements.",
    },
  ];

  return (
    <section className={styles.pageSegment}>
      <div className={styles.underline}>
        <h2>How We Work</h2>
      </div>
      <div className={styles.ourProcess}>
        {steps.map((step, index) => (
          <AnimateOnScroll
            key={index}
            animation="slide-up"
            duration={1}
            delay={0.1 * index}
          >
            <div className={styles.flexHolder}>
              <Image
                src={step.icon}
                width={100}
                height={100}
                alt={step.title}
              />
              <div>
                <h3>{step.title}</h3>
                <h4>{step.subtitle}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
