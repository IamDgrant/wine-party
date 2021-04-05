import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "antd";
// import { message } from "antd";
// import { createEvent } from "../store/event";
// import EventForm from "./auth/forms/CreateEventForm";
import "../components/styling/buttonStyle.css";
import { PlusOutlined } from "@ant-design/icons";

const AddEvent = ({ user_id }) => {
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  // const [isAddEventModalVisible, setAddEventModalVisible] = useState(false);
  // const [event_name, setEventName] = useState("");
  // const [event_date, setEventDate] = useState("");
  // const [event_city, setEventCity] = useState("");
  // const [event_state, setEventState] = useState("");
  // const [event_postal_code, setEventPostalCode] = useState("");

  // const error = () => {
  //   message.error("Please enter a event name!");
  // };

  // const onSubmission = async (e) => {
  //   // e.preventDefault();
  //   if (!event_name) {
  //     error();
  //     return;
  //   }
  //   dispatch(
  //     createEvent({
  //       user_id,
  //       event_name,
  //       event_date,
  //       event_city,
  //       event_state,
  //       event_postal_code,
  //     })
  //   ).then(() => {
  //     setEventName("");
  //     setEventDate("");
  //     setEventCity("");
  //     setEventState("");
  //     setEventPostalCode("");
  //   });
  // };

  return (
    <>
      {/* <div className="">
        <NavLink exact to="/events">
          <Button
            htmlType="submit"
            type="text"
            size="small"
            className="event-btn"
            style={{
              height: "150px",
              width: "150px",
              color: "#f9fbf2",
              fontFamily: "Montserrat",
            }} */}
            {/* // onClick={showAddEventModal} */}
          {/* // > */}
            {/* <div className="plus">
              <PlusOutlined
                style={{ fontSize: "6vh", color: "rgb(158, 166, 174)" }}
              />
            </div>
            <div className="add-event-btn">
              <h5>Add Event</h5>
            </div>
          </Button>
        </NavLink> */}
        {/* <Modal
          okText="Submit"
          title="Add an Event"
          visible={isAddEventModalVisible}
          onOk={addEventHandleOk}
          onCancel={addEventHandleCancel}
          style={{
            backgroundColor: "#f9fbf2",
            color: "#0e1c36",
          }}
        >
          <EventForm
            event_name={event_name}
            setEventName={setEventName}
            setEventDate={setEventDate}
            setEventCity={setEventCity}
            setEventState={setEventState}
            setEventPostalCode={setEventPostalCode}
            event_date={event_date}
            event_city={event_city}
            event_state={event_state}
            event_postal_code={event_postal_code}
          />
          
        </Modal> */}
      {/* </div> */}
    </>
  );
};

export default AddEvent;
