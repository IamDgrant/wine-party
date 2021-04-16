import React from "react";
import MainHeader from "../components/MainHeader";
import DetailsContent from "../components/DetailsContent";
import "../components/styling/detailsStyling.css";

const Details = () => {
  return (
    <>
      <div className="main-details-container">
        <div className="details-contents">
          <DetailsContent />
        </div>
        <div className="details-header">
          <MainHeader />
        </div>
      </div>
    </>
  );
};

export default Details;
