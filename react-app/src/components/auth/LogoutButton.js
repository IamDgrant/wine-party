import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import "../styling/logoutButton.css";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    return dispatch(logout());
  };

  return (
    <>
      <button
        onClick={onLogout}
        className="bg-transparent hover:bg-#F9FAFB hover:text-white px-4 border border-white hover:border-transparent rounded btn"
      >
        Log out
      </button>
    </>
  );
};

export default LogoutButton;
