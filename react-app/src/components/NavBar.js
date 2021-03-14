import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DateTime from "../components/Date";
import { PlusCircleOutlined, UserOutlined, DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Avatar, Input, Menu, Dropdown } from "antd";
// import { Menu, Dropdown, Modal, Button } from "antd";
// import { NavLink } from "react-router-dom";
// import Search from "../components/Search";
// import LogoutButton from "../components/auth/LogoutButton";
// import { profileImage } from "../store/session";
import "./styling/navBar.css";

const NavBar = () => {
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


  return (
    <>
      <div className="navBar">
        <div className="logo">Wine Party</div>
        {/* <div className="search"> <Search placeholder="Search..." onSearch={onSearch} style={{ width: 200 }} /></div> */}
        <div className="todays-date">
        {dayDate[0]}, {dayDate[1]}
        </div>
        <div className="create-event-button">




          
          <button className="create-button">
            <div
              className="circle-plus"
              style={{ fontSize: "3vh", color: "#303c6c" }}
            >
              <PlusCircleOutlined />
            </div>
            <div className="create-text">Add Your Party</div>
          </button>
        </div>
        <div className="profile">
        <Avatar size="large" style={{ fontSize: "5vh",
              backgroundColor: "#303c6c",
            }}icon={<UserOutlined />} />
        </div>
        {/* <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Click me <DownOutlined />
    </a>
  </Dropdown> */}
      </div>
    </>
  );
};

export default NavBar;
