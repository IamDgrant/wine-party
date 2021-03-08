import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../styling/logoutButtonStyle.com";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const onLogout = async (e) => {
  //   return dispatch(logout());
  //   if (!user.ok) history.push("/splash");
  // };

  const onLogout = async () => {
    await dispatch(logout());
    history.push("/splash");
  };

  return (
    <>
      <button
        onClick={onLogout}
        className="logout-btn bg-transparent hover:bg-gray-100 hover:bg-opacity-50 text-white font-semibold px-2 border-double border-4  border-white rounded shadow"
      >
        Log out
      </button>
    </>
  );
};

export default LogoutButton;
