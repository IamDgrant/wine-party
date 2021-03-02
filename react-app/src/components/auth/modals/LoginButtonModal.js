import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { login } from "../../../services/auth";
import LoginForm from "../LoginForm";
import "..//../styling/buttonStyle.css"

const LogInButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onLogIn = async (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen);
    console.log("I'M IN!!!!!!!!!!!!!!");
    return dispatch(login());
  };

  return(
  <>
    <button onClick={onLogIn} className="btn">
      Log in
    </button>
    <Modal isOpen={modalOpen}>
      <LoginForm />
    </Modal>
  </>
  )
};

export default LogInButton;
