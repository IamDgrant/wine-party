import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { photoUpload } from "../store/session";
import { Menu, Dropdown, Button } from "antd";
// import {DownOutlined } from "@ant-design/icons";
import LogoutButton from "../components/auth/LogoutButton";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";

import "../components/styling/eventsHeader.css";
// import "../components/styling/buttonStyle.css";

const Header = () => {
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

  // useEffect(() => {
  //   dispatch(browseAllHost());
  // }, [dispatch]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //   const showSignInModal = () => {
  //     setIsSignInModalVisible(true);
  //   };

  //   const signInHandleOk = () => {
  //     onSignIn();
  //     setIsSignInModalVisible(false);
  //   };

  //   const signInHandleCancel = () => {
  //     setIsSignInModalVisible(false);
  //   };

  //   const showSignUpModal = () => {
  //     setIsisSignUpModalVisible(true);
  //   };

  //   const signUpHandleOk = () => {
  //     onSignUp();
  //     setIsisSignUpModalVisible(false);
  //   };

  //   const signUpHandleCancel = () => {
  //     setIsisSignUpModalVisible(false);
  //   };
  const userMenu = (
    <Menu>
      <Menu.Item>
        <Button type="link">Messages</Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="link">Events</Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="link">Favorites</Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="link">Help</Button>
      </Menu.Item>
      <div className="line-break"></div>
      <Menu.Item>
        <Button type="link">Account</Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="link">Log out</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    sessionUser && (
      <div className="events">
        <div className="events-header">
          <div className="events-logo-container">
            <NavLink to="/home">Wine Party</NavLink>
          </div>
          <div className="user-menu">
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <Button
                className="profile_button"
                shape="circle"
                type="primary"
                onClick={(e) => e.preventDefault()}
              >
                <p>{sessionUser.profile_image}</p>
              </Button>
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

export default Header;
