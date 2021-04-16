import React from "react";
import { useSelector } from "react-redux";
import LandingHeader from "../components/LandingPageHeader";
import UserMainHeader from "../components/UserMainHeader";
import NewsContent from "../components/NewsContent";
import Footer from "../components/Footer";

import "../components/styling/newsStyling.css";

const News = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <>
      <div className="main-news-container">
        <div className="news-contents">
          <NewsContent />
        </div>
        {sessionUser ? (
          <div className="about-header">
            <UserMainHeader />
          </div>
        ) : (
          <div className="about-header">
            <LandingHeader />
          </div>
        )}
      </div>
      <div className="user-footer-content">
        <Footer />
      </div>
    </>
  );
};

export default News;
