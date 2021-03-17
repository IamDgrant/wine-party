import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
// import "../styling/logoutButtonStyle.com";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    const user = await dispatch(logout());
    if (!user.ok) history.push("/splash");
  };

  return (
    <>
      <Button
        htmlType="submit"
        type="dashed"
        size="medium"
        ghost="true"
        style={{
          color: "#1a1a1d",
          borderColor: "#1a1a1d",
        }}
        onClick={onLogout}
      >
        Log out
      </Button>
    </>
  );
};

export default LogoutButton;
