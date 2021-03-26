import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TimeUntilEvent = () => {
  const sessionEvents = useSelector((state) => state.event.event);

  const todaysDate = new Date();

  const sessionFutureEvents = sessionEvents?.filter((events) => {
    return new Date(events.event_date) > todaysDate;
  });

  const sessionEventDate = useSelector((state) =>
    (state.event.event.length > 0)? sessionFutureEvents[0].event_date : null
  );

  const calculateTimeLeft = () => {
    const difference = +new Date(sessionEventDate) - +new Date();
    console.log(difference);
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
  return (
    <div>
      {sessionEventDate ? (
        timerComponents.length ? (
          timerComponents
        ) : (
          <span>Time's up!</span>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default TimeUntilEvent;
