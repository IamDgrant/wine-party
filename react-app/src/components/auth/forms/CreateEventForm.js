import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { createEvent } from "../../../store/event";
import { seeHost } from "../../../store/host";
import SearchForm from "./SearchHostForm";
import "../../styling/eventFormStyle.css";

const EventForm = ({ user_id }) => {
  const [event_name, setEventName] = useState("");
  const [event_date, setEventDate] = useState("");
  const [event_city, setEventCity] = useState("");
  const [event_state, setEventState] = useState("");
  const [event_postal_code, setEventPostalCode] = useState("");
  const [search, setSearch] = useState("");
  const [sommelier, setSommelier] = useState("");
  const [mixologist, setMixologist] = useState("");
  const [redWine, setRedWine] = useState("");
  const [roseWine, setRoseWine] = useState("");
  const [whiteWine, setWhiteWine] = useState("");
  const [bourbon, setBourbon] = useState("");
  const [brandy, setBrandy] = useState("");
  const [cognac, setCognac] = useState("");
  const [gin, setGin] = useState("");
  const [liqueurs, setLiqueurs] = useState("");
  const [rum, setRum] = useState("");
  const [scotch, setScotch] = useState("");
  const [tequila, setTequila] = useState("");
  const [vodka, setVodka] = useState("");
  const [whiskey, setWhiskey] = useState("");

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionHostId = useSelector((state) =>
    state.host.host ? state.host.host : null
  );

  const error = () => {
    message.error("Please enter a event name!");
  };

  const onSearch = async (e) => {
    e.preventDefault();
    dispatch(
      seeHost(
        search,
        sommelier,
        mixologist,
        redWine,
        roseWine,
        whiteWine,
        bourbon,
        brandy,
        cognac,
        gin,
        liqueurs,
        rum,
        scotch,
        tequila,
        vodka,
        whiskey,
        sessionHostId
      )
    ).then((res) => {
      if (res.Host === "Not found") {
        message.error(`User ${search} not found`);
      }
      // else {
      //   message.success(`User ${search} added to Event!`);
      // }
    });
  };

  const onSubmission = async (e) => {
    // e.preventDefault();
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

  return (
    sessionUser && (
      <div className="center_box">
        <form onSubmit={onSubmission} className="">
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
              className=""
              type="text"
              name="event_postal_code"
              placeholder="Postal Code"
              onChange={updatePostalCode}
              value={event_postal_code}
            ></input>
          </div>
          <div>
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
            />
            {/* <input
              className="form_input"
              type="text"
              name="search"
              placeholder="Find a host..."
              onChange={UpdateSearch}
              value={searchTerm}
            ></input> */}
          </div>
          {/* <button type="submit" className="reserve-btn">
            Find a Host
          </button> */}
        </form>
      </div>
    )
  );
};

export default EventForm;
