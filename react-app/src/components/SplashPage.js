import React, { useState } from "react";
import SignupButtonModal from "./auth/modals/SignupButtonModal";
import LoginButtonModal from "./auth/modals/LoginButtonModal";
import "../components/styling/splashPageStyle.css";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

const SplashPage = () => {
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
      <div className="main-container">
        <div className="logo-container">
          <div className="logo-inner">Wine Party</div>
        </div>
        <div className="signup-btn">
          <Button
            type="primary"
            size="large"
            // shape="round"
            // ghost="true"
            style={{ color: "#ffe7a3", backgroundColor: "#a9294f", borderColor: "#a9294f" }}
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
        <div className="signin-btn">
          <Button
            type="primary"
            size="large"
            // shape="round"
            // ghost="true"
            style={{ color: "#ffe7a3", backgroundColor: "#a9294f", borderColor: "#a9294f" }}
            onClick={showModal}
          >
            Sign in
          </Button>
          <Modal
            title="Sign in"
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
    </>
  );
};

export default SplashPage;
