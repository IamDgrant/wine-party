import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import Header from "../components/Header";
import Content from "../components/Content";

const SplashPage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position);
  //   });
  // }, [dispatch]);

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
