import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, createUser } from "../store/session";
import SignUpForm from "./forms/SignUpForm";
import LoginForm from "./forms/LoginForm";
import { Modal, Button } from "antd";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
// import { ReactComponent as Logo } from "../assets/logo.svg";
import "../components/styling/header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
  const [isSignUpModalVisible, setIsisSignUpModalVisible] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onSignUp = async (e) => {
    // e.preventDefault();
    let newErrors = [];
    if (password === repeatPassword) {
      dispatch(
        createUser({
          first_name,
          last_name,
          city,
          state,
          postal_code,
          email,
          password,
          repeatPassword,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          // setErrors(newErrors);
        }
      });
    }
  };

  const onSignIn = async () => {
    const user = await dispatch(login(email, password));
    if (user.ok) history.push("/");
    // setShowModal(false);
  };

  const showSignInModal = () => {
    setIsSignInModalVisible(true);
  };

  const signInHandleOk = () => {
    onSignIn();
    setIsSignInModalVisible(false);
  };

  const signInHandleCancel = () => {
    setIsSignInModalVisible(false);
  };

  const showSignUpModal = () => {
    setIsisSignUpModalVisible(true);
  };

  const signUpHandleOk = () => {
    onSignUp();
    setIsisSignUpModalVisible(false);
  };

  const signUpHandleCancel = () => {
    setIsisSignUpModalVisible(false);
  };

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">Wine Party</div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Button type="text" className="menu">About</Button>
            {/* <a href="#">ABOUT</a> */}
          </li>
          <li className="option menu" onClick={closeMobileMenu}>
            <Button type="text" className="menu">Browse Hosts</Button>
            {/* <a href="#">Browse Hosts</a> */}
          </li>
          <li className="option menu" onClick={closeMobileMenu}>
            <Button type="text" className="menu">FAQ</Button>
            {/* <a href="#">FAQ</a> */}
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <Button
              htmlType="submit"
              type="dashed"
              size="medium"
              ghost="true"
              style={{
                color: "#f9fbf2",
                borderColor: "#f9fbf2",
              }}
              onClick={showSignInModal}
            >
              Sign in
            </Button>
            <Modal
              title="Sign in"
              visible={isSignInModalVisible}
              onOk={signInHandleOk}
              onCancel={signInHandleCancel}
              style={{
                backgroundColor: "#f9fbf2",
                color: "#0e1c36",
              }}
            >
              <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            </Modal>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <Button
              htmlType="submit"
              type="primary"
              size="medium"
              style={{
                color: "#0e1c36",
                backgroundColor: "#f9fbf2",
                borderColor: "#f9fbf2",
              }}
              onClick={showSignUpModal}
            >
              Sign up
            </Button>
            <Modal
              title="Sign up"
              visible={isSignUpModalVisible}
              onOk={signUpHandleOk}
              onCancel={signUpHandleCancel}
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
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                repeatPassword={repeatPassword}
                setRepeatPassword={setRepeatPassword}
              />
            </Modal>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <Button
            htmlType="submit"
            type="dashed"
            size="medium"
            ghost="true"
            style={{
              color: "#f9fbf2",
              borderColor: "#f9fbf2",
            }}
            onClick={showSignInModal}
          >
            Sign in
          </Button>
          <Modal
            title="Sign in"
            visible={isSignInModalVisible}
            onOk={signInHandleOk}
            onCancel={signInHandleCancel}
            style={{
              backgroundColor: "#c3073f",
              color: "#1a1a1d",
            }}
          >
            <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </Modal>
        </li>
        <li onClick={closeMobileMenu}>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            style={{
              color: "#0e1c36",
              backgroundColor: "#f9fbf2",
              borderColor: "#f9fbf2",
            }}
            onClick={showSignUpModal}
          >
            Sign Up
          </Button>
          <Modal
            title="Sign up"
            visible={isSignUpModalVisible}
            onOk={signUpHandleOk}
            onCancel={signUpHandleCancel}
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
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              repeatPassword={repeatPassword}
              setRepeatPassword={setRepeatPassword}
            />
          </Modal>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          //   <MenuIcon className="menu-icon" />
          <MenuIcon />
        )}
      </div>
    </div>
  );
};

export default Header;