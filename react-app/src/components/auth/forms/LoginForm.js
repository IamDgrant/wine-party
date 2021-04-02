import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { login } from "../../../store/session"
// import { Button } from 'antd';
import "../../styling/formStyling.css"

const LoginForm = ({
  signInEmail,
  setSignInEmail,
  signInPassword,
  setSignInPassword,
  errors,
  setErrors,
}) => {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return <Redirect to="/home" />;
  }

  // const demoLogin = async (e) => {
  //   // e.preventDefault();
  //   console.log("HITTING");
  //   await dispatch(login({ email: "jessica@wheeler.org", password: "password" }));
  //   history.push("/home");
  // };

  const updateEmail = (e) => {
    setSignInEmail(e.target.value);
  };

  console.log(signInEmail);

  const updatePassword = (e) => {
    setSignInPassword(e.target.value);
  };

  return (
    <div className="center_box">
      <form className="login-form">
        <div>
          {errors && errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className="email">
          <input
            // className="form-input"
            name="email"
            type="text"
            placeholder="Email"
            onChange={updateEmail}
            value={signInEmail}
          />
        </div>
        <div className="password">
          <input
            // className="form-input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={updatePassword}
            value={signInPassword}
          />
        </div>
        {/* <Button
          className="submit_button"
          onClick={demoLogin}
          // shape="round"
          htmlType="submit"
          size="small"
          type="primary"
        >
          Demo User
        </Button> */}
      </form>
    </div>
  );
};

export default LoginForm;
