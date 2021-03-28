import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../store/session"
import { Button } from 'antd';

const LoginForm = ({
  signInEmail,
  setSignInEmail,
  signInPassword,
  setSignInPassword,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [errors, setErrors] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);

  // if (!sessionUser.errors) {
  //   return <Redirect to="/home" />;
  // }

  // const demoLogin = async (e) => {
  //   // e.preventDefault();
  //   console.log("HITTING");
  //   await dispatch(login({ email: "jessica@wheeler.org", password: "password" }));
  //   history.push("/home");
  // };

  const updateEmail = (e) => {
    setSignInEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setSignInPassword(e.target.value);
  };

  return (
    <div className="center_box">
      <form className="-loginform">
        {/* <div>
          {errors.map((error, i) => (
            <div key={i}>{error}</div>
          ))}
        </div> */}
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={updateEmail}
            value={signInEmail}
          />
        </div>
        <div>
          <input
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
