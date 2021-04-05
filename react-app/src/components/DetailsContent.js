import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Button } from "antd";
import { updateUser } from "../store/session";
import "../components/styling/detailsContentStyling.css";

const DetailsContent = () => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingIdentification, setIsEditingIdentification] = useState(false);
  const [isEditingBirthday, setIsEditingBirthday] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [identification, setIdentification] = useState("");
  const [birthday, setBirthday] = useState("");

  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSave = async (e) => {
    // e.preventDefault();
    let newErrors = [];
    dispatch(
      updateUser({
        first_name,
        last_name,
        city,
        state,
        postal_code,
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

  const updateEditingName = () => {
    setIsEditingName(!isEditingName);
  };
  const saveEditingName = () => {
    console.log("SAVED");
    setIsEditingName(!isEditingName);
    onSave();
  };

  const updateEditingEmail = () => {
    setIsEditingEmail(!isEditingEmail);
  };
  const saveEditingEmail = () => {
    setIsEditingEmail(!isEditingEmail);
    onSave();
  };

  const updateEditingPhone = () => {
    setIsEditingPhone(!isEditingPhone);
  };
  const saveEditingPhone = () => {
    setIsEditingPhone(!isEditingPhone);
    onSave();
  };

  const updateEditingAddress = () => {
    setIsEditingAddress(!isEditingAddress);
  };
  const saveEditingAddress = () => {
    setIsEditingAddress(!isEditingAddress);
    onSave();
  };

  const updateEditingBirthday = () => {
    setIsEditingBirthday(!isEditingBirthday);
  };
  const saveEditingBirthday = () => {
    setIsEditingBirthday(!isEditingBirthday);
    onSave();
  };

  const updateEditingIdentification = () => {
    setIsEditingIdentification(!isEditingIdentification);
  };
  const saveEditingIdentification = () => {
    setIsEditingIdentification(!isEditingIdentification);
    onSave();
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateStreet = (e) => {
    setCity(e.target.value);
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
  const updateEmail = (e) => {
    setSignInEmail(e.target.value);
  };
  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const updateBirthday = (e) => {
    console.log(e.target.value);
    setBirthday(e.target.value);
  };
  const updateIdentification = (e) => {
    setIdentification(e.target.value);
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
              {isEditingName}
              <div className="full-name">Full Name</div>
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
              <div className="details-form">
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
        <div className="personal-details">
          <div className="details-name">
            <div className="full-name-edit">
              {isEditingIdentification}
              <div className="full-name">State id</div>
              {isEditingIdentification ? (
                <div className="edit-name">
                  <Button onClick={saveEditingIdentification}>Save</Button>
                </div>
              ) : (
                <div className="edit-name">
                  <Button onClick={updateEditingIdentification}>Edit</Button>
                </div>
              )}
            </div>
            {isEditingIdentification ? (
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
                    type="text"
                    placeholder=""
                    onChange={updateIdentification}
                    value={identification}
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
      </div>
      {/* <div ClassName="details-info-email">{sessionUser.email}</div> */}
      <div className="details-info"></div>
    </div>
  );
};
export default DetailsContent;
