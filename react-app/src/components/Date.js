import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TimeUntilEvent from "../components/TimeLeft";

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const sessionEvent = useSelector((state) => state.event.event.length > 0) 

  useEffect(() => {
    setDate(new Date());
  }, []);

  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  //   hour12: false,
  // };
  // const dayDate = new Date().toLocaleTimeString("en-us", options).split(",");

  return (
    <>
      <div className="main-date-container">
        {/* <div className="date-countdown-container"> */}
          {/* <div className="today-date text-2xl">
            {dayDate[0]}, {dayDate[1]}
          </div> */}
          <div className="event-date">
           {sessionEvent ? <p style={{fontSize: "16px", display: "flex", justifyContent: "center"}}>Your next event is in <TimeUntilEvent /></p> : null}
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default DateTime;
