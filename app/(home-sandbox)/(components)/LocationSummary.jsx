import React from "react";

import styles from "../../styles/locationSummary.module.scss";

const LocationSummary = ({ location, service }) => {
  return (
    <div className={styles.summary}>
      <div>
        <strong>Summary:</strong>
        <h2>
          Who are {service} Consultants in {location}?
        </h2>
      </div>

      <p>
        Our Word experts consultants provide {location} businesses with
        professional document solutions, custom template development, and
        support services tailored to your specific needs. Our local team of
        Microsoft-certified Word experts offer custom document automation,
        troubleshooting assistance, and comprehensive training to help your
        organisation leverage the full power of Microsoft Word and document
        management technologies.
      </p>
    </div>
  );
};

export default LocationSummary;
