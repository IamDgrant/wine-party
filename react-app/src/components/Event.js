import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Row, Col } from "antd";
import { seeEvent } from "../store/event";
import ShowEventModal from "../components/auth/modals/ShowEventModal";
import "./styling/eventStyle.css";

const Event = ({ id }) => {
  const dispatch = useDispatch();

  const sessionEvent = useSelector((state) => state.event.event);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (!id) dispatch(seeEvent());
    // else {
    //   dispatch();
    //   setData(id);
    // }
  }, [id]);

  const todaysDate = new Date();
  const futureEvents = sessionEvent.filter((events) => {
    return new Date(events.event_date) > todaysDate;
  });

  return (
    <>
      <div className="event_size">
        {sessionEvent &&
          futureEvents.map((futureEvent) => (
            <div key={futureEvent.id} className="events">
              <button
                className="signup-btn bg-transparent hover:bg-gray-100 hover:bg-opacity-50 text-white font-semibold px-2 border-double border-4  border-white rounded shadow"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => setShowModal(true)}
              >
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
              </button>
              {showModal ? (
                <>
                  <ShowEventModal />
                </>
              ) : null}
            </div>
          ))}
      </div>
    </>
  );
};

export default Event;
