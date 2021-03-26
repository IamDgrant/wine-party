import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../styling/signUpButtonStyle.css";
import { createUser } from "../../../store/session";

const SignupModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignup = async (e) => {
    e.preventDefault();
    let newErrors = [];
    if (password === repeatPassword) {
      dispatch(
        createUser({
          first_name,
          last_name,
          city,
          state,
          email,
          password,
          repeatPassword,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          // setErrors(newErrors);
        }
      });
    }
    setShowModal(false);
  };

  if (sessionUser) {
    return <Redirect to="/home" />;
  }

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateCity = (e) => {
    setCity(e.target.value);
  };
  const updateState = (e) => {
    setState(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <>
      <div></div>
      <button
        className="signup-btn bg-transparent hover:bg-gray-100 hover:bg-opacity-50 text-white font-semibold px-2 border-double border-4  border-white rounded shadow"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Sign up
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Create Account</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="form-container sign-up-container">
                  <form onSubmit={onSignup}>
                    <input
                      className="form_input"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      onChange={updateFirstName}
                      value={first_name}
                    ></input>
                    <input
                      className="form_input"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={updateLastName}
                      value={last_name}
                    ></input>
                    <input
                      className="form_input"
                      type="text"
                      name="city"
                      placeholder="City"
                      onChange={updateCity}
                      value={city}
                    ></input>
                    <select
                      className="form_input"
                      name="state"
                      placeholder="State"
                      onChange={updateState}
                    >
                      <option value=""></option>
                      <option value="Alabama">Alabama</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Arizona">Arizona</option>
                      <option value="Arkansas">Arkansas</option>
                      <option value="California">California</option>
                      <option value="Colorado">Colorado</option>
                      <option value="Connecticut">Connecticut</option>
                      <option value="Delaware">Delaware</option>
                      <option value="District Of Columbia">
                        District Of Columbia
                      </option>
                      <option value="Florida">Florida</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Idaho">Idaho</option>
                      <option value="Illinois">Illinois</option>
                      <option value="Indiana">Indiana</option>
                      <option value="Iowa">Iowa</option>
                      <option value="Kansas">Kansas</option>
                      <option value="Kentucky">Kentucky</option>
                      <option value="Louisiana">Louisiana</option>
                      <option value="Maine">Maine</option>
                      <option value="Maryland">Maryland</option>
                      <option value="Massachusetts">Massachusetts</option>
                      <option value="Michigan">Michigan</option>
                      <option value="Minnesota">Minnesota</option>
                      <option value="Mississippi">Mississippi</option>
                      <option value="Missouri">Missouri</option>
                      <option value="Montana">Montana</option>
                      <option value="Nebraska">Nebraska</option>
                      <option value="Nevada">Nevada</option>
                      <option value="New Hampshire">New Hampshire</option>
                      <option value="New Jersey">New Jersey</option>
                      <option value="New Mexico">New Mexico</option>
                      <option value="New York">New York</option>
                      <option value="North Carolina">North Carolina</option>
                      <option value="North Dakota">North Dakota</option>
                      <option value="Ohio">Ohio</option>
                      <option value="Oklahoma">Oklahoma</option>
                      <option value="Oregon">Oregon</option>
                      <option value="Pennsylvania">Pennsylvania</option>
                      <option value="Rhode Island">Rhode Island</option>
                      <option value="South Carolina">South Carolina</option>
                      <option value="South Dakota">South Dakota</option>
                      <option value="Tennessee">Tennessee</option>
                      <option value="Texas">Texas</option>
                      <option value="Utah">Utah</option>
                      <option value="Vermont">Vermont</option>
                      <option value="Virginia">Virginia</option>
                      <option value="Washington">Washington</option>
                      <option value="West Virginia">West Virginia</option>
                      <option value="Wisconsin">Wisconsin</option>
                      <option value="Wyoming">Wyoming</option>
                    </select>
                    <input
                      className="form_input"
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={updateEmail}
                      value={email}
                    ></input>
                    <input
                      className="form_input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={updatePassword}
                      value={password}
                    ></input>
                    <input
                      className="form_input"
                      type="password"
                      name="repeat_password"
                      placeholder="Confirm Password"
                      onChange={updateRepeatPassword}
                      value={repeatPassword}
                      required={true}
                    ></input>
                    <div className="flex items-center justify-end p-4 border-t border-solid border-white rounded-b">
                      <div className="px-1">
                        <button
                          className="bg-transparent hover:bg-grey-200 hover:text-grey px-4 border border-white hover:border-white rounded form_title"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                      </div>
                      <div>
                        <button
                          className="bg-transparent hover:bg-yellow-100 hover:text-white px-4 border border-white hover:border-transparent rounded form_title"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SignupModal;
