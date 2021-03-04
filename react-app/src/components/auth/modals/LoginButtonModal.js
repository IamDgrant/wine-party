import React, { useState } from "react";
import Modal from "react-modal";
import LoginForm from "../LoginForm";
import "..//../styling/buttonStyle.css";

const LogInButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = async (e) => {
    e.preventDefault();
    setModalOpen((prev) => !prev);
  };

  // const handleModal = () => {
  //   if (setModalOpen === true) {
  //     setModalOpen(false);
  //   } else if (setModalOpen === false) {
  //     setModalOpen(true);
  //   }
  // };

  return (
    <>
      <button onClick={handleModal} className="btn">
        Log in
      </button>
      <div>
        <Modal
          isOpen={modalOpen}
          // onHide={false}
          ariaHideApp={false}
          // onRequestClose={setModalOpen}
        >
          <LoginForm />
        </Modal>
      </div>
    </>
  );
};

export default LogInButton;
