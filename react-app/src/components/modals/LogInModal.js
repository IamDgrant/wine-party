import React, { useState } from "react";
import Modal from "react-modal";
import LoginForm from "../auth/LoginForm";

const LoginModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const setModalOpenTrue = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <>
      <Modal isOpen={modalOpen}>
        <LoginForm />
      </Modal>
    </>
  );
};

export default LoginModal;
