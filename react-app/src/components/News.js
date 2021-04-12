import React from "react";
import LandingHeader from "../components/LandingPageHeader";
import NewsContent from "../components/NewsContent";
import "../components/styling/newsStyling.css";

const News = () => {
  return (
    <>
      <div className="main-news-container">
        <div className="news-header">
          <LandingHeader />
        </div>
        <div className="news-contents">
          <NewsContent />
        </div>
      </div>
    </>
  );
};

export default News;
