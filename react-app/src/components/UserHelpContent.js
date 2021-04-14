import React from "react";
import { useSelector } from "react-redux";
import "../components/styling/helpContentStyling.css";

const HelpContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="user-help-content-container">
      <div className="user-help-title">Help</div>
      <div className="help-info-name">
        {sessionUser.first_name} {sessionUser.last_name}
      </div>
      <div className="profile-info-email">{sessionUser.email}</div>
      <div className="account-info"></div>
    </div>
  );
};
export default HelpContent;
