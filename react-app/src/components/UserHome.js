import React from "react";
import { Row, Col } from "antd";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";

import "./styling/userHome.css";
import wine1 from "../images/shutterstock_1486697366.png";

const Home = () => {
  return (
    <>
      <div>
        <div className="navBar-container">
          <NavBar />
        </div>
        <div className="main-content-container">
          <div className="profile-container">
            <div>{/* <Profile /> */}</div>
            <div
                className="background-image"
                style={{
                  backgroundImage: `url(${wine1})`,
                  backgroundRepeat: "no-repeat",
                }}
            ></div>
          </div>
        </div>
        <div className="footer-container">
          <div>About Wine Party</div>
          <div>Plan Your Event</div>
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
