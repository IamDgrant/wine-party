import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/styling/landingPageContentStyling.css";

const LandingPageContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="landing-content-container">
      <div className="landing-title"></div>
      <div className="landing-info-name">Hi</div>
      <div className="Landing-info-email"></div>
      <div className="Landing-info"></div>
    </div>
  );
};
export default LandingPageContent;
