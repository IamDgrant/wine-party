import React from "react";
import EventsHeader from "../components/EventsHeader";
import EventsContent from "../components/EventsContent";
import "../components/styling/eventStyling.css";

const Events = () => {
  return (
    <>
      <div className="events">
        <div className="e-header">
          <EventsHeader />
        </div>
        <div className="e-contents">
          <EventsContent />
        </div>
      </div>
    </>
  );
};

export default Events;
