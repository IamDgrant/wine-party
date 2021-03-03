import React, { useState } from "react";
import Modal from "react-modal";
import SignUpForm from "../SignUpForm";
import "..//../styling/buttonStyle.css";

const SignUpButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onSignUp = async (e) => {
    // e.preventDefault();
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={onSignUp} className="btn">
        Sign up
      </button>
      <div className="modal">
        <Modal
          isOpen={modalOpen}
          onHide={false}
          ariaHideApp={false}
          onRequestClose={setModalOpen}
        >
          <SignUpForm />
        </Modal>
      </div>
    </>
  );
};

export default SignUpButton;
