import React from "react";
import { useSelector } from "react-redux";
import "../components/styling/favoritesContentStyling.css";

const FavoritesContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="favorite-content-container">
      <div className="favorite-title">Favorites</div>
      <div className="favorite-info-name">
        {sessionUser.first_name} {sessionUser.last_name}
      </div>
      <div className="profile-info-email">{sessionUser.email}</div>
      <div className="account-info"></div>
    </div>
  );
};
export default FavoritesContent;
