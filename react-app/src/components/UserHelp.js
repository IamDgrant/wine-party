import React from "react";
import MainHeader from "./MainHeader";
import UserHelpContent from "../components/UserHelpContent";
import Footer from "../components/Footer";
import "../components/styling/userHelpStyling.css";

const Help = () => {
  return (
    <>
      <div className="main-user-help-container">
        <div className="user-help-contents">
          <UserHelpContent />
        </div>
        <div className="user-help-header">
          <MainHeader />
        </div>
      </div>
      <div className="user-footer-content">
        <Footer />
      </div>
    </>
  );
};

export default Help;
