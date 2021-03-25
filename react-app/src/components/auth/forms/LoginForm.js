import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginForm = ({
  signInEmail,
  setSignInEmail,
  signInPassword,
  setSignInPassword,
}) => {
  // const [errors, setErrors] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser.errors) {
    return <Redirect to="/home" />;
  }

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
      </form>
    </div>
  );
};

export default LoginForm;
