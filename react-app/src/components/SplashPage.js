import React, { useState } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
// import NavBarLanding from "../components/NavBarLanding"
// import "../components/styling/splashPageStyle.css"
// import "antd/dist/antd.css";

const SplashPage = () => {
  return (
    <>
      <div className="main-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="content-container">
          <Content />
        </div>
        <div className="footer-container"></div>
      </div>
    </>
  );
};

export default SplashPage;
