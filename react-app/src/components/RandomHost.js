import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seeRandomHost } from "../store/host";
// import ShowHostCard from "./auth/modals/HostCardModal";

const RandomHost = () => {
  const dispatch = useDispatch();
  const sessionHost = useSelector((state) => state.host.host);
  console.log(sessionHost);

  const random = () => {};

  // const [randomHost, setRandomHost] = useState();

  useEffect(() => {
    // console.log("DISPATCHING");
    dispatch(seeRandomHost());
  }, [dispatch]);

  return (
      sessionHost && (
      <div className="random-host">
        <h1>
          {sessionHost.first_name} {sessionHost.last_name}
        </h1>
        <h1>{sessionHost.about}</h1>
      </div>
      )
  );
};

export default RandomHost;
