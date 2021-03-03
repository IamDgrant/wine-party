import React, { useState } from "react";
import Modal from "react-modal";
import SignUpForm from "../SignUpForm";
import "..//../styling/buttonStyle.css";

const SignUpButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const onSignUp = async (e) => {
    // e.preventDefault();
    setModalVisible((prev) => !prev);
  };

  // const handleOk = () => {
  //   setModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setModalVisible(false);
  // };

  return (
    <>
      <button onClick={onSignUp} className="btn">
        Sign up
      </button>
      <div className="modal" >
        <Modal
          isOpen={modalVisible}
          onHide={false}
          ariaHideApp={false}
          onRequestClose={setModalVisible}
        >
          <SignUpForm />
        </Modal>
      </div>
    </>
  );
};

export default SignUpButton;
