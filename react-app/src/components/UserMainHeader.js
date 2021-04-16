import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { logout } from "../store/session";
// import { seeHost } from "../store/host";
import { Menu, Dropdown, Button } from "antd";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import img_placeholder from "../assets/images/empty-profile-picture-png.png";
import "../components/styling/userMainHeaderStyling.css";
import "../components/styling/buttonStyling.css";

const UserMainHeader = () => {
  const sessionUser = useSelector((state) => state.session.user);
  // const sessionHostId = useSelector((state) =>
  //   state.host.host ? state.host.host : null
  // );

  const [search, setSearch] = useState("");
  const [sommelier, setSommelier] = useState(false);
  const [mixologist, setMixologist] = useState(false);
  const [click, setClick] = useState(false);
  // const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    const user = await dispatch(logout());
    if (!user.ok) history.push("/");
  };

  const onSearch = async (e) => {
    e.preventDefault();
    history.push(
      `/search?search=${search}&sommelier=${sommelier}&mixologist=${mixologist}`
    );
  };

  const updateSearch = (e) => setSearch(e.target.value);
  const updateSommelier = () => setSommelier(!sommelier);
  const updateMixologist = () => setMixologist(!mixologist);

  // const clickAbout = () => {
  //   const anchor = document.querySelector("#Events");
  //   anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  // };

  // const clickTasting = () => {
  //   const anchor = document.querySelector("#Events");
  //   anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  // };

  // const clickStories = () => {
  //   const anchor = document.querySelector("#Events");
  //   anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  // };
  // const clickNews = () => {
  //   const anchor = document.querySelector("#Events");
  //   anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  // };

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
        <div className="user-main-header-container">
          
          <div className="inner-navbar-container">
            <div className="main-logo-container">
              <NavLink className="logo-nav" to="/home">
                Wine Party
              </NavLink>
            </div>
            <div className="navBar">
              <ul className={click ? "nav-options active" : "nav-options"}>
                <li className="option" onClick={closeMobileMenu}>
                  <NavLink exact to="/about">
                    <Button type="text" className="menu userNavBar-btn">
                      About
                    </Button>
                  </NavLink>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <NavLink exact to="/tasting">
                    <Button type="text" className="menu userNavBar-btn">
                      Virtual Tasting
                    </Button>
                  </NavLink>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <NavLink exact to="/stories">
                    <Button type="text" className="menu userNavBar-btn">
                      Wine Stories
                    </Button>
                  </NavLink>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <NavLink exact to="/news">
                    <Button type="text" className="menu userNavBar-btn">
                      News
                    </Button>
                  </NavLink>
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
          </div>
          <div className="search-form">
            <form
              className="form"
              onSubmit={onSearch}
              style={{ border: "1px black solid" }}
            >
              <input
                value={search}
                onChange={updateSearch}
                type="search"
                className="search-input"
                placeholder="Search name, city, state, postal code..."
              />
              <button type="submit" className="search-button">
                <svg className="submit-button">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="svg-inline--fa fa-search fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </svg>
              </button>
              <div className="search-option">
                <div>
                  <input
                    checked={sommelier}
                    onChange={updateSommelier}
                    name="type"
                    type="checkbox"
                    value="type-somm"
                    id="type-somm"
                  />
                  <label htmlFor="type-somm">
                    <span className="search-check">Sommelier</span>
                  </label>
                </div>
                <div>
                  <input
                    checked={mixologist}
                    onChange={updateMixologist}
                    name="type"
                    type="checkbox"
                    value="type-mix"
                    id="type-mix"
                  />
                  <label htmlFor="type-mix">
                    <span className="search-check">Mixologist</span>
                  </label>
                </div>
              </div>
            </form>
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
