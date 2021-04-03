import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/styling/favoritesContentStyling.css";

const FavoritesContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="favorite-content-container">
      <div className="favorite-title">Favorites</div>
      <div ClassName="favorite-info-name">
        {sessionUser.first_name} {sessionUser.last_name}
      </div>
      <div ClassName="profile-info-email">{sessionUser.email}</div>
      <div className="account-info"></div>
    </div>
  );
};
export default FavoritesContent;
