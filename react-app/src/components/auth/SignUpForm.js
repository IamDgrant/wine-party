import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../store/session";
import "../styling/formStyle.css";
// import { signUp } from "./SignUpForm";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
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
      dispatch(
        createUser({ firstName, lastName, city, state, email, password })
      )
        .then(() => {
          setFirstName("");
          setLastName("");
          setCity("");
          setState("");
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

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateState = (e) => {
    setState(e.target.value);
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
    <div className="center_box" >
      <form action="/signup" onSubmit={onSignUp} className="form">
        <h1 className="form_title">Sign Up</h1>
        {/* <hr className="break"></hr> */}
        <p className="form_text">
          Have an event? Sign up to find the perfect host! <br></br>
          <br></br>
          Already have an account?
          <br></br>
          <a href="/login" className="login-form-btn">
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
            name="city"
            placeholder="City"
            onChange={updateCity}
            value={city}
          ></input>
        </div>
        <div>
          <select
            className="form_input"
            name="state"
            placeholder="State"
            onChange={updateState}
          >
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
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
        <button type="submit" className="signUp-form-btn">
          Sign Up
        </button>
        {/* <button className="submit_button"
        onClick={demoLogin}>Demo User</button> */}
      </form>
    </div>
  );
};

export default SignUpForm;
