import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seeHost } from "../store/host";
import ShowHostCard from "./auth/modals/HostCardModal";

const Host = ({ id }) => {
  const dispatch = useDispatch();
  const sessionHost = useSelector((state) => state.host.host);

  const [activeHostIndex, setActiveHostIndex] = useState(0);

  useEffect(() => {
    if (!id) dispatch(seeHost());
  }, [id, activeHostIndex]);

  if (sessionHost) {
    return (
      <ShowHostCard
        activeHostIndex={activeHostIndex}
        setActiveHostIndex={setActiveHostIndex}
        sessionHost={sessionHost}
      />
    );
  } else {
    return null;
  }
};

export default Host;
