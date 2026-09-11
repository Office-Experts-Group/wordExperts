// teamByLocation.js
// Helper functions to filter team members by location

import { teamMembers } from "./meetTheTeam";

/**
 * Get team members for a specific location
 * @param {string} location - Location key (e.g., 'melbourne', 'sydney')
 * @returns {Array} Array of team member objects for that location
 */
export const getTeamByLocation = (location) => {
  return teamMembers.filter((member) => member.location === location);
};

/**
 * Get all unique locations from team members
 * @returns {Array} Array of unique location keys
 */
export const getAvailableLocations = () => {
  const locations = teamMembers.map((member) => member.location);
  return [...new Set(locations)].filter(Boolean);
};

/**
 * Get location display name
 * @param {string} locationKey - Location key
 * @returns {string} Formatted location name
 */
export const getLocationDisplayName = (locationKey) => {
  const displayNames = {
    melbourne: "Melbourne",
    sydney: "Sydney",
    wollongong: "Wollongong",
    northernRivers: "Northern Rivers, NSW",
    centralCoast: "Central Coast",
    brisbane: "Brisbane",
    goldCoast: "Gold Coast",
    perth: "Perth",
    canberra: "Canberra",
    bali: "Bali",
    vietnam: "Vietnam",
  };

  return displayNames[locationKey] || locationKey;
};

/**
 * Get count of team members by location
 * @returns {Object} Object with location keys and counts
 */
export const getTeamCountByLocation = () => {
  return teamMembers.reduce((acc, member) => {
    const location = member.location;
    if (location) {
      acc[location] = (acc[location] || 0) + 1;
    }
    return acc;
  }, {});
};
