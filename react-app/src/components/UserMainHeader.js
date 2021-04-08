import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { logout } from "../store/session";
import { seeHost } from "../store/host";
import { Menu, Dropdown, Button, message } from "antd";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import img_placeholder from "../assets/images/empty-profile-picture-png.png";
import "../components/styling/userMainHeaderStyling.css";
import "../components/styling/buttonStyling.css"

const UserMainHeader = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const sessionHostId = useSelector((state) =>
    state.host.host ? state.host.host : null
  );

  const [search, setSearch] = useState("");
  const [sommelier, setSommelier] = useState(false);
  const [mixologist, setMixologist] = useState(false);
  const [click, setClick] = useState(false);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    const user = await dispatch(logout());
    if (!user.ok) history.push("/");
  };

  const onSearch = async (e) => {
    e.preventDefault();
    dispatch(seeHost(search, sommelier, mixologist, sessionHostId)).then(
      (res) => {
        if (res.Host === "Not found") {
          message.error(`User ${search} not found`);
        } else {
          history.push("/search");
          // message.success(`User ${search} added to Event!`);
        }
        // if (res.hosts) history.push("/search");
      }
    );
  };

  const updateSearch = (e) => setSearch(e.target.value);
  const updateSommelier = () => setSommelier(!sommelier);
  const updateMixologist = () => setMixologist(!mixologist);

  const clickAbout = () => {
    const anchor = document.querySelector("#Events");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const clickTasting = () => {
    const anchor = document.querySelector("#Events");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const clickStories = () => {
    const anchor = document.querySelector("#Events");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const clickNews = () => {
    const anchor = document.querySelector("#Events");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // useEffect(() => {
  //   dispatch(browseAllHost());
  // }, [dispatch]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const userMenu = (
    <Menu>
      <Menu.Item>
        <NavLink exact to="/events">
          <Button className="antd-btn" type="link">
            Events
          </Button>
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/messages">
          <Button className="antd-btn" type="link">
            Messages
          </Button>
        </NavLink>
      </Menu.Item>

      <Menu.Item>
        <NavLink exact to="/favorites">
          <Button className="antd-btn" type="link">
            Favorites
          </Button>
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/help">
          <Button className="antd-btn" type="link">
            Help
          </Button>
        </NavLink>
      </Menu.Item>
      <div className="line-break"></div>
      <Menu.Item>
        <NavLink exact to="/account">
          <Button className="antd-btn" type="link">
            Account
          </Button>
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <Button className="antd-btn" type="link" onClick={onLogout}>
          Log out
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    sessionUser && (
      <div className="user-main-header-container">
        <div className="user-main-logo-container">Wine Party</div>
        <div className="navBar">
          <ul
            className={click ? "nav-options active" : "nav-options"}
          >
            <li className="option" onClick={closeMobileMenu}>
              <Button
                type="text"
                onClick={clickAbout}
                className="menu userNavBar-btn"
              >
                About
              </Button>
            </li>
            <li
              className="option"
              onClick={closeMobileMenu}
            >
              <Button
                type="text"
                onClick={clickTasting}
                className="menu userNavBar-btn"
              >
                Virtual Tasting
              </Button>
            </li>
            <li
              className="option"
              onClick={closeMobileMenu}
            >
              <Button
                type="text"
                onClick={clickStories}
                className="menu userNavBar-btn"
              >
                Wine Stories
              </Button>
            </li>
            <li
              className="option"
              onClick={closeMobileMenu}
            >
              <Button
                type="text"
                onClick={clickNews}
                className="menu userNavBar-btn"
              >
                News
              </Button>
            </li>
          </ul>
        </div>
        <div className="dropdown-container">
          <div className="dropdown-inner-container">
            <Dropdown
              className="antd-drop"
              style={{ width: "25vw" }}
              overlay={userMenu}
              trigger={["click"]}
            >
              <div className="button-container">
                <Button
                  className="profile-button"
                  shape="circle"
                  type="primary"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="inner-img-container">
                    {sessionUser.profile_image != null ? (
                      <img
                        src={sessionUser.profile_image}
                        alt="UserPhoto"
                        className="small-profile-pic"
                      ></img>
                    ) : (
                      <img
                        src={img_placeholder}
                        alt="Avatar"
                        className="small-profile-pic"
                      ></img>
                    )}
                  </div>
                </Button>
              </div>
            </Dropdown>
          </div>
        </div>

        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    )
  );
};

export default UserMainHeader;
