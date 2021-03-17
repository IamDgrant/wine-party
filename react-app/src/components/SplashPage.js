import React, { useState } from "react";
import Header from "../components/Header"
import Content from "../components/Content"
// import NavBarLanding from "../components/NavBarLanding"
// import "../components/styling/splashPageStyle.css"
// import "antd/dist/antd.css";

const SplashPage = () => {
  

  return (
    <>
      <div className="main-container">
        <Header />
        <Content />
        {/* <NavBarLanding /> */}
      </div>
    </>
  );
};

export default SplashPage;
