import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Menu } from "antd";
import LogoutButton from "../components/auth/LogoutButton";
import "./styling/navBar.css";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    sessionUser && (
      <>
        <div className="navBar-bg">
          <div>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/aboutus" exact={true} activeClassName="active">
              About Us
            </NavLink>
          </div>
          <div>
            <NavLink to="/winespirits" exact={true} activeClassName="active">
              Wines & Spirits
            </NavLink>
          </div>
          <h1 className="wp-logo">Wine Party</h1>

          <LogoutButton />
        </div>
      </>
    )
  );
};

export default NavBar;
