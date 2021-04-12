import React from "react";
import MainHeader from "./MainHeader";
import UserHelpContent from "../components/UserHelpContent";
import "../components/styling/userHelpStyling.css";

const Help = () => {
  return (
    <>
      <div className="main-user-help-container">
        <div className="user-help-header">
          <MainHeader />
        </div>
        <div className="user-help-contents">
          <UserHelpContent />
        </div>
      </div>
    </>
  );
};

export default Help;
