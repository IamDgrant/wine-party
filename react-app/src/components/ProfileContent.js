import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../components/styling/profileContentStyling.css";

const ProfileContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="profile-content-container">
      <div className="profile-title">Profile</div>
      <div ClassName="profile-info-name">
        {sessionUser.first_name} {sessionUser.last_name}
      </div>
      <div ClassName="profile-info-email">{sessionUser.email}</div>
      <div className="account-info"></div>
    </div>
  );
};
export default ProfileContent;
