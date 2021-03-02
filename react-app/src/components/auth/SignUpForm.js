import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, login } from "../../store/session";
import "../styling/formStyle.css"
// import { signUp } from "./SignUpForm";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  // const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const onSignUp = async (e) => {
    e.preventDefault();
    let newErrors = [];
    if (password === repeatPassword) {
      dispatch(createUser({ firstName, lastName, zipcode, email, password }))
        .then(() => {
          setFirstName("");
          setLastName("");
          setZipcode("");
          setEmail("");
          setPassword("");
        })
        .catch(async (res) => {
          const data = await res.json();                                            
          if (data && data.errors) {
            newErrors = data.errors;
            // setErrors(newErrors);
          }
        });
    }
  };

  // const demoLogin = async (e) => {
  //   e.preventDefault();
  //   return dispatch(login({email: "demo@asauna.com", password: "password"}));
  // };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateZipcode = (e) => {
    setZipcode(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="center_box">
      <form onSubmit={onSignUp} className="form">
        <h1 className="form_title">Sign Up</h1>
        <hr className="break"></hr>
        <p className="form_text">
          Have an event? Sign up to find the perfect host! <br></br>
          Already have an account?
          <a href="/login" className="form_link">
            Log in
          </a>
        </p>
        <div>
          <input
            className="form_input"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={updateFirstName}
            value={firstName}
          ></input>
        </div>
        <div>
          <input
            className="form_input"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={updateLastName}
            value={lastName}
          ></input>
        </div>
        <div>
          <input
            className="form_input"
            type="text"
            name="zipcode"
            placeholder="Zipcode"
            onChange={updateZipcode}
            value={zipcode}
          ></input>
        </div>
        <div>
          <input
            className="form_input"
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <input
            className="form_input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <input
            className="form_input"
            type="password"
            name="repeat_password"
            placeholder="Confirm Password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type="submit" className="submit_button">
          Sign Up
        </button>
        {/* <button className="submit_button"
        onClick={demoLogin}>Demo User</button> */}
      </form>
    </div>
  );
};

export default SignUpForm;
