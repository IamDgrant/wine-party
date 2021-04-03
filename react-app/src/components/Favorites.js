import React from "react";
import MainHeader from "../components/MainHeader";
import FavoritesContent from "../components/FavoritesContent";
import "../components/styling/favoritesStyling.css";

const Favorites = () => {
  return (
    <>
      <div className="main-favorites-container">
        <div className="favorites-header">
          <MainHeader />
        </div>
        <div className="favorites-contents">
          <FavoritesContent />
        </div>
      </div>
    </>
  );
};

export default Favorites;
