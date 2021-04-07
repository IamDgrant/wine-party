import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Button, Alert } from "antd";
import { update_User, photoUpload } from "../store/session";
import idCard from "../assets/icons/id-card-regular.svg";
import "../components/styling/detailsContentStyling.css";

const DetailsContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingIdentification, setIsEditingIdentification] = useState(false);
  const [isEditingBirthday, setIsEditingBirthday] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [identification, setIdentification] = useState("");
  const [birthday, setBirthday] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [photoFile, setPhotoFile] = useState();

  const dispatch = useDispatch();

  const submit = () => {
    dispatch(photoUpload(photoFile));
  };

  const handleUpload = (e) => {
    setPhotoFile(e.target.files[0]);
  };

  const saveEditingImage = () => {
    if (photoFile === undefined) {
      console.log("EMPTY");
    } else {
      submit();
    }

    setIsEditingImage(!isEditingImage);
  };

  const updateEditingImage = () => {
    setIsEditingImage(!isEditingImage);
  };

  const onSaveFirstName = async (e) => {
    // e.preventDefault();
    let newErrors = [];
    dispatch(
      update_User({
        first_name,
      })
    ).catch(async (res) => {
      console.log(res);
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
      }
    });
  };

  const onSaveLastName = async (e) => {
    // e.preventDefault();
    let newErrors = [];
    dispatch(
      update_User({
        last_name,
      })
    ).catch(async (res) => {
      console.log(res);
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
      }
    });
  };

  const onSaveEmail = async (e) => {
    // e.preventDefault();
    let newErrors = [];
    dispatch(
      update_User({
        signInEmail,
      })
    ).catch(async (res) => {
      console.log(res);
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
      }
    });
  };

  const onSavePhone = async (e) => {
    // e.preventDefault();
    let newErrors = [];
    dispatch(
      update_User({
        phone_number,
      })
    ).catch(async (res) => {
      console.log(res);
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
      }
    });
  };

  const onSaveAddress = async (e) => {
    // e.preventDefault();
    let newErrors = [];
    dispatch(
      update_User({
        street,
        city,
        state,
        postal_code,
      })
    ).catch(async (res) => {
      console.log(res);
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
      }
    });
  };

  const onSaveBirthday = async (e) => {
    // e.preventDefault();
    let newErrors = [];
    dispatch(
      update_User({
        birthday,
      })
    ).catch(async (res) => {
      console.log(res);
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
      }
    });
  };

  const updateEditingName = () => {
    setIsEditingName(!isEditingName);
  };
  const saveEditingName = () => {
    if (first_name === "") {
      <Alert
        message="Warning"
        description="Please add your first name."
        type="warning"
        showIcon
        closable
      />;
    } else {
      onSaveFirstName();
    }
    if (last_name === "" || last_name.length < 2) {
      console.log("YEOP!!!!!");
      <Alert
        message="Please add your last name."
        banner
        // type="warning"
        // showIcon
        // closable
      />;
    } else {
      onSaveLastName();
    }
    setIsEditingName(!isEditingName);
  };

  const updateEditingEmail = () => {
    setIsEditingEmail(!isEditingEmail);
  };
  const saveEditingEmail = () => {
    if (signInEmail === "") {
      <Alert
        message="Warning"
        description="Please add a valid email."
        type="warning"
        showIcon
        closable
      />;
    } else {
      onSaveEmail();
    }
    setIsEditingEmail(!isEditingEmail);
  };

  const updateEditingPhone = () => {
    setIsEditingPhone(!isEditingPhone);
  };
  const saveEditingPhone = () => {
    if (phone_number === "" || phone_number.length < 10) {
      <Alert
        message="Warning"
        description="Please add a valid phone number at least 10 characters."
        type="warning"
        showIcon
        closable
      />;
    } else {
      onSavePhone();
    }
    setIsEditingPhone(!isEditingPhone);
  };

  const updateEditingAddress = () => {
    setIsEditingAddress(!isEditingAddress);
  };
  const saveEditingAddress = () => {
    if (street === "" || city === "" || state === "" || postal_code === "") {
      console.log("FILL IT OUT");
      <Alert
        message="Warning"
        description="Please add a valid phone number at least 10 characters."
        type="warning"
        showIcon
        closable
      />;
    } else {
      onSaveAddress();
    }
    setIsEditingAddress(!isEditingAddress);
  };

  const updateEditingBirthday = () => {
    setIsEditingBirthday(!isEditingBirthday);
  };
  const saveEditingBirthday = () => {
    if (birthday === "") {
      <Alert
        message="Warning"
        description="Please add your birthday."
        type="warning"
        showIcon
        closable
      />;
    } else {
      onSaveBirthday();
    }
    setIsEditingBirthday(!isEditingBirthday);
  };

  const updateEditingIdentification = () => {
    setIsEditingIdentification(!isEditingIdentification);
  };
  const saveEditingIdentification = () => {
    setIsEditingIdentification(!isEditingIdentification);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateEmail = (e) => {
    setSignInEmail(e.target.value);
  };
  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const updateBirthday = (e) => {
    setBirthday(e.target.value);
  };
  const updateIdentification = (e) => {
    setIdentification(e.target.value);
  };
  const updateStreet = (e) => {
    setStreet(e.target.value);
  };
  const updateCity = (e) => {
    setCity(e.target.value);
  };
  const updateState = (e) => {
    setState(e.target.value);
  };
  const updatePostalCode = (e) => {
    setPostalCode(e.target.value);
  };

  const stateId = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="id-card"
      class="svg-inline--fa fa-id-card fa-w-18"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="currentColor"
        d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H303.2c.9-4.5.8 3.6.8-22.4 0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6 0 26-.2 17.9.8 22.4H48V144h480v288zm-168-80h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-168 96c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"
      ></path>
    </svg>
  );

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
              {isEditingName}
              <div className="profile-name">
                <div className="full-name">Full Name</div>
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
              {isEditingEmail}
              <div className="full-name">Email</div>
              {isEditingEmail ? (
                <div className="edit-name">
                  <Button onClick={saveEditingEmail}>Save</Button>
                </div>
              ) : (
                <div className="edit-name">
                  <Button onClick={updateEditingEmail}>Edit</Button>
                </div>
              )}
            </div>
            {isEditingEmail ? (
              <div className="details-form">
                <form className="first-last-name-forms">
                  <input
                    style={{
                      height: "25px",
                      width: "200px",
                      fontFamily: "Montserrat",
                      fontSize: "13px",
                    }}
                    className="details-email-input"
                    name="email"
                    type="text"
                    placeholder={sessionUser.email}
                    onChange={updateEmail}
                    value={signInEmail}
                  />
                </form>
              </div>
            ) : (
              <div className="name">{sessionUser.email}</div>
            )}
          </div>
          <div className="line-break"></div>
        </div>
        <div className="personal-details">
          <div className="details-name">
            <div className="full-name-edit">
              {isEditingPhone}
              <div className="full-name">Phone Number</div>
              {isEditingPhone ? (
                <div className="edit-name">
                  <Button onClick={saveEditingPhone}>Save</Button>
                </div>
              ) : (
                <div className="edit-name">
                  <Button onClick={updateEditingPhone}>Edit</Button>
                </div>
              )}
            </div>
            {isEditingPhone ? (
              <div className="details-form">
                <form className="first-last-name-forms">
                  <input
                    style={{
                      height: "25px",
                      width: "200px",
                      fontFamily: "Montserrat",
                      fontSize: "13px",
                    }}
                    className="details-name-input"
                    name="phone number"
                    type="text"
                    placeholder={sessionUser.phone_number}
                    onChange={updatePhoneNumber}
                    value={phone_number}
                  />
                </form>
              </div>
            ) : (
              <div className="name">{sessionUser.phone_number}</div>
            )}
          </div>
          <div className="line-break"></div>
        </div>
        <div className="personal-details">
          <div className="details-name">
            <div className="full-name-edit">
              {isEditingAddress}
              <div className="full-name">Address</div>
              {isEditingAddress ? (
                <div className="edit-name">
                  <Button onClick={saveEditingAddress}>Save</Button>
                </div>
              ) : (
                <div className="edit-name">
                  <Button onClick={updateEditingAddress}>Edit</Button>
                </div>
              )}
            </div>
            {isEditingAddress ? (
              <div className="details-form">
                <form className="first-last-name-forms">
                  <input
                    style={{
                      height: "25px",
                      width: "200px",
                      fontFamily: "Montserrat",
                      fontSize: "13px",
                    }}
                    className="details-name-input"
                    name="first name"
                    type="text"
                    placeholder=""
                    onChange={updateStreet}
                    value={street}
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
                    className="details-name-input"
                    name="last name"
                    type="text"
                    placeholder={sessionUser.city}
                    onChange={updateCity}
                    value={city}
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
                    className="details-name-input"
                    name="last name"
                    type="text"
                    placeholder={sessionUser.state}
                    onChange={updateState}
                    value={state}
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
                    className="details-name-input"
                    name="last name"
                    type="text"
                    placeholder={sessionUser.postal_code}
                    onChange={updatePostalCode}
                    value={postal_code}
                  />
                </form>
              </div>
            ) : (
              <div className="name">
                {sessionUser.city} {sessionUser.state} {sessionUser.postal_code}
              </div>
            )}
          </div>
          <div className="line-break"></div>
        </div>
        <div className="personal-details">
          <div className="details-name">
            <div className="full-name-edit">
              {isEditingBirthday}
              <div className="full-name">Date of Birth</div>
              {isEditingBirthday ? (
                <div className="edit-name">
                  <Button onClick={saveEditingBirthday}>Save</Button>
                </div>
              ) : (
                <div className="edit-name">
                  <Button onClick={updateEditingBirthday}>Edit</Button>
                </div>
              )}
            </div>
            {isEditingBirthday ? (
              <div className="details-form">
                <form className="first-last-name-forms">
                  <input
                    style={{
                      height: "25px",
                      width: "200px",
                      fontFamily: "Montserrat",
                      fontSize: "13px",
                    }}
                    className="details-name-input"
                    name="identification"
                    type="date"
                    placeholder=""
                    onChange={updateBirthday}
                    value={birthday}
                  />
                </form>
              </div>
            ) : (
              <div className="name">
                {/* {sessionUser.first_name} {sessionUser.last_name} */}
              </div>
            )}
          </div>
          <div className="line-break"></div>
        </div>
        <div className="id-image-container">
          <div className="id-image">
            <div className="name-id">
              <div className="outer-full-name-container">
                <div className="full-name">Government id</div>
              </div>

              <div className="edit-image">
                {isEditingIdentification ? (
                  <div className="edit-image">
                    <Button onClick={saveEditingIdentification}>Save</Button>
                  </div>
                ) : (
                  <div className="edit-image">
                    <Button onClick={updateEditingIdentification}>Edit</Button>
                  </div>
                )}
              </div>
            </div>
            {isEditingIdentification ? (
              sessionUser.identification != null ? (
                <div className="id-image-upload">
                  <label for="file-input">
                    <img
                      src={sessionUser.identification}
                      alt="IDPhoto"
                      className="id-pic"
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
                  <img src={idCard} alt="Avatar" className="id-pic"></img>
                </label>
              )
            ) : sessionUser.identification != null ? (
              <img
                src={sessionUser.identification}
                alt="IdPhoto"
                className="id-pic"
              ></img>
            ) : (
              <img src={idCard} alt="Avatar" className="id-pic"></img>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsContent;
