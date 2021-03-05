import React from "react";
// import { NavLink } from "react-router-dom";
// import { Row, Col } from "antd";
import SignUpButtonModal from "./auth/modals/SignUpButtonModal";
import LogInButtonModal from "./auth/modals/LoginButtonModal";
import "../components/styling/splashPageStyle.css";

const SplashPage = () => {
  return (
    <>
      <div className="background-container">
        <div className="logo-container">
          <div className="logo-text">
            <h1 className="text-link">Wine Party</h1>
          </div>
          <div className="button-container">
            <div className="px-1 splash-sign-btn ">
              <SignUpButtonModal />
            </div>
            <div className="splash-log-btn">
              <LogInButtonModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
