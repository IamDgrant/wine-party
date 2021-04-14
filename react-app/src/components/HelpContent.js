import React from "react";
import "../components/styling/userHelpContentStyling.css";

const HelpContent = () => {
  return (
    <div className="user-help-content-container">
      <div className="user-help-title" style={{ fontWeight: "900" }}>Help</div>
      <div className="user-help-content"></div>
    </div>
  );
};
export default HelpContent;
