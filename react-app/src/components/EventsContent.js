import React, { useEffect, useState, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import Map from "../components/map/Map";
import { createEvent, seeEvent, deleteEvent } from "../store/event";
// import EventForm from "../components/auth/forms/CreateEventForm";
import {
  Collapse,
  Button,
  Modal,
  Popconfirm,
  Drawer,
  message,
  autoFocus,
} from "antd";
import { usStates } from ".././components/States";
import { QuestionCircleOutlined } from "@ant-design/icons";
import "../components/styling/eventsContentStyling.css";
import "../components/styling/formStyling.css";
import party from "../assets/images/jason-leung-Xaanw0s0pMk-unsplash.jpeg";

const EventsContent = (user_id, { id }) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteEditModalVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [event_name, setEventName] = useState("");
  const [event_date, setEventDate] = useState("");
  const [event_city, setEventCity] = useState("");
  const [event_state, setEventState] = useState("");
  const [event_postal_code, setEventPostalCode] = useState("");
  // const [focus, setFocus] = useState("");

  const sessionUser = useSelector((state) => state.session.user);
  const sessionHost = useSelector((state) => state.session.host);
  const sessionEvent = useSelector((state) => state.event.event);
  const dispatch = useDispatch();
  const history = useHistory();

  const [cscCity, setCscCity] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState([]);

  const cscAPIKey = process.env.REACT_APP_CSC_API_KEY;

  console.log();

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

  const nameInputFocus = useRef();

  useEffect(() => {
    if (!id) dispatch(seeEvent());
    if (event_state.length > 0) {
      cityFetch();
    }
    if (cscCity !== undefined) {
      setIsDisabled(false);
    }
    // else {
    //   dispatch();
    //   setData(id);
    // }
  }, [id, event_state, cscCity]);

  const showDrawer = () => {
    setIsDrawerVisible(true);
    nameInputFocus.current.focus();
    // nameFocus();
    // if (isDrawerVisible === true) nameInputFocus.current.focus();
  };

  // const nameFocus = () => {
  //   console.log("yes");
  //   console.log(isDrawerVisible);
  //   nameInputFocus.current.focus()
  // };
  // console.log(isDrawerVisible);
  // if (isDrawerVisible === true) {
  //   console.log("HERE");
  //   nameInputFocus.current.focus()}

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  const updateEventName = (e) => {
    showDrawer();
    if (e.target.value.length < 1) {
      setIsDrawerVisible(false);
    }
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

  const showEditModal = () => {
    setIsEditModalVisible(true);
  };

  const editHandleOk = () => {
    setIsEditModalVisible(false);
  };

  const editHandleCancel = () => {
    setIsEditModalVisible(false);
  };

  const deleteOneEvent = async (id) => {
    console.log(id);
    await dispatch(deleteEvent(id));
    // if (projectID) {
    //   dispatch(seeProjectTask(projectID));
    // } else {
    //   dispatch(seeTask());
    // }
  };

  // const deleteHandleOk = () => {
  //   console.log("THIS WORKS");
  //   setIsDeleteEditModalVisible(false);
  //   deleteOneEvent();
  // };

  const deleteHandleCancel = () => {
    setIsDeleteEditModalVisible(false);
  };

  const save = () => {
    onSubmission();

    // setIsDrawerVisible(false);
  };

  const onConfirm = () => {
    history.push("/search");
  };

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

  const { Panel } = Collapse;

  const callback = (key) => {
    console.log(key);
  };

  const todaysDate = new Date();

  const upcomingEvents = sessionEvent.filter((events) => {
    return new Date(events.event_date) > todaysDate;
  });
  const previousEvents = sessionEvent.filter((events) => {
    return new Date(events.event_date) < todaysDate;
  });

  const trashButton = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="trash-alt"
      class="svg-inline--fa fa-trash-alt fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="#f62713"
        d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
      ></path>
    </svg>
  );

  const editButton = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="edit"
      class="svg-inline--fa fa-edit fa-w-18"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="#058532"
        d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
      ></path>
    </svg>
  );

  return (
    <div className="events-content-container">
      <Drawer
        // afterVisibleChange={}
        title=""
        placement="bottom"
        autoFocus={false}
        closable={false}
        mask={false}
        visible={isDrawerVisible}
        width={"100%"}
        height={"9vh"}
      >
        <div className="drawer-buttons">
          <div className="cancel-btn">
            <Button
              danger
              htmlType="submit"
              type="text"
              size="middle"
              style={{
                border: "1px solid red",
                fontFamily: "Montserrat",
                color: "red",
              }}
              onClick={closeDrawer}
            >
              Cancel
            </Button>
          </div>
          <div className="save-btn">
            <Popconfirm
              title="Ready to add a host？"
              okText="Yes"
              cancelText="No"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={onConfirm}
            >
              <Button
                htmlType="submit"
                type="text"
                size="middle"
                style={{
                  border: "1px solid #058532",
                  fontFamily: "Montserrat",
                  color: "#058532",
                  width: "5.25vw",
                }}
                onClick={save}
              >
                Save
              </Button>
            </Popconfirm>
          </div>
        </div>
      </Drawer>
      <div className="main-event-title">Events</div>
      <div className="inner-events-content-container">
        <div className="all-events-container">
          <div className="upcoming-events">
            <div className="events-title">Upcoming Events</div>
            <div ClassName="events-list" style={{ paddingTop: "1vh" }}>
              <Collapse defaultActiveKey={["1"]} onChange={callback}>
                {upcomingEvents &&
                  upcomingEvents.map((event) => (
                    <Panel
                      header={event.event_name}
                      key={event.id}
                      style={{ fontWeight: "900" }}
                    >
                      <div>
                        <div>
                          <img src={party} alt="neon lights"></img>
                        </div>
                        <div>
                          <p>
                            {event.event_city}, {event.event_state}
                          </p>
                        </div>
                      </div>
                      <p>{event.event_date.slice(0, 16)}</p>
                      <div className="edit-delete">
                        <div className="edit-btn">
                          <Button
                            type="link"
                            className="edit-button"
                            onClick={showEditModal}
                          >
                            {editButton}
                          </Button>
                          <Modal
                            title="Edit Event"
                            visible={isEditModalVisible}
                            okText="Submit"
                            onOk={editHandleOk}
                            onCancel={editHandleCancel}
                            style={{
                              backgroundColor: "#f9fbf2",
                              color: "#0e1c36",
                            }}
                          >
                            {/* <Event /> */}
                          </Modal>
                        </div>
                        <div className="trash-btn">
                          <Popconfirm
                            title="Are you sure？"
                            okText="Submit"
                            icon={
                              <QuestionCircleOutlined
                                style={{ color: "red" }}
                              />
                            }
                            onConfirm={() => deleteOneEvent(event.id)}
                          >
                            <Button type="link" className="trash-button">
                              {trashButton}
                            </Button>
                          </Popconfirm>

                          {/* <Modal
                          title="Delete Event"
                          visible={isDeleteModalVisible}
                          okText="Submit"
                          onOk={deleteHandleOk}
                          onCancel={deleteHandleCancel}
                          style={{
                            backgroundColor: "#f9fbf2",
                            color: "#0e1c36",
                          }}
                        >
                          <Event />
                        </Modal> */}
                        </div>
                      </div>
                    </Panel>
                  ))}
              </Collapse>
            </div>
          </div>
          <div className="previous-events">
            <div
              className="events-title"
              style={{ marginTop: "1vh", paddingBottom: "1vh" }}
            >
              Previous Events
            </div>
            <div ClassName="events-list">
              <Collapse defaultActiveKey={["1"]} onChange={callback}>
                {previousEvents &&
                  previousEvents.map((event) => (
                    <Panel
                      header={event.event_name}
                      key={event.id}
                      style={{ fontWeight: "900" }}
                    >
                      <div>
                        <div>
                          <img
                            style={{ opacity: ".3" }}
                            src={party}
                            alt="neon lights"
                          ></img>
                        </div>
                        <div>
                          <p>
                            {event.event_city}, {event.event_state}
                          </p>
                        </div>
                      </div>
                      <p>{event.event_date.slice(0, 16)}</p>
                    </Panel>
                  ))}
              </Collapse>
            </div>
          </div>
          <div className="add-event-main-container">
            <div className="add-event">
              <div
                className="add-events-title"
                style={{
                  marginTop: "1vh",
                  paddingBottom: "1vh",
                  fontWeight: "400",
                }}
              >
                Add Event
              </div>
              <Collapse defaultActiveKey={["1"]} onChange={callback}>
                <Panel
                  header="Add your event"
                  // key={event.id}
                  style={{ fontWeight: "900" }}
                >
                  <div className="add-event-form">
                    <form>
                      <div>
                        {errors.map((error, i) => (
                          <div key={i}>{error}</div>
                        ))}
                      </div>
                      <div>
                        <input
                          // className="form-input"
                          ref={nameInputFocus}
                          autoFocus={true}
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
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
        <div className="maps-container">
          <Map />
        </div>
      </div>
    </div>
  );
};
export default EventsContent;
