import React from "react";
import LandingPageHeader from "../components/LandingPageHeader";
import LandingPageContent from "../components/LandingPageContent";
import Footer from "../components/Footer"
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
        <div className="user-footer-content">
            <Footer />
          </div>
      </div>
      
  );
};

export default LandingPage;
