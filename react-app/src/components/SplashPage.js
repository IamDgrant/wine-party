import React from "react";
// import { NavLink } from "react-router-dom";
// import { Row, Col } from "antd";
import SignUpButtonModal from "./auth/modals/WPSplashModal";
// import LogInButtonModal from "./auth/modals/LoginButtonModal";
import "../components/styling/splashPageStyle.css";

const SplashPage = () => {
  return (
    <>
      <div className="background-container">
        <div className="logo-container">
          <SignUpButtonModal />
        </div>
      </div>
    </>
  );
};

export default SplashPage;
