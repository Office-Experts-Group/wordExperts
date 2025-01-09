import React from "react";

import { oldNavigationData } from "../../oldNavigationData";
// import { navigationData } from "../../navigationData";

import MobileNavList from "./MobileNavList";

const getMenuItems = (currentView = "main") => {
  switch (currentView) {
    case "main":
      return [
        { label: "Home", href: "/" },
        { label: "Services", items: oldNavigationData.services.items },
        { label: "About Us", items: oldNavigationData.aboutUs.items },
        { label: "Testimonials", href: "/client-testimonials" },
        { label: "Contact Us", href: "/contact-us" },
      ];
    case "Services":
      return oldNavigationData.services.items;
    case "About Us":
      return oldNavigationData.aboutUs.items || [];
    default:
      const serviceCategory = oldNavigationData.services.items.find(
        (item) => item.label === currentView
      );
      if (serviceCategory?.items) {
        return serviceCategory.items;
      }
      return getMenuItems("main");
  }
};

export default function MobileNavContent({
  currentView,
  onItemClick,
  onNavigate,
  styles,
  isTransitioning,
}) {
  const items = getMenuItems(currentView);

  return (
    <MobileNavList
      items={items}
      onItemClick={onItemClick}
      onNavigate={onNavigate}
      styles={styles}
      isTransitioning={isTransitioning}
    />
  );
}
