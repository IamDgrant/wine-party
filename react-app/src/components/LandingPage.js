import React from "react";
import LandingPageHeader from "../components/LandingPageHeader";
import LandingPageContent from "../components/LandingPageContent";
// import RandomHost from "../components/RandomHostCard";
import "../components/styling/landingPageStyling.css";

const LandingPage = () => {
  return (
      <div className="main-landing-container">
        <div className="landing-header">
          <LandingPageHeader />
        </div>
        <div className="landing-contents">
          <LandingPageContent />
        </div>
      </div>
  );
};

export default LandingPage;
