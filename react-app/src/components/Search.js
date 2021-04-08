import React from "react";
import MainHeader from "../components/MainHeader";
import SearchContent from "../components/SearchContent";
import RandomHost from "../components/RandomHostCard";
import "../components/styling/searchStyling.css";

const Messages = () => {
  return (
    <>
      <div className="main-search-container">
        <div className="search-header">
          <MainHeader />
        </div>
        <div className="search-contents">
          <SearchContent />
          {/* <RandomHost /> */}
        </div>
      </div>
    </>
  );
};

export default Messages;
