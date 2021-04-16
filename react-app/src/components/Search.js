import React from "react";
import MainHeader from "../components/MainHeader";
import SearchContent from "../components/SearchContent";
import "../components/styling/searchStyling.css";

const Messages = () => {
  return (
    <>
      <div className="main-search-container">
        <div className="search-contents">
          <SearchContent />
        </div>
        <div className="search-header">
          <MainHeader />
        </div>
      </div>
    </>
  );
};

export default Messages;
