import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../services/auth";
import SignUpModal from "../modals/SignUpModal";

const SignUpButton = () => {

  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    // console.log("YES!!!!!!!!!!!!!!!");
    SignUpModal();
    return dispatch(signUp());
  };

  return (
    <>
    <button onClick={onSignUp}>Sign Up</button>
    

    </>

  )
};

export default SignUpButton;
