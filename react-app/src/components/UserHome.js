import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import NavBar from "../components/NavBar";
import "./styling/userHome.css";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="homeCard">
          <HomeCard />
        </div>
      </div>
    </>
  );
};

export default Home;
