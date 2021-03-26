import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
import { createEvent } from "../../../store/event";
import { seeHost } from "../../../store/host";
import SearchForm from "./SearchHostForm";
import SearchResult from "../../SearchResults";
import "../../styling/createEventFormStyling.css";

const EventForm = ({
  user_id,
  event_name,
  setEventName,
  event_date,
  setEventDate,
  event_city,
  setEventCity,
  event_state,
  setEventState,
  event_postal_code,
  setEventPostalCode,
}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionHostsResults = useSelector((state) => state.host.host);
  const sessionHostId = useSelector((state) =>
    state.host.host ? state.host.host : null
  );

  const error = () => {
    message.error("Please enter a event name!");
  };

  const updateEventName = (e) => {
    setEventName(e.target.value);
  };

  const updateEventDate = (e) => {
    setEventDate(e.target.value);
  };

  const updateEventCity = (e) => {
    setEventCity(e.target.value);
  };

  const updateEventState = (e) => {
    setEventState(e.target.value);
  };

  const updatePostalCode = (e) => {
    setEventPostalCode(e.target.value);
  };

  // const Grid = makeResponsive(measureItems(CSSGrid), {
  //   maxWidth: 1920,
  //   minPadding: 100,
  // });

  return (
    <>
      <div className="events-container">
        {/* <Grid
          columns={2}
          columnWidth={250}
          gutterWidth={5}
          gutterHeight={5}
          itemHeight={300}
          itemWidth={500}
          duration={500}
          easing="ease-out"
        > */}
        {sessionUser && (
          <div className="left-search-box">
            <form>
              <div>
                <input
                  className=""
                  type="date"
                  name="event_date"
                  placeholder="Event Date"
                  onChange={updateEventDate}
                  value={event_date}
                ></input>
              </div>
              <div>
                <input
                  className=""
                  type="text"
                  name="event_name"
                  placeholder="Event Name"
                  onChange={updateEventName}
                  value={event_name}
                ></input>
              </div>
              <div>
                <input
                  className=""
                  type="text"
                  name="event_city"
                  placeholder="City"
                  onChange={updateEventCity}
                  value={event_city}
                ></input>
              </div>
              <div>
                <select
                  className=""
                  name="event_state"
                  form="stateForm"
                  placeholder="State"
                  onChange={updateEventState}
                  value={event_state}
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
                  <option value="District Of Columbia">
                    District Of Columbia
                  </option>
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
                  className=""
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
                      Rose Wine
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
