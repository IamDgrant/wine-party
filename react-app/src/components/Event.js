import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Row, Col } from "antd";
import { seeEvent } from "../store/event";
import "./styling/eventStyle.css";

const Event = ({ id }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  //   const sessionHost = useSelector((state) => state.host.host);
  const sessionEvent = useSelector((state) => state.event.event);
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
    return new Date(events.eventDate) > todaysDate;
  });



  return (
    <>
      <div className="event_size">
        {sessionEvent &&
          futureEvents.map((futureEvent) => (
            <div key={futureEvent.id} className="events">
              <div className="event-name">
                <p className="event_title">{futureEvent.eventName}</p>
              </div>
              <div className="main-event-date">
                <div className="event-list">
                  <div className="event_date">{futureEvent.eventDate.slice(0, 16)}</div>
                </div>
              </div>
              {/* <Info event={event}></Info> */}
            </div>
          ))}
      </div>
    </>
  );
};

export default Event;
