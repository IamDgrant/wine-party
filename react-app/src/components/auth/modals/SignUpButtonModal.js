import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { signUp } from "../../../services/auth";
import SignUpForm from "../SignUpForm";
import "..//../styling/buttonStyle.css"

const SignUpButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen);

    return dispatch(signUp());
  };

  return (
    <>
      <button onClick={onSignUp} className="btn">Sign up</button>
      <Modal isOpen={modalOpen}>
        <SignUpForm />
      </Modal>
    </>
  );
};

export default SignUpButton;
