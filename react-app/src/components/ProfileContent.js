import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Button } from "antd";
import "../components/styling/profileContentStyling.css";

const ProfileContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  


  const updateEditing = () => {
    // setIsEditing(true);
  };


  return (
    <div className="profile-content-container">
      <div className="breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/account">Account</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="profile-title">Profile</div>
      <div className="details-inner-main">
        <div className="personal-details">
          <div className="details-name">
            <div className="full-name-edit">
              <div className="full-name">Full Name</div>
              <div className="edit-name">
                <Button onClick={updateEditing}>Edit</Button>
              </div>
            </div>
            <div className="name">
              {sessionUser.first_name} {sessionUser.last_name}
            </div>
          </div>
          <div className="line-break"></div>
        </div>
        <div className="personal-details">
          <div className="details-name">
            <div className="full-name-edit">
              <div className="full-name">Full Name</div>
              <div className="edit-name">
                <Button onClick={updateEditing}>Edit</Button>
              </div>
            </div>
            <div className="name">
              {sessionUser.first_name} {sessionUser.last_name}
            </div>
          </div>
          <div className="line-break"></div>
        </div>
      </div>
    </div>
  );
};
export default ProfileContent;
