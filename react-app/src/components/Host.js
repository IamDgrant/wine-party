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
  console.log(sessionHost);

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
      <div className="main-profile">
        {sessionHost &&
          sessionHost.map((host) => (
            <div key={host.id} className="profile-card">
              <div className="profile-name">
                {host.firstName} {host.lastName}
                <div className="profile-city-state">
                  <p className="host-city">
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
