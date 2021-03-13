import React from "react";
import { Row, Col } from "antd";
import NavBar from "../components/NavBar";

import "./styling/userHome.css";

const Home = () => {
  return (
    <>
      <Col>
        <Row className="navBar-container">
          <NavBar />
        </Row>
        <Row className="main-content-container">
          <h1>Hello World</h1>
        </Row>
        <Row className="footer-container">
          <div>About Wine Party</div>
          <div>Plan Your Event</div>
          <div>Connect</div>
        </Row>
      </Col>
      {/* <div className="main-container">
        <div className="navBar-container"></div>
        <div className="main-content-container"></div>
        <div className="footer-container"></div>
      </div> */}
    </>
  );
};

export default Home;
