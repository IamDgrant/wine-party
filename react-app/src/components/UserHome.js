import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import FutureEvent from "../components/FutureEvent";
import PastEvent from "../components/PastEvents";
import AddEvent from "../components/AddEvent";
import Date from "../components/Date"
import "./styling/userHome.css";


const Home = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <div>
        <div className="main-content-container">
          <div className="header-image-bg">
            <UserHeader />
            <div className="welcome">Welcome, {sessionUser.first_name}!</div>
            <div className="date-until">
              <Date />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="content-container">
          <div className="events">
            <div className="f-events" id="Events">
              <FutureEvent />
              <div className="add-event">
                <AddEvent
                  style={{ fontSize: "6vh", color: "rgb(158, 166, 174)" }}
                />
              </div>
            </div>
          </div>
          <div className="past-e">
            <div className="p-events">
              <PastEvent />
            </div>
          </div>

          {/* <div className="suggested-hosts"></div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
