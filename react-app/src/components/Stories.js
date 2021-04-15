import React from "react";
import { useSelector } from "react-redux";
import LandingHeader from "../components/LandingPageHeader";
import UserMainHeader from "../components/UserMainHeader";
import StoriesContent from "../components/StoriesContent";
import Footer from "../components/Footer";
import "../components/styling/storiesStyling.css";

const Stories = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <>
      <div className="main-stories-container">
        {sessionUser ? (
          <div className="about-header">
            <UserMainHeader />
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
      <div className="user-footer-content">
        <Footer />
      </div>
    </>
  );
};

export default Stories;
