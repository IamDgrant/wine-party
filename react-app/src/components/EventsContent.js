import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeEvent, deleteEvent } from "../store/event";
import { Collapse } from "antd";
import "../components/styling/eventsContentStyling.css";

const EventsContent = ({ id }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const sessionEvent = useSelector((state) => state.event.event);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) dispatch(seeEvent());
    // else {
    //   dispatch();
    //   setData(id);
    // }
  }, [id]);

  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

console.log(sessionEvent[0]);

  return (
    <div className="events-content-container">
      <div className="all-events">
        <div className="upcoming-events">
          <div className="events-title">Upcoming Events</div>
          <div ClassName="events-list">
            <Collapse defaultActiveKey={["1"]} onChange={callback}>
              {sessionEvent &&
                sessionEvent.map((event) => (
                  <Panel header={event.event_name} key={event.id} style={{fontWeight: "900"}}>
                    <p>{event.event_city}, {event.event_state}</p>
                    <p>{event.event_date}</p>
                  </Panel>
                ))}
              {/* <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel> */}
            </Collapse>
          </div>
        </div>
        {/* <div className="previous-events">
          <div className="events-title">Previous Events</div> */}
          {/* <div ClassName="events-list">
            <Collapse defaultActiveKey={["1"]} onChange={callback}>
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default EventsContent;
