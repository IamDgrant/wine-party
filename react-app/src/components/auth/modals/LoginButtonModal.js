import React, { useState } from "react";
import Modal from "react-modal";
import LoginForm from "../LoginForm";
import "..//../styling/buttonStyle.css";

const LogInButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onLogIn = async (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button onClick={onLogIn} className="btn">
        Log in
      </button>
      <Modal isOpen={modalOpen}>
        <LoginForm />
      </Modal>
    </>
  );
};

export default LogInButton;
