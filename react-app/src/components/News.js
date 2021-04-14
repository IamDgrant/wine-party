import React from "react";
import { useSelector } from "react-redux";
import LandingHeader from "../components/LandingPageHeader";
import MainHeader from "../components/MainHeader";
import NewsContent from "../components/NewsContent";
import "../components/styling/newsStyling.css";

const News = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <>
      <div className="main-news-container">
        {sessionUser ? (
          <div className="about-header">
            <MainHeader />
          </div>
        ) : (
          <div className="about-header">
            <LandingHeader />
          </div>
        )}
        <div className="news-contents">
          <NewsContent />
        </div>
      </div>
    </>
  );
};

export default News;
