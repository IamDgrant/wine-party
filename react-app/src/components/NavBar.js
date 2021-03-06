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
  // const [photoFile, setPhotoFile] = useState();
  // const [photoUrl, setPhotoUrl] = useState(
  //   sessionUser ? sessionUser.photoUrl : ""
  // );

  // function handleUpload(e) {
  //   setPhotoFile(e.target.files[0]);
  // }

  // function submit(e) {
  //   e.preventDefault();
  //   dispatch(profileImage(photoFile)).then((res) => {
  //     setPhotoUrl(res.url);
  //   });
  // }

  return (
    // sessionUser && (
    <>
    <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    <div className="search-container">
      {/* <form>
          <input type="text" placeholder="Search..." name="search" />
          <button type="submit"><i className="fa fa-search"></i></button>
      </form> */}
     </div>
    </div>
      {/* <div>
        <ul>
          <li>
            <a className="/" href="#home">
              Events
            </a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div> */}
    </>
    // )
  );
};

export default NavBar;
