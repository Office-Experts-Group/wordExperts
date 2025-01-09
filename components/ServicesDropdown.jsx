import React from "react";

import { oldNavigationData } from "../oldNavigationData";
// import { navigationData } from "../navigationData";

import DropdownItem from "./DropdownItem";

import styles from "../styles/header.module.css";

export default function ServicesDropdown() {
  // Directly use the services items from navigationData
  const serviceItems = oldNavigationData.services.items;

  return (
    <ul className={styles.dropdown}>
      {serviceItems.map((item, index) => (
        <DropdownItem key={index} item={item} />
      ))}
    </ul>
  );
}
