import React from "react";
import { useSelector } from "react-redux";
import LandingHeader from "../components/LandingPageHeader";
import UserMainHeader from "../components/UserMainHeader";
import TastingContent from "../components/TastingContent";
import Footer from "../components/Footer";
import "../components/styling/tastingStyling.css";

const Tasting = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <>
      <div className="main-tasting-container">
        {sessionUser ? (
          <div className="about-header">
            <UserMainHeader />
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
      <div className="user-footer-content">
        <Footer />
      </div>
    </>
  );
};

export default Tasting;
