import React from "react";
import { login } from "../../services/auth";
import { useDispatch } from "react-redux";

const LogInButton = () => {
  const dispatch = useDispatch();

  const onLogIn = async (e) => {
    console.log("I'M IN!!!!!!!!!!!!!!");
    return dispatch(login());
  };

  return <button onClick={onLogIn}>Log in</button>;
};

export default LogInButton;