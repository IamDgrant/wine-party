import React from "react";
import MainHeader from "../components/MainHeader";
import FavoritesContent from "../components/FavoritesContent";
import Footer from "../components/Footer";
import "../components/styling/favoritesStyling.css";

const Favorites = () => {
  return (
    <>
      <div className="main-favorites-container">
        <div className="favorites-contents">
          <FavoritesContent />
        </div>
        <div className="favorites-header">
          <MainHeader />
        </div>
      </div>
      <div className="user-footer-content">
        <Footer />
      </div>
    </>
  );
};

export default Favorites;
