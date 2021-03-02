import React from "react";
import { NavLink } from "react-router-dom";
import "../components/styling/splashPageStyle.css";
import SignUpButtonModal from "./auth/modals/SignUpButtonModal";
import LogInButtonModal from "./auth/modals/LoginButtonModal";

const SplashPage = () => {
  return (
    <div className="logo-container">
      <div>
        <NavLink to="signup" className="text-link">
          Wine Party
        </NavLink>
      </div>
      <div className="signUp-btn">
        <SignUpButtonModal />
      </div>
      <div className="logIn-btn"> 
        <LogInButtonModal />
      </div>
      <div></div>
    </div>
  );
};

export default SplashPage;
