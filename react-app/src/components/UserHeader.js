import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DateTime from "./Date";
import {
  PlusCircleOutlined,
  UserOutlined,
  DownOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Avatar, Input, Menu, Dropdown } from "antd";
import LogoutButton from "./auth/LogoutButton";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
// import { Menu, Dropdown, Modal, Button } from "antd";
// import { NavLink } from "react-router-dom";
// import Search from "../components/Search";
// import LogoutButton from "../components/auth/LogoutButton";
// import { profileImage } from "../store/session";
// import "./styling/navBar.css";

const UserHeader = () => {
  const [click, setClick] = useState(false);
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
  const [isSignUpModalVisible, setIsisSignUpModalVisible] = useState(false);

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const dayDate = new Date().toLocaleTimeString("en-us", options).split(",");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">Wine Party</div>

          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option menu" onClick={closeMobileMenu}>
              {dayDate[0]}, {dayDate[1]}
            </li>
            <li className="option menu" onClick={closeMobileMenu}>
              {/* <a href="#">FIND A HOST</a> */}
            </li>
            <li className="option menu" onClick={closeMobileMenu}>
              {/* <a href="#">FAQ</a> */}
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}></li>
            <li className="option mobile-option" onClick={closeMobileMenu}></li>
          </ul>
        </div>
        <ul className="signin-up">
          <li className="sign-in" onClick={closeMobileMenu}></li>
          <li onClick={closeMobileMenu}></li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" style={{ fill: "#f9fbf2" }} />
          ) : (
            //   <MenuIcon className="menu-icon" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f9fbf2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default UserHeader;
