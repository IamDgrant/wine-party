import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { photoUpload } from "../store/session";
import { Breadcrumb, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "../components/styling/profileContentStyling.css";

const ProfileContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [photoFile, setPhotoFile] = useState();
  // const [photoUrl, setPhotoUrl] = useState(
  //   sessionUser ? sessionUser.photoUrl : ""
  // );

  const dispatch = useDispatch();

  useEffect(() => {}, [sessionUser.profile_image]);

  const updateEditing = () => {
    // setIsEditing(true);
  };

  const submit = () => {
    dispatch(photoUpload(photoFile)).then((res) => {
      // console.log(res);
      // setPhotoUrl(res.url);
    });
  };

  const handleUpload = (e) => {
    console.log(e);
    setPhotoFile(e.target.files[0]);
  };

  const saveEditingImage = () => {
    submit();
    setIsEditingImage(!isEditingImage);
  };

  const updateEditingImage = () => {
    setIsEditingImage(!isEditingImage);
  };

  // const props = {
  //   name: "user_file",
  //   // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //   headers: {
  //     authorization: "authorization-text",
  //   },
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };

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
              {
                isEditingImage ? (
                  sessionUser.profile_image != null ? (
                    <div className="image-upload">
                      <label for="file-input">
                        <img
                          src={sessionUser.profile_image}
                          alt="UserPhoto"
                          className="profile-pic2"
                        ></img>
                      </label>
                      <form
                        className="image-forms"
                        encType="multipart/form-data"
                        onSubmit={submit}
                      >
                        <input
                          id="file-input"
                          type="file"
                          name="user_file"
                          onChange={handleUpload}
                        ></input>
                      </form>
                    </div>
                  ) : (
                    //    <form
                    //    className="image-forms"
                    //    encType="multipart/form-data"
                    //    onSubmit={submit}
                    //  >

                    //  </form>
                    <label for="file-input">
                      <img
                        src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
                        alt="Avatar"
                        className="profile-pic2"
                      ></img>
                    </label>
                  )
                ) : sessionUser.profile_image != null ? (
                  <img
                    src={sessionUser.profile_image}
                    alt="UserPhoto"
                    className="profile-pic"
                  ></img>
                ) : (
                  <img
                    src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
                    alt="Avatar"
                    className="profile-pic "
                  ></img>
                )

                //  (
                //     <img
                //       src={sessionUser.profile_image}
                //       alt="UserPhoto"
                //       className="profile-pic2"
                //     ></img>
                //   ) : (
                //     <img
                //       src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
                //       alt="Avatar"
                //       className="profile-pic2"
                //     ></img>
                //   )) : (sessionUser.profile_image != null ? (
                //     <img
                //       src={sessionUser.profile_image}
                //       alt="UserPhoto"
                //       className="profile-pic"
                //     ></img>
                //   ) : (
                //     <img
                //       src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
                //       alt="Avatar"
                //       className="profile-pic "
                //     ></img>
                //   )
              }
              {/* {sessionUser.profile_image != null ? (
                <img
                  src={sessionUser.profile_image}
                  alt="UserPhoto"
                  className="profile-pic"
                ></img>
              ) : (
                <img
                  src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
                  alt="Avatar"
                  className="profile-pic "
                ></img>
              )} */}
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
            {/* {isEditingImage ? (
              <div className="image-form-container">
                <form
                  className="image-forms"
                  encType="multipart/form-data"
                  onSubmit={submit}
                >
                  <input
                    id="myuniqueid"
                    type="file"
                    name="user_file"
                    onChange={handleUpload}
                  ></input>
                </form>
              </div>
            ) : (
              ""
            )} */}
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
