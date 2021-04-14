import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { logout } from "../store/session";
import { Menu, Dropdown, Button } from "antd";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import img_placeholder from "../assets/images/empty-profile-picture-png.png";
import "../components/styling/mainHeaderStyling.css";

const MainHeader = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [click, setClick] = useState(false);
  // const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    const user = await dispatch(logout());
    if (!user.ok) history.push("/");
  };

  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

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
        <NavLink exact to="/userhelp">
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
      <div className="main-header-container">
        <div className="main-logo-container">
          <NavLink className="logo-nav" to="/home">
            Wine Party
          </NavLink>
        </div>
        <div className="dropdown-container">
          <div className="dropdown-inner-container">
            <Dropdown
              className="antd-drop"
              style={{width: "25vw"}}
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

export default MainHeader;
