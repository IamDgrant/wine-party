import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TimeUntilEvent from "../components/TimeLeft";

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const sessionEvent = useSelector((state) => state.event.event.length > 0) 

  // console.log(sessionEvent);

  useEffect(() => {
    setDate(new Date());
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const dayDate = new Date().toLocaleTimeString("en-us", options).split(",");

  return (
    <>
      <div className="main-date-container flex items-center">
          <div className="text-base">
           {sessionEvent ? <span><TimeUntilEvent /> until your next party!</span> : null}
          </div>
      </div>
    </>
  );
};

export default DateTime;
