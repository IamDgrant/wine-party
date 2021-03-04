import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
import EventForm from "../components/auth/EventForm"

const Home = () => {
  // const style = { background: "#0092ff", padding: "8px 0" };
  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <EventForm />
        </Col>
        <Col className="gutter-row" span={6}>
          <div>col-2</div>
        </Col>
       
      </Row>
    </>
  );
};

export default Home;
