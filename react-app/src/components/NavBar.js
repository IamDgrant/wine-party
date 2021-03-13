import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DateTime from "../components/Date";
// import { Menu, Dropdown, Modal, Button } from "antd";
// import { NavLink } from "react-router-dom";
// import Search from "../components/Search";
// import LogoutButton from "../components/auth/LogoutButton";
// import { profileImage } from "../store/session";
import "./styling/navBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <div className="navBar">
        <div className="logo">
          Wine Party
        </div>
        <div className="todays-date">
          <DateTime />
        </div>
        <div className="profile">Profile</div>
      </div>
    </>
  );
};

export default NavBar;
