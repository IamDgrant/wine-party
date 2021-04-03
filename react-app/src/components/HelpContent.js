import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/styling/helpContentStyling.css";

const HelpContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="help-content-container">
      <div className="help-title">Help</div>
      <div ClassName="help-info-name">
        {sessionUser.first_name} {sessionUser.last_name}
      </div>
      <div ClassName="profile-info-email">{sessionUser.email}</div>
      <div className="account-info"></div>
    </div>
  );
};
export default HelpContent;
