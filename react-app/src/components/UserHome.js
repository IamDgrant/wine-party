import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Profile from "../components/Profile";
import LogoutButton from "./auth/LogoutButton";
import DateTime from "../components/Date";
import "./styling/userHome.css";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="logo">Wine Party</div>
        <div className="center-main">
          <div className="date-bar flex">
            <DateTime />
          </div>
          <div className="homeCard">
            <div>
              <Profile />
            </div>
          </div>
        </div>
        <div className="logout">
        <div>
            <LogoutButton />
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
