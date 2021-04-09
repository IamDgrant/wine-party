import React, { useState, useEffect, Fragment } from "react";
// import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { createEvent } from "../../../store/event";
import { message } from "antd";
import { usStates } from "../../States";
// import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
// import { createEvent } from "../../../store/event";
// import { seeHost } from "../../../store/host";
// import SearchForm from "./SearchHostForm";
// import SearchResult from "../../SearchResults";
import "../../styling/formStyling.css";

const EventForm = (user_id) => {
  const [event_name, setEventName] = useState("");
  const [event_date, setEventDate] = useState("");
  const [event_city, setEventCity] = useState("");
  const [event_state, setEventState] = useState("");
  const [event_postal_code, setEventPostalCode] = useState("");

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  // const sessionHostsResults = useSelector((state) => state.host.host);
  // const sessionHostId = useSelector((state) =>
  //   state.host.host ? state.host.host : null
  // );
  const [cscCity, setCscCity] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState([]);

  const cscAPIKey = process.env.REACT_APP_CSC_API_KEY;

  const headers = new Headers();
  headers.append("X-CSCAPI-KEY", cscAPIKey);

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const cityFetch = async () => {
    const fetchCityUrl = `https://api.countrystatecity.in/v1/countries/US/states/${event_state}/cities`;
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

  useEffect(() => {
    if (event_state.length > 0) {
      cityFetch();
    }
    if (cscCity !== undefined) {
      setIsDisabled(false);
    }
  }, [event_state, cscCity]);

  const onSubmission = async (e) => {
    //   // e.preventDefault();
    if (!event_name) {
      error();
      return;
    }
    dispatch(
      createEvent({
        user_id,
        event_name,
        event_date,
        event_city,
        event_state,
        event_postal_code,
      })
    ).then(() => {
      setEventName("");
      setEventDate("");
      setEventCity("");
      setEventState("");
      setEventPostalCode("");
    });
  };

  const error = () => {
    message.error("Please enter a event name!");
  };

  const updateEventName = (e) => {
    setEventName(e.target.value);
  };

  const updateEventDate = (e) => {
    setEventDate(e.target.value);
  };

  const updateEventCity = (city) => {
    setEventCity(city);
  };

  const updateEventState = (onChangeState) => {
    setEventState(onChangeState);
  };

  const updatePostalCode = (e) => {
    setEventPostalCode(e.target.value);
  };

  return (
    <>
      <div className="events-container">
        {sessionUser && (
          <div className="left-search-box">
            <form>
              <div>
                {errors.map((error, i) => (
                  <div key={i}>{error}</div>
                ))}
              </div>
              <div>
                <input
                  // className="form-input"
                  type="text"
                  name="event_name"
                  placeholder="Event Name"
                  onChange={updateEventName}
                  value={event_name}
                ></input>
              </div>
              <div>
                <input
                  // className="form-input"
                  type="date"
                  name="event_date"
                  placeholder="Event Date"
                  onChange={updateEventDate}
                  value={event_date}
                ></input>
              </div>
              <div className="event-state">
                <Fragment>
                  <Select
                    // className="state-search-dropdown"
                    classNamePrefix="select"
                    placeholder="State"
                    name="states"
                    options={usStates.map((state) => ({
                      label: state.label,
                      value: state.value,
                    }))}
                    onChange={(state) => updateEventState(state.value)}
                  />
                </Fragment>
              </div>
              <div>
                <Fragment>
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
                    onChange={(city) => updateEventCity(city.value)}
                  />
                </Fragment>
              </div>
              <div>
                <input
                  // className="form-input"
                  type="text"
                  name="event_postal_code"
                  placeholder="Postal Code"
                  onChange={updatePostalCode}
                  value={event_postal_code}
                ></input>
              </div>
              {/* <div>
                <h3 className="form_text">Next, add your Host</h3>
                <SearchForm
                  search={search}
                  setSearch={setSearch}
                  sommelier={sommelier}
                  setSommelier={setSommelier}
                  mixologist={mixologist}
                  setMixologist={setMixologist}
                  redWine={redWine}
                  setRedWine={setRedWine}
                  whiteWine={whiteWine}
                  setWhiteWine={setWhiteWine}
                  roseWine={roseWine}
                  setRoseWine={setRoseWine}
                  bourbon={bourbon}
                  setBourbon={setBourbon}
                  brandy={brandy}
                  setBrandy={setBrandy}
                  cognac={cognac}
                  setCognac={setCognac}
                  gin={gin}
                  setGin={setGin}
                  liqueurs={liqueurs}
                  setLiqueurs={setLiqueurs}
                  rum={rum}
                  setRum={setRum}
                  scotch={scotch}
                  setScotch={setScotch}
                  tequila={tequila}
                  setTequila={setTequila}
                  vodka={vodka}
                  setVodka={setVodka}
                  whiskey={whiskey}
                  setWhiskey={setWhiskey}
                /> */}
              {/* <div className="search_bar">
                    <input
                      className="searchInput"
                      placeholder="Search name, city, state, postal code..."
                      value={search}
                      type="text"
                      onChange={updateSearch}
                    ></input>
                    <label className="container">
                      Sommelier
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="sommelier"
                        checked={sommelier}
                        onChange={updateSommelier}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Mixologist
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="mixologist"
                        checked={mixologist}
                        onChange={updateMixologist}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Red Wine
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="redWine"
                        checked={redWine}
                        onChange={updateRedWine}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      White Wine
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="whiteWine"
                        checked={whiteWine}
                        onChange={updateWhiteWine}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Rosé Wine
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="roseWine"
                        checked={roseWine}
                        onChange={updateRoseWine}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Bourbon
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="bourbon"
                        checked={bourbon}
                        onChange={updateBourbon}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Brandy
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="brandy"
                        checked={brandy}
                        onChange={updateBrandy}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Cognac
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="cognac"
                        checked={cognac}
                        onChange={updateCognac}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Gin
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="gin"
                        checked={gin}
                        onChange={updateGin}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Liqueurs
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="liqueurs"
                        checked={liqueurs}
                        onChange={updateLiqueurs}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Rum
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="rum"
                        checked={rum}
                        onChange={updateRum}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Scotch
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="scotch"
                        checked={scotch}
                        onChange={updateScotch}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Tequila
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="tequila"
                        checked={tequila}
                        onChange={updateTequila}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Vodka
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="vodka"
                        checked={vodka}
                        onChange={updateVodka}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Whiskey
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="whiskey"
                        checked={whiskey}
                        onChange={updateWhiskey}
                      />
                      <span className="checkmark"></span>
                    </label>
                    
                </div> */}
              {/* <button type="submit" className="reserve-btn">
                  Add Event and Find a Host
                </button> */}
              {/* </div> */}
              {/* <button type="submit" className="reserve-btn">
                Find a Host
              </button> */}
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default EventForm;
