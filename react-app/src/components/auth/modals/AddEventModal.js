import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "antd";
import { message } from "antd";
import { createEvent } from "../../../store/event";
import EventForm from "../../forms/CreateEventForm";
import "../../styling/buttonStyle.css"

const AddEvent = ({ user_id }) => {

  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  const [isAddEventModalVisible, setAddEventModalVisible] = useState(false);
  const [event_name, setEventName] = useState("");
  const [event_date, setEventDate] = useState("");
  const [event_city, setEventCity] = useState("");
  const [event_state, setEventState] = useState("");
  const [event_postal_code, setEventPostalCode] = useState("");

  const error = () => {
    message.error("Please enter a event name!");
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

  const showAddEventModal = () => {
    setAddEventModalVisible(true);
  };

  const addEventHandleOk = () => {
    onSubmission();
    setAddEventModalVisible(false);
  };

  const addEventHandleCancel = () => {
    setAddEventModalVisible(false);
  };

  return (
    <>
      <div className="">
        {/* <div className=""> */}
        {/* <div className="">Upcoming Parties</div>
          <Event />
        </div> */}
        <Button
          htmlType="submit"
          type="text"
          size="small"
          className="event-btn"
          style={{
            color: "#f9fbf2",
            fontFamily: "Montserrat"
          }}
          onClick={showAddEventModal}
        >
          Add Event
        </Button>
        {/* <Modal
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
      </div>
    </>
  );
};

export default AddEvent;
