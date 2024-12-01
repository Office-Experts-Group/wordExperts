import React from "react";

import { navigationData } from "../navigationData";

import DropdownItem from "./DropdownItem";

import styles from "../styles/header.module.css";
import Link from "next/link";

export default function HomeDropdown() {
  const homeItems = navigationData?.home?.items;

  return (
    <ul className={styles.dropdown}>
      <Link href="/">Home</Link>
    </ul>
  );
}
