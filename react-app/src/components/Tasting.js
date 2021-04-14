import React from "react";
import { useSelector } from "react-redux";
import LandingHeader from "../components/LandingPageHeader";
import MainHeader from "../components/MainHeader";
import TastingContent from "../components/TastingContent";
import "../components/styling/tastingStyling.css";

const Tasting = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <>
      <div className="main-tasting-container">
      {sessionUser ? (
          <div className="about-header">
            <MainHeader />
          </div>
        ) : (
          <div className="about-header">
            <LandingHeader />
          </div>
        )}
        <div className="tasting-contents">
          <TastingContent />
        </div>
      </div>
    </>
  );
};

export default Tasting;
