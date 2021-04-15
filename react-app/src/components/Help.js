import React from "react";
import LandingHeader from "../components/LandingPageHeader";
import HelpContent from "../components/HelpContent";
import Footer from "../components/Footer";
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
      <div className="user-footer-content">
        <Footer />
      </div>
    </>
  );
};

export default Help;
