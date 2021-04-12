import React from "react";
import LandingHeader from "../components/LandingPageHeader";
import TastingContent from "../components/TastingContent";
import "../components/styling/tastingStyling.css";

const Tasting = () => {
  return (
    <>
      <div className="main-tasting-container">
        <div className="tasting-header">
          <LandingHeader />
        </div>
        <div className="tasting-contents">
          <TastingContent />
        </div>
      </div>
    </>
  );
};

export default Tasting;
