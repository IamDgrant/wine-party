import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../styling/signUpButtonStyle.css";
import { createUser } from "../../../store/session";

const SignupModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
      return dispatch(
        createUser({
          firstName,
          lastName,
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
  };

  if (sessionUser) {
    return <Redirect to="/" />;
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
            onClick={() => setShowModal(false)}
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
                    {/* <h1>Create Account</h1> */}
                    <input
                      className="form_input"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      onChange={updateFirstName}
                      value={firstName}
                    />
                    <input
                      className="form_input"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={updateLastName}
                      value={lastName}
                    />
                    <input
                      className="form_input"
                      type="text"
                      name="city"
                      placeholder="City"
                      onChange={updateCity}
                      value={city}
                    />
                    <select
                      className="form_input"
                      name="state"
                      placeholder="State"
                      onChange={updateState}
                    >
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                    <input
                      className="form_input"
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={updateEmail}
                      value={email}
                    />
                    <input
                      className="form_input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={updatePassword}
                      value={password}
                    />
                    <input
                      className="form_input"
                      type="password"
                      name="repeat_password"
                      placeholder="Confirm Password"
                      onChange={updateRepeatPassword}
                      value={repeatPassword}
                      required={true}
                    />
                  </form>
                </div>
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
                        onClick={() => {
                          setShowModal(false);
                        }}
                      >
                        Sign up
                      </button>
                    </div>
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
