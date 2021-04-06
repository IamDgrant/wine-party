import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { photoUpload } from "../store/session";
import { Breadcrumb, Button } from "antd";
import "../components/styling/profileContentStyling.css";

const ProfileContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [photoFile, setPhotoFile] = useState();
  const [photoUrl, setPhotoUrl] = useState(
    sessionUser ? sessionUser.photoUrl : ""
  );

  const dispatch = useDispatch();

  const updateEditing = () => {
    // setIsEditing(true);
  };

  function handleUpload(e) {
    setPhotoFile(e.target.files[0]);
  }

  function submit(e) {
    e.preventDefault();
    dispatch(photoUpload(photoFile)).then((res) => {
      setPhotoUrl(res.url);
    });
  }

  const updateEditingImage = () => {
    setIsEditingImage(!isEditingImage);
  };
  const saveEditingImage = () => {
    setIsEditingImage(!isEditingImage);
    handleUpload();
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
          <div className="profile-image-container">
            <div className="profile-image">
              {photoUrl != null ? (
                <img
                  src={photoUrl}
                  alt="UserPhoto"
                  className="profile-pic"
                ></img>
              ) : (
                <img
                  src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
                  alt="Avatar"
                  className="profile-pic "
                ></img>
              )}
            </div>
            <div className="edit-image">
              {isEditingImage ? (
                <div className="edit-image">
                  <Button onClick={saveEditingImage}>Save</Button>
                </div>
              ) : (
                <div className="edit-image">
                  <Button onClick={updateEditingImage}>Edit</Button>
                </div>
              )}
            </div>
            {isEditingImage ? (
              <div className="image-form-container">
                <form className="image-forms">
                  <form encType="multipart/form-data" onSubmit={submit}>
                    <input
                      id="myuniqueid"
                      type="file"
                      name="user_file"
                      onChange={handleUpload}
                    ></input>
                    <label for="myuniqueid">Upload Photo</label>
                  </form>
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
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
