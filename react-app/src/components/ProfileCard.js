import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DateTime from "../components/Date";
// import DropdownRender from "../components/auth/modals/DropDownModal";
import EventForm from "../components/auth/EventForm";
import SearchHost from "./SearchHost"
import Host from "../components/Host"

import "./styling/homeCard.css";

const HomeCard = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <div className="entire-card">
        <div className="top-bar">
          <div className="date">
            <DateTime />
          </div>
          <div className="userName">
            {/* <DropdownRender /> */}
          </div>
        </div>
        <div className="middle-bar">
          <div className="event-form">
            <EventForm />
          </div>
          <div>
            <SearchHost />
          </div>
          <div>
            <Host />
          </div>
        </div>
        <div className="bottom-bar"></div>
      </div>
    </>
  );
};

export default HomeCard;
