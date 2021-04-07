import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import home_bg from "../assets/images/pexels-cottonbro-3171837.jpg";
import UserMainHeader from "../components/UserMainHeader";
import UserHomeContent from "../components/UserHomeContent";

import "./styling/userHome.css";

const Home = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <div>
        <div className="main-user-container">
          <div className="content-header">
            <UserMainHeader />
          </div>
          <div className="user-content">
            <UserHomeContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
