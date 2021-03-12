import React, { useSelector, UseEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seeEvent } from "../store/event";
import "./styling/eventStyle.css";

const prevEvents = ({ id }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionEvent = useSelector((state) => state.event.event);

  useEffect(() => {
    if (!id) dispatch(seeEvent());
  }, [id]);

  const todaysDate = new Date();
  const pastEvents = sessionEvent.filter((events) => {
    return new Date(events.event_date) < todaysDate;
  });

  return (
    <>
      <div className="event_size">
        {sessionEvent &&
          pastEvents.map((pastEvent) => (
            <div key={pastEvent.id} className="events">
              <div className="event-name">
                <p className="event_title">{pastEvent.event_name}</p>
              </div>
              <div className="main-event-date">
                <div className="event-list">
                  <div className="event_date">
                    {pastEvent.event_date.slice(0, 16)}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
