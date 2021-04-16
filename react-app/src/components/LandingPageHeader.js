import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { login, createUser } from "../store/session";
// import { seeHost } from "../store/host";
import SignUpForm from "./auth/forms/SignUpForm";
import LoginForm from "./auth/forms/LoginForm";
import { Menu, Dropdown, Button, Modal, message } from "antd";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import img_placeholder from "../assets/images/empty-profile-picture-png.png";
import "../components/styling/userMainHeaderStyling.css";
import "../components/styling/buttonStyling.css";

const LandingHeader = () => {
  // const sessionUser = useSelector((state) => state.session.user);

  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors] = useState([]);
  const [click, setClick] = useState(false);

  // console.log(isSignInModalVisible);

  const dispatch = useDispatch();

  const emailErrors = () => {
    message.error("You must provide valid email address!");
  };
  const signUpPasswordErrors = () => {
    message.error("Password length must be at least 4 characters!");
  };
  const signInPasswordErrors = () => {
    message.error("Password field cannot be empty!");
  };
  const first_nameErrors = () => {
    message.error("First name field cannot be empty!");
  };
  const last_nameErrors = () => {
    message.error("Last name field cannot be empty!");
  };
  const cityErrors = () => {
    message.error("City name field cannot be empty!");
  };
  const stateErrors = () => {
    message.error("State name field cannot be empty!");
  };
  const postal_codeErrors = () => {
    message.error("Postal Code name field cannot be empty!");
  };

  const onSignUp = async () => {
    if (
      signUpEmail.length < 6 ||
      signUpEmail.indexOf("@") === -1 ||
      signUpEmail.indexOf(".") === -1
    ) {
      emailErrors();
      return;
    }
    if (signUpPassword.length < 4) {
      signUpPasswordErrors();
      return;
    }
    if (first_name.length < 1) {
      first_nameErrors();
      return;
    }
    if (last_name.length < 1) {
      last_nameErrors();
      return;
    }
    if (city.length < 1) {
      cityErrors();
      return;
    }
    if (state.length < 1) {
      stateErrors();
      return;
    }
    if (postal_code.length < 5) {
      postal_codeErrors();
      return;
    } else if (signUpPassword === repeatPassword) {
      dispatch(
        createUser({
          first_name,
          last_name,
          city,
          state,
          postal_code,
          signUpEmail,
          signUpPassword,
          repeatPassword,
        })
      );
    }
  };

  const onSignIn = async () => {
    if (
      signInEmail.length < 6 ||
      signInEmail.indexOf("@") === -1 ||
      signInEmail.indexOf(".") === -1
    ) {
      emailErrors();
      return;
    }
    if (signInPassword.length < 1) {
      signInPasswordErrors();
      return;
    }
    await dispatch(login(signInEmail, signInPassword));
  };

  const showSignInModal = () => {
    setIsSignInModalVisible(true);
  };

  const signInHandleOk = () => {
    onSignIn();
    setIsSignInModalVisible(false);
  };

  const signInHandleCancel = () => {
    console.log("HITTING");
    setIsSignInModalVisible(false);
  };

  const showSignUpModal = () => {
    setIsSignUpModalVisible(true);
  };

  const signUpHandleOk = () => {
    onSignUp();
    setIsSignUpModalVisible(false);
  };

  const signUpHandleCancel = () => {
    setIsSignUpModalVisible(false);
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    return dispatch(login("demo@wineparty.com", "password"));
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const userMenu = (
    <Menu>
      <Menu.Item onClick={showSignInModal}>
        <Button
          className="antd-btn"
          htmlType="submit"
          type="link"
          size="small"
          // ghost="true"
          onClick={showSignInModal}
        >
          Log in
        </Button>
        <Modal
          okText="Sign in"
          title="Sign in"
          visible={isSignInModalVisible}
          // onOk={signInHandleOk}
          onCancel={signInHandleCancel}
          footer={[
            <Button key="back" onClick={demoLogin}>
              Demo User
            </Button>,
            <Button
              key="link"
              type="primary"
              // loading={loading}
              onClick={signInHandleCancel}
            >
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={signInHandleOk}>
              Log in
            </Button>,
          ]}
        >
          <LoginForm
            signInEmail={signInEmail}
            setSignInEmail={setSignInEmail}
            signInPassword={signInPassword}
            setSignInPassword={setSignInPassword}
            errors={errors}
          />
        </Modal>
      </Menu.Item>
      <Menu.Item>
        <Button
          className="antd-btn"
          type="link"
          htmlType="submit"
          size="small"
          // ghost="true"
          onClick={showSignUpModal}
        >
          Sign up
        </Button>
        <Modal
          title="Sign up"
          okText="Sign up"
          visible={isSignUpModalVisible}
          // onOk={signUpHandleOk}
          onCancel={signUpHandleCancel}
          footer={[
            <Button key="back" onClick={demoLogin}>
              Demo User
            </Button>,
            <Button
              key="link"
              type="primary"
              // loading={loading}
              onClick={signUpHandleCancel}
            >
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              // loading={loading}
              onClick={signUpHandleOk}
            >
              Sign up
            </Button>,
          ]}
        >
          <SignUpForm
            first_name={first_name}
            setFirstName={setFirstName}
            last_name={last_name}
            setLastName={setLastName}
            city={city}
            setCity={setCity}
            state={state}
            setState={setState}
            postal_code={postal_code}
            setPostalCode={setPostalCode}
            signUpEmail={signUpEmail}
            setSignUpEmail={setSignUpEmail}
            signUpPassword={signUpPassword}
            setSignUpPassword={setSignUpPassword}
            repeatPassword={repeatPassword}
            setRepeatPassword={setRepeatPassword}
            errors={errors}
          />
        </Modal>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/help">
          <Button className="antd-btn" type="link">
            Help
          </Button>
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="landing-main-header-container">
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
                  <div className="avatar-img">
                    <img
                      src={img_placeholder}
                      alt="Avatar"
                      className="small-profile-pic"
                    />
                  </div>
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
  );
};

export default LandingHeader;
