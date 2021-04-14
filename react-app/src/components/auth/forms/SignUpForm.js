import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import { usStates } from "../../States";
import { Select, Button } from "antd";
import "../../styling/formStyling.css";

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
  const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [cscState, setCscState] = useState();
  const [cscCity, setCscCity] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

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
    }
  };

  useEffect(() => {
    if (state && state.length > 0) {
      cityFetch();
    }
  }, [state]);

  // useEffect(() => {
  //   if (cscCity !== undefined) {
  //     setIsDisabled(false);
  //   }
  // }, [cscCity]);

  if (sessionUser) {
    return <Redirect to="/home" />;
  }

  const demoLogin = async (e) => {
    e.preventDefault();
    return dispatch(
      login({ email: "demo@wineparty.com", password: "password" })
    );
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

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateCity = (city) => {
    console.log(city);

    setCity(city);
  };
  const updateState = (selectedState) => {
    setState(selectedState);
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

  const { Option } = Select;

  return (
    <>
      <form>
        {/* <div>
          {errors.map((error, i) => (
            <div key={i}>{error}</div>
          ))}
        </div> */}
        <div>
          <input
            // className="form-input"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={updateFirstName}
            value={first_name}
          ></input>
        </div>
        <div className="last-name">
          <input
            // className="form-input"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={updateLastName}
            value={last_name}
          ></input>
        </div>
        <div>
          <Select
            showSearch
            style={{ width: 300, marginTop: "4px" }}
            placeholder="State"
            optionFilterProp="children"
            onChange={updateState}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {usStates.map((state) => (
              <Option key={state.value} value={state.value}>
                {state.label}
              </Option>
            ))}
          </Select>
          {/* <Fragment>
            <Select
              // className="state-search-dropdown"
              classNamePrefix="select"
              placeholder="State"
              name="states"
              options={usStates.map((state) => ({
                label: state.label,
                value: state.value,
              }))}
              onChange={(state) => updateState(state.value)}
            />
          </Fragment> */}
        </div>
        <div>
          <Select
            showSearch
            style={{ width: 300, marginTop: "9px", marginBottom: "5px" }}
            placeholder="City"
            optionFilterProp="children"
            onChange={updateCity}
            // loading={true}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {cscCity !== undefined
              ? cscCity.map((city) => (
                  <Option key={city.id} value={city.name}>
                    {city.name}
                  </Option>
                ))
              : null}
          </Select>
          {/* <Fragment>
            <Select
              // className="city-search-dropdown"
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
          </Fragment> */}
        </div>
        <div className="postal-code">
          <input
            // className="form-input"
            type="text"
            name="postal_code"
            placeholder="Postal Code"
            onChange={updatePostalCode}
            value={postal_code}
          ></input>
        </div>
        <div>
          <input
            // className="form-input"
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={signUpEmail}
          ></input>
        </div>
        <div>
          <input
            // className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={signUpPassword}
          ></input>
        </div>
        <div>
          <input
            // className="form-input"
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
