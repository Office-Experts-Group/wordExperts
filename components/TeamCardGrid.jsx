// LocationTeamGrid.jsx

import React from "react";
import TeamCard from "./TeamCard";
import { getTeamByLocation, getLocationDisplayName } from "../teamByLocation";
import styles from "../styles/locationTeam.module.css";

/**
 * LocationTeamGrid Component
 * Displays team members for a specific location in a grid layout
 *
 * @param {string} location - Location key (e.g., 'melbourne', 'sydney')
 * @param {string} title - Optional custom title (defaults to "Our Team in [Location]")
 * @param {boolean} showLocation - Whether to show location in title (default: true)
 */
const LocationTeamGrid = ({ location, title, showLocation = true }) => {
  const teamMembers = getTeamByLocation(location);
  const locationName = getLocationDisplayName(location);

  // Generate title based on team size
  const getDisplayTitle = () => {
    if (title) return title;

    const locationSuffix = showLocation ? ` in ${locationName}` : "";
    const prefix = teamMembers.length === 1 ? "Our Expert" : "Our Team";

    return `${prefix}${locationSuffix}`;
  };

  const displayTitle = getDisplayTitle();

  return (
    <section className={styles.locationTeam}>
      {displayTitle && <h2 className={styles.title}>{displayTitle}</h2>}

      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <TeamCard
            key={`${member.name}-${index}`}
            image={member.image}
            name={member.name}
            role={member.role}
            skills={member.skills.join(" • ")}
          />
        ))}
      </div>
    </section>
  );
};

export default LocationTeamGrid;
