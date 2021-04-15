import React from "react";
import MainHeader from "../components/MainHeader"
import EventsContent from "../components/EventsContent";
import Footer from "../components/Footer";
import "../components/styling/eventStyling.css";

const Events = () => {
  return (
    <>
      <div className="events">
        <div className="e-header">
          <MainHeader />
        </div>
        <div className="e-contents">
          <EventsContent />
        </div>
      </div>
      <div className="user-footer-content">
        <Footer />
      </div>
    </>
  );
};

export default Events;
