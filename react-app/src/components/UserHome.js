import React from "react";
import { useSelector } from "react-redux";
import UserHeader from "../components/UserHeader";
import FutureEvent from "../components/FutureEvent"
import "./styling/userHome.css";

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
          <FutureEvent />
          {/* <div className="suggested-hosts"></div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
