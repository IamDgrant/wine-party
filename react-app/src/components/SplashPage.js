import React from "react";
import SignupButtonModal from "./auth/modals/SignupButtonModal";
import LoginButtonModal from "./auth/modals/LoginButtonModal";
import "../components/styling/splashPageStyle.css";

const SplashPage = () => {
  return (
    <>
      <div className="top-logo-container">
        <div className="logo-container">
          <div className="logo-inner">Wine Party➤</div>
        </div>
        <div className="buttons-container">
          <div className="signup">
            <SignupButtonModal />
          </div>
          <div className="login">
            <LoginButtonModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
