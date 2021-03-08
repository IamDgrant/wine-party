// import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // import { createUser } from "../../store/session";
// // import "../styling/signup-loginStyle.css";

// const SignupForm = ({
//   firstName,
//   setFirstName,
//   lastName,
//   setLastName,
//   city,
//   setCity,
//   setState,
//   state,
//   setEmail,
//   email,
//   setPassword,
//   password,
//   repeatPassword,
//   setRepeatPassword,
// }) => {
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);

//   const onSignUp = async (e) => {
//     e.preventDefault();
//     let newErrors = [];
//     if (password === repeatPassword) {
//       return dispatch(
//         createUser({
//           firstName,
//           lastName,
//           city,
//           state,
//           email,
//           password,
//           repeatPassword,
//         })
//       ).catch(async (res) => {
//         const data = await res.json();
//         if (data && data.errors) {
//           newErrors = data.errors;
//           // setErrors(newErrors);
//         }
//       });
//     }
//   };
//   if (sessionUser) {
//     return <Redirect to="/" />;
//   }
//   const updateFirstName = (e) => {
//     setFirstName(e.target.value);
//   };
//   const updateLastName = (e) => {
//     setLastName(e.target.value);
//   };
//   const updateCity = (e) => {
//     setCity(e.target.value);
//   };
//   const updateState = (e) => {
//     setState(e.target.value);
//   };
//   const updateEmail = (e) => {
//     setEmail(e.target.value);
//   };
//   const updatePassword = (e) => {
//     setPassword(e.target.value);
//   };
//   const updateRepeatPassword = (e) => {
//     setRepeatPassword(e.target.value);
//   };

//   const clickTest = () => {
//     console.log("BEEN CLICKED!!!!!!!!");
//   };

//   return (
//     <>
    //   <div className="form-container sign-up-container">
    //     <form onSubmit={onSignUp}>
    //       <h1>Create Account</h1>
    //       <input
    //         className="form_input"
    //         type="text"
    //         name="firstName"
    //         placeholder="First Name"
    //         onChange={updateFirstName}
    //         value={firstName}
    //       />
    //       <input
    //         className="form_input"
    //         type="text"
    //         name="lastName"
    //         placeholder="Last Name"
    //         onChange={updateLastName}
    //         value={lastName}
    //       />
    //       <input
    //         className="form_input"
    //         type="text"
    //         name="city"
    //         placeholder="City"
    //         onChange={updateCity}
    //         value={city}
    //       />
    //       <select
    //         className="form_input"
    //         name="state"
    //         placeholder="State"
    //         onChange={updateState}
    //       >
    //         <option value="AL">Alabama</option>
    //         <option value="AK">Alaska</option>
    //         <option value="AZ">Arizona</option>
    //         <option value="AR">Arkansas</option>
    //         <option value="CA">California</option>
    //         <option value="CO">Colorado</option>
    //         <option value="CT">Connecticut</option>
    //         <option value="DE">Delaware</option>
    //         <option value="DC">District Of Columbia</option>
    //         <option value="FL">Florida</option>
    //         <option value="GA">Georgia</option>
    //         <option value="HI">Hawaii</option>
    //         <option value="ID">Idaho</option>
    //         <option value="IL">Illinois</option>
    //         <option value="IN">Indiana</option>
    //         <option value="IA">Iowa</option>
    //         <option value="KS">Kansas</option>
    //         <option value="KY">Kentucky</option>
    //         <option value="LA">Louisiana</option>
    //         <option value="ME">Maine</option>
    //         <option value="MD">Maryland</option>
    //         <option value="MA">Massachusetts</option>
    //         <option value="MI">Michigan</option>
    //         <option value="MN">Minnesota</option>
    //         <option value="MS">Mississippi</option>
    //         <option value="MO">Missouri</option>
    //         <option value="MT">Montana</option>
    //         <option value="NE">Nebraska</option>
    //         <option value="NV">Nevada</option>
    //         <option value="NH">New Hampshire</option>
    //         <option value="NJ">New Jersey</option>
    //         <option value="NM">New Mexico</option>
    //         <option value="NY">New York</option>
    //         <option value="NC">North Carolina</option>
    //         <option value="ND">North Dakota</option>
    //         <option value="OH">Ohio</option>
    //         <option value="OK">Oklahoma</option>
    //         <option value="OR">Oregon</option>
    //         <option value="PA">Pennsylvania</option>
    //         <option value="RI">Rhode Island</option>
    //         <option value="SC">South Carolina</option>
    //         <option value="SD">South Dakota</option>
    //         <option value="TN">Tennessee</option>
    //         <option value="TX">Texas</option>
    //         <option value="UT">Utah</option>
    //         <option value="VT">Vermont</option>
    //         <option value="VA">Virginia</option>
    //         <option value="WA">Washington</option>
    //         <option value="WV">West Virginia</option>
    //         <option value="WI">Wisconsin</option>
    //         <option value="WY">Wyoming</option>
    //       </select>
    //       <input
    //         className="form_input"
    //         type="text"
    //         name="email"
    //         placeholder="Email"
    //         onChange={updateEmail}
    //         value={email}
    //       />
    //       <input
    //         className="form_input"
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //         onChange={updatePassword}
    //         value={password}
    //       />
    //       <input
    //         className="form_input"
    //         type="password"
    //         name="repeat_password"
    //         placeholder="Confirm Password"
    //         onChange={updateRepeatPassword}
    //         value={repeatPassword}
    //         required={true}
    //       />
//           <button className="signup-login-btn" onClick={clickTest}>
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default SignupForm;
