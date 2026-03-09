"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "../../../styles/boxSegment.module.scss";

// State machine: 0 = front (light bg), 1 = back (dark bg), 2 = front again (light bg)
// Scrolling down advances state 0→1→2, scrolling up reverses 2→1→0

const STATES = {
  0: { bg: "light", label: "front" },
  1: { bg: "dark", label: "back" },
  2: { bg: "light", label: "front" },
};

const controlItems = [
  "Control content inserted from other documents",
  "Unknown formatting will default to the 'Normal' style",
  "Tables will have the default table style applied for consistent branding",
  "Pasted text will look for default Word styles such as Headings and 'Normal', applying your correct styles to them.",
];

const headacheItems = [
  "Unauthorised formatting from user pasted content",
  "User manipulated colours, fonts and font sizes",
  "Incorrect formatting, content, styles and disturbing headings",
  "Inconsistent fonts, colour themes and branding",
];

const TickIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="1"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);

const CrossIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2.5"
    strokeLinecap="round"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function BoxSegment() {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0); // 0, 1, or 2
  const [isAnimating, setIsAnimating] = useState(false);
  const accScroll = useRef(0);
  const lastScrollY = useRef(0);
  const SCROLL_THRESHOLD = 80; // px needed to trigger a flip
  const ANIM_MS = 900;

  const advance = useCallback(
    (delta) => {
      if (isAnimating) return;
      setStep((prev) => {
        const next = Math.max(0, Math.min(2, prev + delta));
        if (next === prev) return prev;
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), ANIM_MS);
        return next;
      });
    },
    [isAnimating],
  );

  // Scroll handler — non-locking, accumulates while section is in view
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.6 &&
        rect.bottom > window.innerHeight * 0.2;

      const delta = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;

      if (!inView) {
        accScroll.current = 0;
        return;
      }

      accScroll.current += delta;

      if (Math.abs(accScroll.current) >= SCROLL_THRESHOLD) {
        advance(accScroll.current > 0 ? 1 : -1);
        accScroll.current = 0;
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [advance]);

  // Flip state → card rotation
  // step 0: both cards at 0deg (front visible)
  // step 1: both cards at -180deg (back visible)
  // step 2: both cards at -360deg (front visible again)
  const rotation = step * -180;

  const isDark = step === 1; // dark background only at step 1

  return (
    <section
      ref={sectionRef}
      className={`${styles.flipSection} ${isDark ? styles.darkSection : styles.lightSection}`}
    >
      {/* LEFT card — text summary */}
      <div className={styles.cardWrapper}>
        <div
          className={styles.cardInner}
          style={{ transform: `rotateX(${rotation}deg)` }}
        >
          {/* Face 0 — front (step 0) */}
          <div
            className={`${styles.cardFace} ${styles.face0} ${styles.lightCard}`}
          >
            <div className={styles.contentBox}>
              <h2>
                We'll Put You
                <br />
                Back In Control!
              </h2>
              <p>
                With our master templates, users can create sub templates in
                house under our controlled template environment.
              </p>
            </div>
          </div>

          {/* Face 1 — back (step 1), rotated 180deg */}
          <div
            className={`${styles.cardFace} ${styles.face1} ${styles.darkCard}`}
          >
            <div className={styles.contentBox}>
              <h2>
                No More
                <br />
                Headaches!
              </h2>
              <p>
                We can help you put an end to messy documents that break
                corporate branding.
              </p>
            </div>
          </div>

          {/* Face 2 — front again (step 2), rotated 360deg */}
          <div
            className={`${styles.cardFace} ${styles.face2} ${styles.lightCard}`}
          >
            <div className={styles.contentBox}>
              <h2>
                We'll Put You
                <br />
                Back In Control!
              </h2>
              <p>
                With our master templates, users can create sub templates in
                house under our controlled template environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT card — bullet points */}
      <div className={styles.cardWrapper}>
        <div
          className={styles.cardInner}
          style={{
            transform: `rotateX(${rotation}deg)`,
            transitionDelay: "100ms",
          }}
        >
          {/* Face 0 — green ticks */}
          <div
            className={`${styles.cardFace} ${styles.face0} ${styles.lightCard}`}
          >
            <div className={styles.pointsBox}>
              {controlItems.map((text, i) => (
                <div key={i} className={styles.point}>
                  <div className={styles.tick}>
                    <TickIcon />
                  </div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Face 1 — red crosses */}
          <div
            className={`${styles.cardFace} ${styles.face1} ${styles.darkCard}`}
          >
            <div className={styles.pointsBox}>
              {headacheItems.map((text, i) => (
                <div key={i} className={styles.point}>
                  <div className={styles.cross}>
                    <CrossIcon />
                  </div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Face 2 — green ticks again */}
          <div
            className={`${styles.cardFace} ${styles.face2} ${styles.lightCard}`}
          >
            <div className={styles.pointsBox}>
              {controlItems.map((text, i) => (
                <div key={i} className={styles.point}>
                  <div className={styles.tick}>
                    <TickIcon />
                  </div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
