import React, { useState, useEffect, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Select from "react-select";
import { usStates } from "../../States"
// import { Pagination } from 'antd';
// import { Button } from "antd";
import "../../styling/signUpFormStyle.css";

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
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [cscState, setCscState] = useState();
  const [cscCity, setCscCity] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState([]);

  // const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const cscAPIKey = process.env.REACT_APP_CSC_API_KEY;

  const headers = new Headers();
  headers.append("X-CSCAPI-KEY", cscAPIKey);

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const cityFetch = async () => {
    const fetchCityUrl = `https://api.countrystatecity.in/v1/countries/US/states/${state}/cities`;
    const res = await fetch(fetchCityUrl, requestOptions);
    if (res.ok) {
      const data = await res.json();
      const sortedData = data.sort((city1, city2) =>
        city1.name > city2.name ? 1 : -1
      );
      setCscCity(sortedData);
      // return sortedData;
    }
  };

  // const cscStateFetch = async () => {
  //   const res = await fetch(fetchCscStateUrl, requestOptions);
  //   if (res.ok) {
  //     const data = await res.json();
  //     const sortedData = data.sort((state1, state2) =>
  //       state1.name > state2.name ? 1 : -1
  //     );
  //     return sortedData;
  //   }
  // };

  useEffect(() => {
    if (state.length > 0) {
      cityFetch();
    }
    if (cscCity !== undefined) {
      setIsDisabled(false)
    }
  }, [state, cscCity]);

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
  const updateCity = (city) => {
    // console.log(state);
    // if (
    //   state === "American Samoa" &&
    //   state === "Northern Mariana Islands" &&
    //   state === "Virgin Islands"
    // ) {
    //   setCity("");
    // }
    setCity(city);
  };
  const updateState = (onChangeState) => {
    setState(onChangeState);
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

  // if (!isLoaded) {
  //   return null;
  // }

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
            className="form-input"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={updateFirstName}
            value={first_name}
          ></input>
        </div>
        <div className="last-name">
          <input
            className="form-input"
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
              placeholder="State"
              name="states"
              options={usStates.map((state) => ({
                label: state.label,
                value: state.value,
              }))}
              onChange={(state) => updateState(state.value)}
            />
          </Fragment>
        </div>
        <div>
          <Fragment>
            <Select
              className="city-search-dropdown"
              classNamePrefix="select"
              placeholder="City"
              name="cities"
              isDisabled={isDisabled}
              options={
                cscCity !== undefined
                  ? cscCity.map((city) => ({
                      label: city.name,
                      value: city.name,
                    }))
                  : null
              }
              onChange={(city) => updateCity(city.value)}
            />
          </Fragment>
        </div>
        <div className="postal-code">
          <input
            className="form-input"
            type="text"
            name="postal_code"
            placeholder="Postal Code"
            onChange={updatePostalCode}
            value={postal_code}
          ></input>
        </div>
        <div>
          <input
            className="form-input"
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={signUpEmail}
          ></input>
        </div>
        <div>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={signUpPassword}
          ></input>
        </div>
        <div>
          <input
            className="form-input"
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
