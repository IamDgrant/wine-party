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
       <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a className="logo-text" href="#pablo">
        Wine Party
      </a>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none mr-auto">
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /> 
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span className="ml-2">Tweet</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <span className="ml-2">Settings</span>
          </a>
        </li>
      </ul>
      <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
        <div className="flex">
          <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-orange-600 rounded-full text-sm bg-orange-100 items-center rounded-r-none pl-2 py-1 text-orange-800 border-r-0 placeholder-orange-300">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <input type="text" className="px-2 py-1 h-8 border border-solid  border-orange-600 rounded-full text-sm leading-snug text-orange-700 bg-orange-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-orange-300" placeholder="Search orange" />
      </div>
    </div>
  </div>
</nav>
      </>
    )
  );
};

export default NavBar;
