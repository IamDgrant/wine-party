import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { login, createUser } from "../store/session";
import SignUpForm from "../components/auth/SignUpForm";
import LoginForm from "../components/auth/LoginForm";
import { Modal, Button } from "antd";
import "../components/styling/navBarLanding.css";
import "antd/dist/antd.css";

const NavBarLanding = () => {
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

  // const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

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
    <>
      <div className="navBarLanding-navBar">
        <div className="left-container">
          {/* <div className="logo-container"> */}
          <div className="logo">Wine Party</div>
          {/* </div> */}
          <div className="btn-container">
            <div className="home">
              <Button type="text" size="large" style={{ color: "#ececec" }}>
                Home
              </Button>
            </div>
            <div className="host">
              <Button type="text" size="large" style={{ color: "#ececec" }}>
                Meet our Hosts
              </Button>
            </div>
            <div className="faq">
              <Button type="text" size="large" style={{ color: "#ececec" }}>
                FAQ
              </Button>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="signin-btn">
            <Button
              htmlType="submit"
              type="dashed"
              size="large"
              ghost="true"
              style={{
                color: "#ececec",
                borderColor: "#ececec",
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
                backgroundColor: "#ececec",
                color: "#ffe7a3",
              }}
            >
              <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            </Modal>
          </div>
          <div className="signup-btn">
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              style={{
                color: "#f78888",
                backgroundColor: "#ececec",
                borderColor: "#ececec",
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
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarLanding;
