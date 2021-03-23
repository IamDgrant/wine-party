import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../store/session";
import csc from "country-state-city";
// import { Pagination } from 'antd';

const SignUpForm = ({
  first_name,
  setFirstName,
  last_name,
  setLastName,
  city,
  setCity,
  state,
  setState,
  postal_code,
  setPostalCode,
  signUpEmail,
  setSignUpEmail,
  signUpPassword,
  setSignUpPassword,
  repeatPassword,
  setRepeatPassword,
}) => {
  const [errors, setErrors] = useState([]);

  // const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser.errors) {
    return <Redirect to="/home" />;
  }

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
  const updatePostalCode = (e) => {
    setPostalCode(e.target.value);
  };
  const updateEmail = (e) => {
    setSignUpEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setSignUpPassword(e.target.value);
  };
  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <>
      <form>
        <div>
          {errors.map((error, i) => (
            <div key={i}>{error}</div>
          ))}
        </div>
        <div>
          <input
            className="form_input"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={updateFirstName}
            value={first_name}
          ></input>
        </div>
        <div>
          <input
            className="form_input"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={updateLastName}
            value={last_name}
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
            <option value=""></option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District Of Columbia">District Of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>
        <div>
          <input
            className="form_input"
            type="text"
            name="postal_code"
            placeholder="Postal Code"
            onChange={updatePostalCode}
            value={postal_code}
          ></input>
        </div>
        <div>
          <input
            className="form_input"
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={signUpEmail}
          ></input>
        </div>
        <div>
          <input
            className="form_input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={signUpPassword}
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
      </form>
    </>
  );
};

export default SignUpForm;
