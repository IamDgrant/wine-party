import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { photoUpload, logout } from "../store/session";
import { Menu, Dropdown, Button } from "antd";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import img_placeholder from "../assets/images/empty-profile-picture-png.png";
import "../components/styling/mainHeaderStyling.css";

const MainHeader = () => {
  const [click, setClick] = useState(false);
  const [photoFile, setPhotoFile] = useState();
  const [projects, setProjects] = useState();
  const [bio, setBio] = useState("visible");

  const sessionUser = useSelector((state) => state.session.user);
  const [photoUrl, setPhotoUrl] = useState(
    sessionUser ? sessionUser.photoUrl : ""
  );

  //   const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
  //   const [isSignUpModalVisible, setIsisSignUpModalVisible] = useState(false);
  //   const [first_name, setFirstName] = useState("");
  //   const [last_name, setLastName] = useState("");
  //   const [city, setCity] = useState("");
  //   const [state, setState] = useState("");
  //   const [postal_code, setPostalCode] = useState("");
  //   const [signInEmail, setSignInEmail] = useState("");
  //   const [signUpEmail, setSignUpEmail] = useState("");
  //   const [signInPassword, setSignInPassword] = useState("");
  //   const [signUpPassword, setSignUpPassword] = useState("");
  //   const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  function handleUpload(e) {
    setPhotoFile(e.target.files[0]);
  }

  const submit = (e) => {
    e.preventDefault();
    dispatch(photoUpload(photoFile)).then((res) => {
      setPhotoUrl(res.url);
    });
  };

  const onLogout = async (e) => {
    const user = await dispatch(logout());
    if (!user.ok) history.push("/");
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
      <div className="main-header-container">
        <div className="main-logo-container">
          <NavLink className="logo-nav" to="/home">
            Wine Party
          </NavLink>
        </div>
        <div className="user-menu">
          <Dropdown
            className="antd-drop"
            overlay={userMenu}
            trigger={["click"]}
          >
            <Button
              className="profile_button"
              shape="circle"
              type="primary"
              onClick={(e) => e.preventDefault()}
            >
              <div className="user-image">
                {" "}
                {sessionUser.profile_image != null ? (
                  <img
                    src={sessionUser.profile_image}
                    alt="UserPhoto"
                    className=""
                  ></img>
                ) : (
                  <img
                    src={img_placeholder}
                    alt="Avatar"
                    className="img_placeholder"
                  ></img>
                )}
              </div>
            </Button>
          </Dropdown>
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
