import React from "react";
import LandingHeader from "../components/LandingPageHeader";
import HelpContent from "../components/HelpContent";
import "../components/styling/helpStyling.css";

const Help = () => {
  return (
    <>
      <div className="main-stories-container">
        <div className="stories-header">
          <LandingHeader />
        </div>
        <div className="stories-contents">
          <HelpContent />
        </div>
      </div>
    </>
  );
};

export default Help;
