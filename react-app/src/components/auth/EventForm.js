import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { createEvent } from "../../store/event";
import SearchHost from "../SearchHost";
import "../styling/eventFormStyle.css";

const EventForm = ({ user_id }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [event_name, setEventName] = useState("");
  const [event_date, setEventDate] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const error = () => {
    message.error("Please enter a event name!");
  };

  const onSubmission = async (e) => {
    e.preventDefault();
    if (!event_name) {
      error();
      return;
    }
    dispatch(createEvent({ user_id, event_name, event_date, city, state })).then(
      () => {
        setEventName("");
        setEventDate("");
        setCity("");
        setState("");
      }
    );
  };

  const updateEventName = (e) => {
    setEventName(e.target.value);
  };
  const updateEventDate = (e) => {
    setEventDate(e.target.value);
    // new Date(setEventDate(e.target.value));
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateState = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      sessionUser && (
      <div className="center_box">
        <form onSubmit={onSubmission} className="form">
          <h1 className="form_title">Create Event</h1>
          <div>
            <input
              className="form_input"
              type="date"
              name="event_date"
              placeholder="Event Date"
              onChange={updateEventDate}
              value={event_date}
            ></input>
          </div>
          <div>
            <input
              className="form_input"
              type="text"
              name="event_name"
              placeholder="Event Name"
              onChange={updateEventName}
              value={event_name}
            ></input>
          </div>
          {/* <div>
            <h3 className="form_text">Ready to add your host?</h3>
            <p className="p-text">If not continue and reserve.</p>
            <SearchHost />
            <input
              className="form_input"
              type="text"
              name="search"
              placeholder="Find a host..."
              onChange={UpdateSearch}
              value={searchTerm}
            ></input>
          </div> */}
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
              form="stateForm"
              placeholder="State"
              onChange={updateState}
              value={state}
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
          <button type="submit" className="reserve-btn">
            Reserve
          </button>
        </form>
      </div>
      )
    </>
  );
};

export default EventForm;
