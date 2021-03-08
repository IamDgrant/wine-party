import React from "react";
import SignupButtonModal from "./auth/modals/SignupButtonModal";
import LoginButtonModal from "./auth/modals/LoginButtonModal";
import "../components/styling/splashPageStyle.css";

const SplashPage = () => {
  return (
    <>
      <div className="logo-top-container">
        <div className="logo">Wine Party➤</div>
        <div className="buttons-container">
          <SignupButtonModal />
          <LoginButtonModal />
        </div>
      </div>
    </>
  );
};

export default SplashPage;
