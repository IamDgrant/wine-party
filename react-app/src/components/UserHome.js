import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar"
import "./styling/userHome.css"


const Home = () => {
  return (
    <>
      <div className="main_content">
        <NavBar />
        {/* <Row gutter={16}>
          <Col className="navBar">
          
          </Col>
          <Col span={6}>
            <EventForm />
          </Col>
          <Col span={6}>
            <div>
              <Event />
            </div>
          </Col>
        </Row> */}
      </div>
    </>
  );
};

export default Home;
