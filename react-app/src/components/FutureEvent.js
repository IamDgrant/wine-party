import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seeEvent, deleteEvent } from "../store/event";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";

import { Card, Col, Row, Modal, Button } from "antd";
import "./styling/futureEventStyle.css";

const FutureEvent = ({ id }) => {
  const [isSeeEventModalVisible, setSeeEventModalVisible] = useState(false);
  const dispatch = useDispatch();

  const sessionEvent = useSelector((state) => state.event.event);
  const sessionHost = useSelector((state) => state.host.host);

  const showSeeEventModal = () => {
    setSeeEventModalVisible(true);
  };

  const seeEventHandleOk = () => {
    setSeeEventModalVisible(false);
  };

  const seeEventHandleCancel = () => {
    setSeeEventModalVisible(false);
  };

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

  const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100,
  });

  const party = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="glass-cheers"
      class="svg-inline--fa fa-glass-cheers fa-w-20"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        fill="#00000"
        d="M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z"
      ></path>
    </svg>
  );

  return (
    <>
      <div className="results">
        <div
          className="upcoming-events"
          style={{
            color: "#0e1c36",
            fontFamily: "Bebas Neue",
            fontSize: "2.5vh",
          }}
        >
          <h1>Upcoming Events</h1>
        </div>
        <Grid
          className="grid"
          component="ul"
          columns={2}
          columnWidth={125}
          itemHeight={200}
          itemWidth={150}
          // duration={500}
          // easing="ease-out"
        >
          {sessionEvent &&
            futureEvents?.map((futureEvent) => (
              <div className="event-cards" key={futureEvent.id}>
                <button
                  htmlType="submit"
                  type="text"
                  size="medium"
                  style={{
                    color: "#0e1c36",
                    backgroundColor: "#ffff",
                    size: "large",
                    borderColor: "#f9fbf2",
                    fontFamily: "Bebas Neue",
                  }}
                  onClick={showSeeEventModal}
                >
                  <div className="party-icon">{party}</div>
                  <div className="events">
                    <div className="event-name">
                      <h1>{futureEvent.event_name}</h1>
                      <h1>{futureEvent.event_date.slice(0, 16)}</h1>
                    </div>
                  </div>
                </button>
                <Modal 
                  title="Your Event"
                  visible={isSeeEventModalVisible}
                  onOk={seeEventHandleOk}
                  onCancel={seeEventHandleCancel}
                  style={{
                    backgroundColor: "#f9fbf2",
                    color: "#0e1c36",
                  }}
                >
                  <div className="party-icon">{party}</div>
                  <div className="events">
                    <div className="event-name">
                      <h1>{futureEvent.event_name}</h1>
                      <h1>{futureEvent.event_date.slice(0, 16)}</h1>
                    </div>
                    <div className="host-name">
                      <div className="host-name">Your Host is: </div>
                    </div>
                  </div>
                </Modal>
              </div>
            ))}
        </Grid>
      </div>
      {/* </div> */}
    </>
  );
};

export default FutureEvent;
