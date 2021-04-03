import React from "react";
import MainHeader from "../components/MainHeader";
import HelpContent from "../components/HelpContent";
import "../components/styling/helpStyling.css";

const Help = () => {
  return (
    <>
      <div className="main-help-container">
        <div className="help-header">
          <MainHeader />
        </div>
        <div className="help-contents">
          <HelpContent />
        </div>
      </div>
    </>
  );
};

export default Help;
