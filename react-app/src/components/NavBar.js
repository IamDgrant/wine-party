import React, { useState } from "react";
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

  const { Search } = Input;
  const onSearch = value => console.log(value);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );


  return (
    <>
      <div className="navBar">
        <div className="logo">Wine Party</div>
        {/* <div className="search"> <Search placeholder="Search..." onSearch={onSearch} style={{ width: 200 }} /></div> */}
        <div className="todays-date">
          <DateTime />
        </div>
        <div className="create-event-button">
          <button className="create-button">
            <div
              className="circle-plus"
              style={{ fontSize: "3vh", color: "#303c6c" }}
            >
              <PlusCircleOutlined />
            </div>
            <div className="create-text">Add Party</div>
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
