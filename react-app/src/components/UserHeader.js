import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
// import DateTime from "./Date";
// import Date from "../components/Date";
import FindHost from "../components/FindHost";
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
import SearchIcon from "../assets/icons/search-solid.svg";

const UserHeader = () => {
  const history = useHistory();

  const [click, setClick] = useState(false);
  const [isFindHostModalVisible, setIsFindHostModalVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [sommelier, setSommelier] = useState(false);
  const [mixologist, setMixologist] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const [date, setDate] = useState(new Date());
  const sessionHostId = useSelector((state) =>
    state.host.host ? state.host.host : null
  );

  const dispatch = useDispatch();
  // const updateSommelier = () => setSommelier(!sommelier);
  // const updateMixologist = () => setMixologist(!mixologist);

  const onSearch = async (e) => {
    console.log("SEARCH HIT");
    // e.preventDefault();
    dispatch(seeHost(search, sommelier, mixologist, sessionHostId)).then(
      (res) => {
        console.log("here!!!!!", res);
        if (res.Host === "Not found") {
          message.error(`User ${search} not found`);
        } else {
          // message.success(`User ${search} added to Event!`);
        }
        if (res.hosts) history.push("/search");
      }
    );
  };

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
          <div className="nav">
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <FindHost />
              </li>
              <li className="option">
                <AddEventModal />
              </li>
              {/* <li className="welcome">
                <div className="welcome">
                  Welcome, {sessionUser.first_name}! Today is {dayDate[0]},{" "}
                  {dayDate[1]}.
                </div>
              </li> */}
              {/* <li className="option menu date" onClick={closeMobileMenu}>
                {dayDate[0]}, {dayDate[1]}
              </li> */}
              <li
                className="option mobile-option"
                onClick={closeMobileMenu}
              ></li>
              <li
                className="option mobile-option"
                onClick={closeMobileMenu}
              ></li>
              <div className="option menu logout ">
                {/* <li className="option menu logout" onClick={closeMobileMenu}> */}
                {/* <LogoutButton /> */}
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
      <div className="background-image">
        <div className="search-form">
          <form class="form">
            <input
              type="search"
              className="search-input"
              placeholder="Search name, city, state, postal code..."
            />
            <button type="submit" class="search-button">
              <svg class="submit-button">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  class="svg-inline--fa fa-search fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </svg>
            </button>
            <div class="search-option">
              <div>
                <input
                  name="type"
                  type="checkbox"
                  value="type-somm"
                  id="type-somm"
                />
                <label for="type-somm">
                  <span>Sommelier</span>
                </label>
              </div>

              <div>
                <input
                  name="type"
                  type="checkbox"
                  value="type-mix"
                  id="type-mix"
                />
                <label for="type-mix">
                  <span>Mixologist</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="search-container"></div>
    </>
  );
};

export default UserHeader;
