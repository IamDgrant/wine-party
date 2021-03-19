import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import DateTime from "./Date";
// import Date from "../components/Date";
import AddEventModal from "../components/auth/modals/AddEventModal";
import SearchForm from "../components/forms/SearchHostForm";
import { seeHost } from "../store/host";
import { message } from "antd";
// import {
//   PlusCircleOutlined,
//   UserOutlined,
//   DownOutlined,
//   SmileOutlined,
// } from "@ant-design/icons";
import { Avatar, Modal, Button } from "antd";
import LogoutButton from "./auth/LogoutButton";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import "../components/styling/userHeader.css";
// import { Menu, Dropdown, Modal, Button } from "antd";
// import { NavLink } from "react-router-dom";
// import Search from "../components/Search";
// import LogoutButton from "../components/auth/LogoutButton";
// import { profileImage } from "../store/session";
// import "./styling/navBar.css";

const UserHeader = () => {
  const [click, setClick] = useState(false);
  const [isFindHostModalVisible, setIsFindHostModalVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [sommelier, setSommelier] = useState(false);
  const [mixologist, setMixologist] = useState(false);
  const sessionHostId = useSelector((state) =>
    state.host.host ? state.host.host : null
  );
  // const updateSommelier = () => setSommelier(!sommelier);
  // const updateMixologist = () => setMixologist(!mixologist);

  const onSearch = async (e) => {
    // e.preventDefault();
    dispatch(seeHost(search, sommelier, mixologist, sessionHostId)).then(
      (res) => {
        if (res.Host === "Not found") {
          message.error(`User ${search} not found`);
        }
        // else {
        //   message.success(`User ${search} added to Event!`);
        // }
      }
    );
  };

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

  const showFindHostModal = () => {
    setIsFindHostModalVisible(true);
  };

  const findHostHandleOk = () => {
    onSearch();
    setIsFindHostModalVisible(false);
  };

  const findHostHandleCancel = () => {
    setIsFindHostModalVisible(false);
  };

  return (
    <>
      <div className="user-header">
        <div className="user-logo-nav">
          <div className="user-logo-container">Wine Party</div>
          <div className="find-host">
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option user-menu" onClick={closeMobileMenu}>
                <Button
                  htmlType="submit"
                  type="primary"
                  size="medium"
                  style={{
                    color: "#0e1c36",
                    backgroundColor: "#f9fbf2",
                    borderColor: "#f9fbf2",
                  }}
                  onClick={showFindHostModal}
                >
                  Find a Host
                </Button>
                <Modal
                  title="Find a Host"
                  visible={isFindHostModalVisible}
                  onOk={findHostHandleOk}
                  onCancel={findHostHandleCancel}
                >
                  <SearchForm
                    search={search}
                    setSearch={setSearch}
                    sommelier={sommelier}
                    setSommelier={setSommelier}
                    mixologist={mixologist}
                    setMixologist={setMixologist}
                  />
                </Modal>
              </li>
              <li>
                <AddEventModal />
              </li>
              <li className="welcome">
                <div className="welcome">
                  Welcome, {sessionUser.first_name}! Today is {dayDate[0]},{" "}
                  {dayDate[1]}.
                </div>
              </li>
              <li className="option menu date" onClick={closeMobileMenu}>
                {dayDate[0]}, {dayDate[1]}
              </li>
              <li
                className="option mobile-option"
                onClick={closeMobileMenu}
              ></li>
              <li
                className="option mobile-option"
                onClick={closeMobileMenu}
              ></li>
              <div className="option menu logout">
                {/* <li className="option menu logout" onClick={closeMobileMenu}> */}
                <LogoutButton />
                {/* </li> */}
              </div>
            </ul>
          </div>
          <ul className="signin-up">
            <li className="sign-in" onClick={closeMobileMenu}></li>
            <li onClick={closeMobileMenu}></li>
          </ul>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" style={{ fill: "#f9fbf2" }} />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </>
  );
};

export default UserHeader;
