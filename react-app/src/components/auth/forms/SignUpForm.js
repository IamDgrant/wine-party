import React, { useState, useEffect, Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
// import { login } from "../../../store/session";
// import csc from "country-state-city";
// import { ICountry, IState, ICity } from "country-state-city";
// import { Pagination } from 'antd';
// import { Button } from "antd";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [cscState, setCscState] = useState();
  const [cscCity, setCscCity] = useState();
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const cscAPIKey = process.env.REACT_APP_CSC_API_KEY;

  const headers = new Headers();

  headers.append("X-CSCAPI-KEY", cscAPIKey);

  const fetchCscStateUrl = `https://api.countrystatecity.in/v1/countries/US/states`;
  const fetchCscCityUrl = `https://api.countrystatecity.in/v1/countries/US/states/${state}/cities`;

  // console.log(state);
  // console.log(cscCity);

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const cscCityFetch = async () => {
    const res = await fetch(fetchCscCityUrl, requestOptions);
    console.log(res);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      const sortedData = data.sort((city1, city2) =>
        city1.name > city2.name ? 1 : -1
      );
      return sortedData;
    }
  };

  const cscStateFetch = async () => {
    const res = await fetch(fetchCscStateUrl, requestOptions);
    if (res.ok) {
      const data = await res.json();
      const sortedData = data.sort((state1, state2) =>
        state1.name > state2.name ? 1 : -1
      );
      // console.log(sortedData);
      return sortedData;
    }
  };

  useEffect(() => {
    cscStateFetch().then((res) => {
      setCscState(res);
      setIsLoaded(true);
    });
  }, []);

  // const demoLogin = async (e) => {
  //   // e.preventDefault();
  //   return dispatch(login({ email: "jessica@wheeler.org", password: "password" }));
  // };

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
    setState(e);
    // cscCityFetch().then((res) => {
    //   setCscCity(res);
    //   setIsLoaded(true);
    // });
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

 console.log(state);

  if (!isLoaded) {
    return null;
  }

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
          <Fragment>
            <Select
              className="state-search-dropdown"
              classNamePrefix="select"
              // defaultValue="State..."
              placeholder="State..."
              name="states"
              options={cscState.map((state) => ({
                label: state.name,
                value: state.name,
              }))}
              onChange={state => updateState(state.value)}
              // onChange={updateState}
              // onInputChange={updateState}
            />
            {/* {cscState.length > 0 &&
              cscState.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))} */}
          </Fragment>
          {/* <select
            className="form_input"
            name="state"
            placeholder="State"
            // onClick={updateDropdown}
            onChange={updateState}
            value={state}
          >
            {cscState.length > 0 &&
              cscState.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
          </select> */}
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
    </>
  );
};

export default SignUpForm;
