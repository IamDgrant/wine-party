import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seeEvent, deleteEvent } from "../../../store/event";
import { Modal, Button } from "antd";
import "../../styling/eventStyle.css";

const SeeEvent = ({ id }) => {
  const [isSeeEventModalVisible, setSeeEventModalVisible] = useState(false);

  const sessionEvent = useSelector((state) => state.event.event);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) dispatch(seeEvent());
    // else {
    //   dispatch();
    //   setData(id);
    // }
  }, [id]);

  const todaysDate = new Date();
  const futureEvents = sessionEvent?.filter((events) => {
    return new Date(events.event_date) > todaysDate;
  });

  const showSeeEventModal = () => {
    setSeeEventModalVisible(true);
  };

  const seeEventHandleOk = () => {
    // onSubmission();
    setSeeEventModalVisible(false);
  };

  const seeEventHandleCancel = () => {
    setSeeEventModalVisible(false);
  };

  return (
    <>
      <div className="event_size">
        {sessionEvent &&
          futureEvents?.map((futureEvent) => (
            <div>
              <Button
                htmlType="submit"
                type="primary"
                size="medium"
                style={{
                  color: "#0e1c36",
                  backgroundColor: "#f9fbf2",
                  borderColor: "#f9fbf2",
                  fontFamily: "Bebas Neue",
                }}
                onClick={showSeeEventModal}
              >
                <div key={futureEvent.id} className="events">
              <div className="event-name">
                <p className="event_title">{futureEvent.event_name}</p>
              </div>
              <div className="main-event-date">
                <div className="event-list">
                  <div className="event_date">
                    {futureEvent.event_date.slice(0, 16)}
                  </div>
                </div>
              </div>
            </div>
              </Button>
              <Modal
                title="Edit Event"
                visible={isSeeEventModalVisible}
                onOk={seeEventHandleOk}
                onCancel={seeEventHandleCancel}
                style={{
                  backgroundColor: "#f9fbf2",
                  color: "#0e1c36",
                }}
              >
                <h1>Hello</h1>
              </Modal>
            </div>
          ))}
      </div>
    </>
  );
};

export default SeeEvent;
