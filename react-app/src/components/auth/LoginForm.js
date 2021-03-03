import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";

const LoginForm = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    return dispatch(login({ email, password }));
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="center_box">
      <form onSubmit={onLogin} className="form">
        <h1 className="form_title">Log In</h1>
        <p className="form_text">
          Welcome back! Log In! <br></br>
          <br></br>
          First time?
          <br></br>
          <a href="/signup" className="login-form-btn">
            {" "}
            Make an account
          </a>
        </p>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={updateEmail}
            value={email}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
          />
          <div>
            <button type="submit" className="signUp-form-btn">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
