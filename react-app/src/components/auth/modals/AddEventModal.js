import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "antd";
import { message } from "antd";
import { createEvent } from "../../../store/event";
import Event from "../../Event";
// import AddEventModal from "../components/auth/modals/AddEventModal"
// import party1 from "../images/pexels-fauxels-3184183.jpg";

const AddEvent = ({ user_id }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [click, setClick] = useState(false);
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
    // setShowModal(false);
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

  const updatePostalCode = (e) => {
    setEventPostalCode(e.target.value);
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
          type="primary"
          size="medium"
          // ghost="true"
          style={{
            color: "#0e1c36",
            backgroundColor: "#f9fbf2",
            borderColor: "#f9fbf2",
          }}
          onClick={showAddEventModal}
        >
          Add Event
        </Button>
        <Modal
          title="Add an Event"
          visible={isAddEventModalVisible}
          onOk={addEventHandleOk}
          onCancel={addEventHandleCancel}
          style={{
            backgroundColor: "#f9fbf2",
            color: "#0e1c36",
          }}
        >
          
        </Modal>
      </div>
    </>
  );
};

export default AddEvent;
