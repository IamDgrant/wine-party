import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TimeUntilEvent = () => {
  
  const sessionEventDate = useSelector((state) => (
  (state.event.event.length > 0) ? state.event.event[0].eventDate : null
  ));

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
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
      {sessionEventDate ? (timerComponents.length ? timerComponents : <span>Time's up!</span>) : ""}
    </div>
  );
};

export default TimeUntilEvent;
