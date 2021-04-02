import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../components/styling/accountContentStyling.css";

const AccountContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="account-content-container">
      <div className="account-title">Account</div>
      <div ClassName="account-info-name">{sessionUser.first_name} {sessionUser.last_name}</div>
      <div ClassName="account-info-email">{sessionUser.email}</div>
      <div ClassName="account-info-profile"><NavLink to="/profile"></NavLink></div>
      <div className="account-info"></div>
    </div>
  );
};

export default AccountContent;
