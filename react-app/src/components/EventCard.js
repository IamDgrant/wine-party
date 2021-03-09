import React from "react";
import Event from "../components/Event";
import AddEventModal from "../components/auth/modals/AddEventModal"
import party1 from '../images/pexels-fauxels-3184183.jpg'

const EventCard = () => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={party1}
          alt="Friends cheering with glasses of wine"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Upcoming Events</div>
          <Event />
          <AddEventModal />
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
