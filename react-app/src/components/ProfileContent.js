import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { photoUpload, update_User } from "../store/session";
import { Breadcrumb, Button, message } from "antd";
import "../components/styling/profileContentStyling.css";
import img_placeholder from "../assets/images/empty-profile-picture-png.png";

const ProfileContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [first_name, setFirstName] = useState(sessionUser.first_name);
  const [last_name, setLastName] = useState(sessionUser.last_name);
  const [about, setAbout] = useState(sessionUser.about);
  const [city, setCity] = useState(sessionUser.city);
  const [state, setState] = useState(sessionUser.state);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [photoFile, setPhotoFile] = useState();

  // useEffect(() => {}, [sessionUser]);

  const onEditSubmission = async () => {
    let newErrors = [];
    await dispatch(
      update_User({
        // id,
        first_name,
        last_name,
        city,
        state,
        about,
        // favorites,
      })
    ).catch(async (res) => {
      console.log(res);
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
      }
    });
  };

  // const onSaveFirstName = async (e) => {
  //   // e.preventDefault();
  //   let newErrors = [];
  //   dispatch(
  //     update_User({
  //       first_name,
  //     })
  //   ).catch(async (res) => {
  //     console.log(res);
  //     const data = await res.json();
  //     if (data && data.errors) {
  //       newErrors = data.errors;
  //     }
  //   });
  // };

  // const onSaveLastName = async (e) => {
  //   // e.preventDefault();
  //   let newErrors = [];
  //   dispatch(
  //     update_User({
  //       last_name,
  //     })
  //   ).catch(async (res) => {
  //     console.log(res);
  //     const data = await res.json();
  //     if (data && data.errors) {
  //       newErrors = data.errors;
  //     }
  //   });
  // };

  // const onSaveAbout = async (e) => {
  //   // e.preventDefault();
  //   let newErrors = [];
  //   dispatch(
  //     update_User({
  //       about,
  //     })
  //   ).catch(async (res) => {
  //     console.log(res);
  //     const data = await res.json();
  //     if (data && data.errors) {
  //       newErrors = data.errors;
  //     }
  //   });
  // };

  const submit = () => {
    dispatch(photoUpload(photoFile));
  };

  const handleUpload = (e) => {
    setPhotoFile(e.target.files[0]);
  };

  const saveEditingImage = () => {
    if (photoFile === undefined) {
    } else {
      submit();
    }
    setIsEditingImage(!isEditingImage);
  };

  // const updateEditing = () => {
  //   // setIsEditing(true);
  // };

  const updateEditingImage = () => {
    setIsEditingImage(!isEditingImage);
  };

  const updateEditingName = () => {
    setIsEditingName(!isEditingName);
  };
  const saveEditingName = () => {
    onEditSubmission();
    setIsEditingName(!isEditingName);
  };

  const updateEditingAbout = () => {
    setIsEditingAbout(!isEditingAbout);
  };
  const saveEditingAbout = () => {
    onEditSubmission();
    setIsEditingAbout(!isEditingAbout);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateAbout = (e) => {
    setAbout(e.target.value);
  };

  const edit = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="edit"
      class="svg-inline--fa fa-edit fa-w-18"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="currentColor"
        d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
      ></path>
    </svg>
  );

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
              {isEditingImage ? (
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
                  <label for="file-input">
                    <img
                      src={img_placeholder}
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
                  src={img_placeholder}
                  alt="Avatar"
                  className="profile-pic"
                ></img>
              )}
              <div className="join-date">
                Toasting with us since{" "}
                {sessionUser && sessionUser.created_at.slice(12, 17)}
              </div>
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
          </div>
          <div className="details-name">
            <div className="full-name-edit">
              {isEditingName}
              <div className="profile-name">
                {/* <div className="full-name">Full Name</div> */}
              </div>

              {isEditingName ? (
                <div className="edit-name">
                  <Button onClick={saveEditingName}>Save</Button>
                </div>
              ) : (
                <div className="edit-name">
                  <Button onClick={updateEditingName}>Edit</Button>
                </div>
              )}
            </div>
            {isEditingName ? (
              <div className="profile-form">
                <form className="first-last-name-forms">
                  <input
                    style={{
                      height: "25px",
                      width: "200px",
                      fontFamily: "Montserrat",
                      fontSize: "13px",
                    }}
                    className="details-first-name-input"
                    name="first name"
                    type="text"
                    placeholder={sessionUser.first_name}
                    onChange={updateFirstName}
                    value={first_name}
                  />
                </form>
                <form>
                  <input
                    style={{
                      height: "25px",
                      width: "200px",
                      fontFamily: "Montserrat",
                      fontSize: "13px",
                    }}
                    className="details-last-name-input"
                    name="last name"
                    type="text"
                    placeholder={sessionUser.last_name}
                    onChange={updateLastName}
                    value={last_name}
                  />
                </form>
              </div>
            ) : (
              <div className="name">
                {sessionUser.first_name} {sessionUser.last_name}
              </div>
            )}
          </div>
          <div className="line-break"></div>
        </div>
        <div className="personal-details">
          <div className="details-name">
            <div className="full-name-edit">
              {isEditingAbout}
              <div className="full-name">About</div>
              {isEditingAbout ? (
                <div className="edit-name">
                  <Button onClick={saveEditingAbout}>Save</Button>
                </div>
              ) : (
                <div className="edit-name">
                  <Button onClick={updateEditingAbout}>Edit</Button>
                </div>
              )}
            </div>
            {isEditingAbout ? (
              <div className="details-form">
                <form className="about-form">
                  <input
                    style={{
                      height: "100px",
                      width: "500px",
                      fontFamily: "Montserrat",
                      fontSize: "13px",
                    }}
                    className="profile-about-input"
                    name="about"
                    type="text"
                    placeholder={sessionUser.about}
                    onChange={updateAbout}
                    value={about}
                  />
                </form>
              </div>
            ) : (
              <div className="profile-about">{sessionUser.about}</div>
            )}
          </div>
          {/* <div className="line-break"></div> */}
        </div>
      </div>
    </div>
  );
};
export default ProfileContent;
