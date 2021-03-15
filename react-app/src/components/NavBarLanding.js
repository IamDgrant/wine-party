import React, { useState } from "react";
import SignupButtonModal from "./auth/modals/SignupButtonModal";
import LoginButtonModal from "./auth/modals/LoginButtonModal";
import "../components/styling/navBarLanding.css";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

const NavBarLanding = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="navBarLanding-navBar">
        <div className="left-container">
          {/* <div className="logo-container"> */}
          <div className="logo">Wine Party</div>
          {/* </div> */}
          <div className="btn-container">
            <div className="home">
              <Button type="text" size="large" style={{ color: "#ec5858" }}>
                Home
              </Button>
            </div>
            <div className="host">
              <Button type="text" size="large" style={{ color: "#ec5858" }}>
                Meet our Hosts
              </Button>
            </div>
            <div className="faq">
              <Button type="text" size="large" style={{ color: "#ec5858" }}>
                FAQ
              </Button>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="signin-btn">
            <Button
              type="dashed"
              size="large"
              ghost="true"
              style={{
                color: "#ec5858",
                borderColor: "#ec5858",
              }}
              onClick={showModal}
            >
              Sign in
            </Button>
            <Modal
              title="Sign in"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              style={{
                backgroundColor: "#ec5858",
                color: "#ffe7a3",
              }}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
          <div className="signup-btn">
            <Button
              type="primary"
              size="large"
              // shape="round"
              // ghost="true"
              style={{
                color: "#ffe7a3",
                backgroundColor: "#ec5858",
                borderColor: "#ec5858",
              }}
              onClick={showModal}
            >
              Sign Up
            </Button>
            <Modal
              title="Sign up"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarLanding;
