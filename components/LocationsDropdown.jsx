import React from "react";
import { oldNavigationData } from "../oldNavigationData";
import DropdownItem from "./DropdownItem";
import styles from "../styles/header.module.css";

export default function LocationsDropdown({ handleLinkClick }) {
  const serviceItems = oldNavigationData.locations.items;

  return (
    <div className={styles.dropdown}>
      <ul>
        {serviceItems.map((item, index) => (
          <DropdownItem
            key={index}
            item={item}
            handleLinkClick={handleLinkClick}
          />
        ))}
      </ul>
    </div>
  );
}
