import React from "react";
import { NavLink } from "react-router-dom";
import "../components/styling/splashPageStyling.css";
import SignUpButton from "./auth/SignUpButton";
import LogInButton from "./auth/LoginButton";
// import logo from "./styling/images/imgbin_red-wine-champagne-wine-glass-png.png";

const SplashPage = () => {
  return (
    <div className="logo-container">
      <div>
        <NavLink to="login" className="text-link">
          Wine Party
        </NavLink>
      </div>
      <div>
        <SignUpButton />
      </div>
      <div>
        <LogInButton />
      </div>
    </div>
  );
};

export default SplashPage;
