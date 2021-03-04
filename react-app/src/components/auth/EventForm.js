import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, message } from "antd";
import { createEvent } from "../../store/event";
import "../styling/formStyle.css";
// import { signUp } from "./SignUpForm";

const EventForm = ({ userId }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const error = () => {
    message.error("Please enter a event name!");
  };

  const onSubmission = async (e) => {
    e.preventDefault();
    if (!eventName) {
      error();
      return;
    }
    dispatch(createEvent({ userId, eventName, eventDate, city, state })).then(() => {
      setEventName("");
      setEventDate("");
      setCity("");
      setState("");
    });
  };

  const updateEventName = (e) => {
    setEventName(e.target.value);
  };
  const updateEventDate = (e) => {
    setEventDate(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateState = (e) => {
    setState(e.target.value);
  };

  return (
    sessionUser && (
      <div className="center_box">
        <form onSubmit={onSubmission} className="form">
          <h1 className="form_title">Create Event</h1>
          <p className="form_text">Then find your host!</p>
          <div>
            <input
              className="form_input"
              type="text"
              name="eventName"
              placeholder="Event Name"
              onChange={updateEventName}
              value={eventName}
            ></input>
          </div>
          <div>
            <input
              className="form_input"
              type="date"
              name="eventDate"
              placeholder="Event Date"
              onChange={updateEventDate}
              value={eventDate}
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
              form="stateForm"
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
          <button type="submit" className="btn">
            Sign Up
          </button>
          {/* <button className="submit_button"
        onClick={demoLogin}>Demo User</button> */}
        </form>
      </div>
    )
  );
};

export default EventForm;
