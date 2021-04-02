import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { Modal, Button } from "antd";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import "../components/styling/eventsHeader.css";
// import "../components/styling/buttonStyle.css";

const Header = () => {
  const [click, setClick] = useState(false);
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

  return (
    <>
      <div className="events">
        <div className="events-header">
          <NavLink to="/home">
            <div className="events-logo-container">Wine Party</div>
          </NavLink>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
