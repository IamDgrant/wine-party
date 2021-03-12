import React, { useState } from "react";
import { useSelector } from "react-redux";

const ShowPreviousEvent = () => {
  const [showModal, setShowModal] = useState(false);

  const todaysDate = new Date();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionEvent = useSelector((state) => state.event.event);
  const sessionHost = useSelector((state) => state.host);

  const pastEvents = sessionEvent.filter((events) => {
    return new Date(events.event_date) < todaysDate;
  });

// console.log(pastEvents.);
// console.log(sessionEvent.);

  return (
    <>
      <div className="mr-4 p-3 text-center">
        <button
          className="profile-update-btn bg-transparent px-2 rounded"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => setShowModal(true)}
        >
          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
            {pastEvents.length}
          </span>
          <span className="text-sm text-gray-500">Previous Events</span>
        </button>
      </div>
      {showModal ? (
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
                    <div className="event-host">
                      <div className="event_host">{pastEvent.host_id.first_name}</div>
                    </div>
                  </div>
                  {/* <Info event={event}></Info> */}
                </div>
              ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default ShowPreviousEvent;
