import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { seeEvent } from "../store/event";

const Event = ({ id }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  //   const sessionHost = useSelector((state) => state.host.host);
  const sessionEvent = useSelector((state) => state.event.event);
  const [data, setData] = useState();

  //   console.log(sessionEvent);

  useEffect(() => {
    if (!id) dispatch(seeEvent());
    // else {
    //   dispatch();
    //   setData(id);
    // }
  }, [id]);

  return (
    <>
      <div className="event_size">
        {sessionEvent &&
          sessionEvent.map((event) => (
            <Row key={event.id}>
              <Col span={7} className="column_border">
                <p className="event_title">{event.eventName}</p>
              </Col>
              <Col span={5} className="column_border">
                <p className="event_date">{event.eventDate.slice(0, 16)}</p>
              </Col>
              <Col span={3} className="column_border"></Col>
              <Col span={3} className="column_border">
                {/* <Info event={event}></Info> */}
              </Col>
            </Row>
          ))}
      </div>
    </>
  );
};

export default Event;
