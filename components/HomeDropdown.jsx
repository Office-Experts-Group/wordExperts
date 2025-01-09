import React from "react";
import Link from "next/link";

import { oldNavigationData } from "../oldNavigationData";
// import { navigationData } from "../navigationData";

import styles from "../styles/header.module.css";

export default function HomeDropdown() {
  const homeItems = oldNavigationData?.home?.items;

  return (
    <ul className={styles.dropdown}>
      <Link href="/">Home</Link>
    </ul>
  );
}
