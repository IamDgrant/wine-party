import React, { useState, useSelector, Redirect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import SignUpForm from "../SignUpForm";
import { createUser } from "../../../store/session";
import "../../styling/wpSplashModal.css";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory("/");

  const onSignUp = async (e) => {
    // let newErrors = [];
    if (password === repeatPassword) {
      const newUser = await dispatch(
        createUser({ firstName, lastName, city, state, email, password })
      );
      if (newUser.ok) history.push("/");
    }
  };

  // if (sessionUser) {
  //   return <Redirect to="/" />;
  // }

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
    <div class="wrapper">
    <button
        className="text-white font-bold uppercase text-7xl  mr-1 logo-button-wrapper"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Wine Party➤
      </button>
    </div>
      
      {showModal ? (
        <>
          <div class="container" id="container">
            <div class="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                <div class="social-container">
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span>or use your email for registration</span>
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
                <button className="sign-log">Sign Up</button>
              </form>
            </div>
            <div class="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
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
                <button>Sign In</button>
              </form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button class="ghost sign-log" id="signIn">
                    Sign In
                  </button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button class="ghost sign-log" id="signUp">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

// import React, { useState } from "react";
// import Modal from "react-modal";
// import SignUpForm from "../SignUpForm";
// import "..//../styling/buttonStyle.css";

// const SignUpButton = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const onSignUp = async (e) => {
//     // e.preventDefault();
//     setModalVisible((prev) => !prev);
//   };

//   // const handleOk = () => {
//   //   setModalVisible(false);
//   // };

//   // const handleCancel = () => {
//   //   setModalVisible(false);
//   // };

//   return (
//     <>
//       <button onClick={onSignUp} className="btn">
//         Sign up
//       </button>
//       <div className="modal" >
//         <Modal
//           isOpen={modalVisible}
//           onHide={false}
//           ariaHideApp={false}
//           onRequestClose={setModalVisible}
//         >
//           <SignUpForm />
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default SignUpButton;
