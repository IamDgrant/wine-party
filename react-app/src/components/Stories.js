import React from "react";
import { useSelector } from "react-redux";
import LandingHeader from "../components/LandingPageHeader";
import MainHeader from "../components/MainHeader";
import StoriesContent from "../components/StoriesContent";
import "../components/styling/storiesContentStyling.css";

const Stories = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <>
      <div className="main-stories-container">
        {sessionUser ? (
          <div className="about-header">
            <MainHeader />
          </div>
        ) : (
          <div className="about-header">
            <LandingHeader />
          </div>
        )}
        <div className="stories-contents">
          <StoriesContent />
        </div>
      </div>
    </>
  );
};

export default Stories;
