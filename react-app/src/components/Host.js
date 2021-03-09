import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { seeHost } from "../store/host";

const Host = ({ id }) => {
  const dispatch = useDispatch();
  const sessionHost = useSelector((state) => state.host.host);
  // const [data, setData] = useState();

  useEffect(() => {
    if (!id) dispatch(seeHost());
    // else {
    //   dispatch();
    //   setData(id);
    // }
  }, [id]);

  return (
    <>
      <div className="main-profile">
        {sessionHost &&
          sessionHost.map((host) => (
            <div key={host.id} className="host-card">
              <div className="host-profile-name">
                {host.firstName} {host.lastName}
                <div className="host-profile-city-state">
                  <p>
                    {host.city}, {host.state}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Host;
