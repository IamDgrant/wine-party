import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import LogoutButton from "./auth/LogoutButton";

import "./styling/userHome.css";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="logo">Wine Party</div>
        <div className="main">
          <div className="main">
            <div className="homeCard">
              <HomeCard />
            </div>
          </div>
        </div>
        <div className="logout">
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default Home;
