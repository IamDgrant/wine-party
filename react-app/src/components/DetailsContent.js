import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Button } from "antd";
import "../components/styling/detailsContentStyling.css";

const DetailsContent = () => {
  const [isEditing, setIsEditing] = useState(true);

  const sessionUser = useSelector((state) => state.session.user);

  const updateEditing = () => {
    setIsEditing(true);
  };

  return (
    <div className="details-content-container">
      <div className="breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <NavLink to="/account">Account</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Personal Details</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="details-title">Personal Details</div>
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
              <div className="full-name">Email</div>
              <div className="edit-name">
                <Button onClick={updateEditing}>Edit</Button>
              </div>
            </div>
            <div className="name">{sessionUser.email}</div>
          </div>
          <div className="line-break"></div>
        </div>
        <div className="personal-details">
          <div className="details-name">
            <div className="full-name-edit">
              <div className="full-name">Phone number</div>
              <div className="edit-name">
                <Button onClick={updateEditing}>Edit</Button>
              </div>
            </div>
            <div className="name">{sessionUser.phone_number}</div>
          </div>
          <div className="line-break"></div>
        </div>
        <div className="personal-details">
          <div className="details-name">
            <div className="full-name-edit">
              <div className="full-name">Address</div>
              <div className="edit-name">
                <Button onClick={updateEditing}>Edit</Button>
              </div>
            </div>
            <div className="name">{sessionUser.city}, {sessionUser.state} {sessionUser.postal_code}</div>
          </div>
          <div className="line-break"></div>
        </div>
        <div className="personal-details">
          <div className="details-name">
            <div className="full-name-edit">
              <div className="full-name">State ID</div>
              <div className="edit-name">
                <Button onClick={updateEditing}>Edit</Button>
              </div>
            </div>
            {/* <div className="name">{sessionUser.id_image}</div> */}
          </div>
          <div className="line-break"></div>
        </div>
      </div>
      {/* <div ClassName="details-info-email">{sessionUser.email}</div> */}
      <div className="details-info"></div>
    </div>
  );
};
export default DetailsContent;
