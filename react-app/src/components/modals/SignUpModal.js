import React, { useState } from "react";
import Modal from "react-modal";
import SignUpForm from "../auth/SignUpForm";

const SignUpModal = () => {
  console.log("I'M IN!!!!!!!!!!!!!!");
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    console.log("WORKS!!!!!!!!!!!!!!");
    setModalOpen(!modalOpen);
  };
  

  return (
    <>
      <Modal modelOpen={modalOpen} onRequestClose={toggleModal} />
      <SignUpForm />
    </>
  );
};

export default SignUpModal;
