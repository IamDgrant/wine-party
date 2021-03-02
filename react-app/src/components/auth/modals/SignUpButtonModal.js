import React, { useState } from "react";
import Modal from "react-modal";
import SignUpForm from "../SignUpForm";
import "..//../styling/buttonStyle.css";

const SignUpButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button onClick={onSignUp} className="btn">
        Sign up
      </button>
      <Modal isOpen={modalOpen}>
        <SignUpForm />
      </Modal>
    </>
  );
};

export default SignUpButton;
