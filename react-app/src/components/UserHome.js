import React from "react";
import { useSelector } from "react-redux";
// import { Row, Col } from "antd";
import UserHeader from "../components/UserHeader";
// import Profile from "../components/Profile";
import Date from "../components/Date";
import SeeEvent from "../components/auth/modals/SeeEventModal"
// import TimeLeft from "../components/TimeLeft";

import "./styling/userHome.css";
// import wine1 from "../images/shutterstock_1486697366.png";

const Home = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const sessionEvent = useSelector((state) => state.event.event);

  // console.log(sessionEvent);

  return (
    <>
      <div>
        <div className="main-content-container">
          <div className="navBar-container">
            <UserHeader />
          </div>
          
          {/* <div
            className="background-image"
            // style={{
            //   backgroundImage: `url(${wine1})`,
            //   backgroundRepeat: "no-repeat",
            // }}
          > */}
        </div>

        <div className="content-container">
          {/* <div>About Wine Party</div> */}
          <div>
            <SeeEvent/>
          </div>
          
          <div>Connect</div>
        </div>
      </div>
    </>
  );
};

export default Home;
