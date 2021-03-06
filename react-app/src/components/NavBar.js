import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Menu } from "antd";
import Search from "../components/Search";
import LogoutButton from "../components/auth/LogoutButton";
import { profileImage } from "../store/session";
import "./styling/navBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [photoFile, setPhotoFile] = useState();
  const [photoUrl, setPhotoUrl] = useState(
    sessionUser ? sessionUser.photoUrl : ""
  );

  function handleUpload(e) {
    setPhotoFile(e.target.files[0]);
  }

  function submit(e) {
    e.preventDefault();
    dispatch(profileImage(photoFile)).then((res) => {
      setPhotoUrl(res.url);
    });
  }

  return (
    sessionUser && (
      <>
        
      </>
    )
  );
};

export default NavBar;
