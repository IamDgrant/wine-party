import React from "react";
import { useSelector } from "react-redux";
import LandingHeader from "../components/LandingPageHeader";
import UserMainHeader from "../components/UserMainHeader";
import AboutContent from "../components/AboutContent";
import "../components/styling/aboutStyling.css";

const About = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <div className="main-about-container">
        {sessionUser ? (
          <div className="about-header">
            <UserMainHeader />
          </div>
        ) : (
          <div className="about-header">
            <LandingHeader />
          </div>
        )}
        <div className="about-contents">
          <AboutContent />
        </div>
      </div>
    </>
  );
};

export default About;
