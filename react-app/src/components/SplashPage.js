import React, { useState } from "react";
import NavBarLanding from "../components/NavBarLanding"
import "../components/styling/splashPageStyle.css"
import "antd/dist/antd.css";

const SplashPage = () => {
  

  return (
    <>
      <div className="main-container">
        <NavBarLanding />
      </div>
    </>
  );
};

export default SplashPage;
