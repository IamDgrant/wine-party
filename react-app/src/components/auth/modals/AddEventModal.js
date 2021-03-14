import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { createEvent } from "../../../store/event";
// import Search from "../../components/Search";

const EventFormModal = ({ user_id }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [showModal, setShowModal] = useState(false);
  const [event_name, setEventName] = useState("");
  const [event_date, setEventDate] = useState("");
  const [event_city, setEventCity] = useState("");
  const [event_state, setEventState] = useState("");

  const error = () => {
    message.error("Please enter a event name!");
  };

  const onSubmission = async (e) => {
    e.preventDefault();
    if (!event_name) {
      error();
      return;
    }
    dispatch(createEvent({ user_id, event_name, event_date, event_city, event_state })).then(
      () => {
        setEventName("");
        setEventDate("");
        setEventCity("");
        setEventState("");
      }
    );
    setShowModal(false);
  };

  const updateEventName = (e) => {
    setEventName(e.target.value);
  };
  const updateEventDate = (e) => {
    setEventDate(e.target.value);
  };

  const updateCity = (e) => {
    setEventCity(e.target.value);
  };

  const updateState = (e) => {
    setEventState(e.target.value);
  };

  return (
    <>
      <button
        className="bg-transparent hover:text-green-200 px-4 border-double border-4 border-gray-400 rounded"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Add New Party
      </button>
      {showModal
        ? sessionUser && (
            <div className="center_box">
              <form onSubmit={onSubmission} className="form">
                {/* <h1 className="form_title">Add Event</h1> */}
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
                <div>
                  <input
                    className="form_input"
                    type="text"
                    name="event_city"
                    placeholder="City"
                    onChange={updateCity}
                    value={event_city}
                  ></input>
                </div>
                <div>
                  <select
                    className="form_input"
                    name="event_state"
                    form="stateForm"
                    placeholder="State"
                    onChange={updateState}
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
                <button type="submit" className="reserve-btn">
                  Reserve
                </button>
              </form>
            </div>
          )
        : null}
    </>
  );
};

export default EventFormModal;
