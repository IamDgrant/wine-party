import React from "react";
import LandingHeader from "../components/LandingPageHeader";
import AboutContent from "../components/AboutContent";
import "../components/styling/aboutStyling.css";

const About = () => {
  return (
    <>
      <div className="main-about-container">
        <div className="about-header">
          <LandingHeader />
        </div>
        <div className="about-contents">
          <AboutContent />
        </div>
      </div>
    </>
  );
};

export default About;
