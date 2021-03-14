import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seeEvent, deleteEvent } from "../store/event";
import "./styling/eventStyle.css";

const Event = ({ id }) => {
  const dispatch = useDispatch();

  const sessionEvent = useSelector((state) => state.event.event);
  // console.log(sessionEvent);

  // const eventId = event.id;

  useEffect(() => {
    if (!id) dispatch(seeEvent());
    // else {
    //   dispatch();
    //   setData(id);
    // }
  }, [id]);

  // console.log(id);

  // const onEventUpdate = async (e) => {
  //   e.preventDefault();
  //   event = { event_name, event_city, event_state };
  //   const res = await fetch(`/api/events/update/${eventId}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(event),
  //   });
  //   const data = await res.json();
  //   dispatch(seeEvent());
  // };

  // const EventDelete = async () => {
  //   await dispatch(deleteEvent(event.id));
  //   dispatch(seeEvent());
  // };

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
              <div className="delete-event">
                <button className="delete-button" >
                  ❌
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Event;
