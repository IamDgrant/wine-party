import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import FutureEvent from "../components/FutureEvent";
import "./styling/userHome.css";
import { PlusOutlined } from "@ant-design/icons";

const Home = () => {
  const sessionUser = useSelector((state) => state.session.user);
  // const sessionEvent = useSelector((state) => state.event.event);

  return (
    <>
      <div>
        <div className="main-content-container">
          <div className="header-image-bg">
            <UserHeader />
            <div className="welcome">Welcome, {sessionUser.first_name}!</div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="content-container">
          <div className="events">
            <div className="f-events" id="futureEvent">
              <FutureEvent />
              <div className="add-event">
                <NavLink to="/events">
                  <button className="add-event">
                    <div className="add-event-btn">
                      <PlusOutlined
                        style={{ fontSize: "5vh" }}
                      />
                    </div>
                    {/* <br></br>
                    <br></br>
                    <br></br> */}
                    <h4>Add Event</h4>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          {/* <div className="suggested-hosts"></div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
