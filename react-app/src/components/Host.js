import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { seeHost } from "../store/host";

const Host = ({ id }) => {
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  //   const sessionHost = useSelector((state) => state.host.host);
  const sessionHost = useSelector((state) => state.host.host);
  const [data, setData] = useState();

  //   console.log(sessionEvent);

  useEffect(() => {
    if (!id) dispatch(seeHost());
    // else {
    //   dispatch();
    //   setData(id);
    // }
  }, [id]);

  return (
    <>
      <div className="event_size">
        {sessionHost &&
          sessionHost.map((host) => (
            <Row key={host.id}>
              <Col span={7} className="column_border">
                <p className="event_title">
                  {host.firstName} {host.lastName}
                </p>
              </Col>
              <Col span={5} className="column_border">
                <p className="event_date">{host.state}</p>
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

export default Host;
