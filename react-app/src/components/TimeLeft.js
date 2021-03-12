import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";

const TimeUntilEvent = () => {
  const sessionEvent = useSelector((state) => state.event.event)
  const sessionEventDate = useSelector((state) => (
  (sessionEvent.length > 0) ? sessionEvent[0].event_date : null
  ));

  // console.log(sessionEvent);

  const calculateTimeLeft = () => {
    const difference = +new Date(sessionEventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];
  

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  // console.log((timeLeft));
// console.log(new Date());
// console.log(sessionEventDate);


  return (
    <div>
      {/* {sessionEventDate ? (timerComponents.length ? timerComponents : <span>Time's up!</span>) : ""} */}
      {/* <Countdown date={new Date() - sessionEventDate} /> */}
    </div>
  );
};

export default TimeUntilEvent;
