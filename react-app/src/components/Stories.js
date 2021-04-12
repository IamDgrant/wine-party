import React from "react";
import LandingHeader from "../components/LandingPageHeader";
import StoriesContent from "../components/StoriesContent";
import "../components/styling/storiesContentStyling.css";

const Stories = () => {
  return (
    <>
      <div className="main-stories-container">
        <div className="stories-header">
          <LandingHeader />
        </div>
        <div className="stories-contents">
          <StoriesContent />
        </div>
      </div>
    </>
  );
};

export default Stories;
