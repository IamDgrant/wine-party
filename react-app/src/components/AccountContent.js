import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/styling/accountContentStyling.css";

const AccountContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="account-content-container">
      <div className="account-title">Account</div>
      <div className="account-info"></div>
    </div>
  );
};

export default AccountContent;
