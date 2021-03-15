import React from "react";
import { useSelector } from "react-redux"
import { Row, Col } from "antd";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import Date from "../components/Date";
// import TimeLeft from "../components/TimeLeft";


import "./styling/userHome.css";
import wine1 from "../images/shutterstock_1486697366.png";

const Home = () => {
  const sessionUser = useSelector((state) => state.session.user)
  const sessionEvent = useSelector((state) => state.event.event);

  // console.log(sessionEvent);

  return (
    <>
      <div>
        <div className="main-content-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${wine1})`,
              backgroundRepeat: "no-repeat",
            }}
          ><div className="welcome">Welcome, {sessionUser.first_name}</div></div>
          
        </div>
        <div className="navBar-container">
          <NavBar />
        </div>
        <div className="footer-container">
          <div>About Wine Party</div>
          <div>
            <Date />
            {/* <Event/> */}
          </div>
          <div>Connect</div>
        </div>
      </div>
      {/* <div className="main-container">
        <div className="navBar-container"></div>
        <div className="main-content-container"></div>
        <div className="footer-container"></div>
      </div> */}
    </>
  );
};

export default Home;
