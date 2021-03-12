import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../styling/loginButtonStyle.css";
import placeholderPic from "../../../images/empty-profile-picture-png.png";
import { photoUpload } from "../../../store/session";

const ProfileModal = () => {
  const sessionUser = useSelector((state) =>
    state.session.user ? state.session.user : null
  );
//   const dispatch = useDispatch();
  // const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default ProfileModal;
