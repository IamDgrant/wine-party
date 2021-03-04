import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
import EventForm from "../components/auth/EventForm";
import Search from "../components/Search"
import Event from "./Event";

const Home = () => {
  // const style = { background: "#0092ff", padding: "8px 0" };
  return (
    <>
      <div className="main_content">
        <Row gutter={16}>
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
        </Row>
      </div>
    </>
  );
};

export default Home;
