import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    console.log("I'M OUT!!!!!!!!!!!!!!");
    return dispatch(logout());
  };

  return (
    <>
      <button onClick={onLogout} className="btn">
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
