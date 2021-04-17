// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory, NavLink } from "react-router-dom";
// import { login, createUser } from "../store/session";
// import SignUpForm from "./auth/forms/SignUpForm";
// import LoginForm from "./auth/forms/LoginForm";
// import { Modal, Button } from "antd";
// import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
// import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
// import "../components/styling/header.css";
// import "../components/styling/modalStyle.css";
// // import "../components/styling/buttonStyling.css";

// const Header = () => {
//   const [click, setClick] = useState(false);
//   const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
//   const [isSignUpModalVisible, setIsisSignUpModalVisible] = useState(false);
//   const [first_name, setFirstName] = useState("");
//   const [last_name, setLastName] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [postal_code, setPostalCode] = useState("");
//   const [signInEmail, setSignInEmail] = useState("");
//   const [signUpEmail, setSignUpEmail] = useState("");
//   const [signInPassword, setSignInPassword] = useState("");
//   const [signUpPassword, setSignUpPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");
//   const [errors, setErrors] = useState([]);

//   const dispatch = useDispatch();
//   const history = useHistory();

//   // useEffect(() => {
//   //   dispatch(browseAllHost());
//   // }, [dispatch]);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onSignUp = async (e) => {
//     // e.preventDefault();
//     if (signUpPassword === repeatPassword) {
//       dispatch(
//         createUser({
//           first_name,
//           last_name,
//           city,
//           state,
//           postal_code,
//           signUpEmail,
//           signUpPassword,
//           repeatPassword,
//         })
//       )
//   };

//   const onSignIn = async (e) => {
//     // e.preventDefault();
//     const user = await dispatch(login(signInEmail, signInPassword));
//     if (signInEmail.length === 0) {
//       alert("You must provide valid email address")
//     }
//     // console.log(user);
//     // if (user.ok) history.push("/home");
//   };

//   const showSignInModal = () => {
//     setIsSignInModalVisible(true);
//   };

//   const signInHandleOk = () => {
//     onSignIn();
//     setIsSignInModalVisible(false);
//   };

//   const signInHandleCancel = () => {
//     setIsSignInModalVisible(false);
//   };

//   const showSignUpModal = () => {
//     setIsisSignUpModalVisible(true);
//   };

//   const signUpHandleOk = () => {
//     onSignUp();
//     setIsisSignUpModalVisible(false);
//   };

//   const signUpHandleCancel = () => {
//     setIsisSignUpModalVisible(false);
//   };

//   const clickAbout = () => {
//     const anchor = document.querySelector("#about");
//     anchor.scrollIntoView({ behavior: "smooth", block: "center" });
//   };

//   return (
//     <>
//       <div className="header">
//         <div className="logo-nav">
//           <div className="logo-container">Wine Party</div>
//           <ul className={click ? "nav-options active" : "nav-options"}>
//             <li className="option" onClick={closeMobileMenu}>
//               <NavLink
//                 className="navbar-item"
//                 activeClassName="is-active"
//                 to="/hosts"
//                 exact
//               >
//                 <Button type="text" className="menu host-btn">
//                   Browse Hosts
//                 </Button>
//               </NavLink>
//             </li>
//             <li className="option menu" onClick={closeMobileMenu}>
//               <Button
//                 type="text"
//                 onClick={clickAbout}
//                 className="menu host-btn"
//               >
//                 About
//               </Button>
//             </li>
//             <li
//               className="option mobile-option host-btn"
//               onClick={closeMobileMenu}
//             >
//               <Button
//                 htmlType="submit"
//                 type="dashed"
//                 size="small"
//                 ghost="true"
//                 onClick={showSignInModal}
//               >
//                 Sign in
//               </Button>
//               <Modal
//                 bodyStyle={{ backgroundColor: "black" }}
//                 okText="Sign in"
//                 title="Sign in"
//                 visible={isSignInModalVisible}
//                 onOk={signInHandleOk}
//                 onCancel={signInHandleCancel}
//                 // style={{
//                 //   backgroundColor: "#c3073f",
//                 //   color: "#1a1a1d",
//                 // }}
//               >
//                 <LoginForm
//                   signInEmail={signInEmail}
//                   setSignInEmail={setSignInEmail}
//                   signInPassword={signInPassword}
//                   setSignInPassword={setSignInPassword}
//                   errors={errors}
//                 />
//               </Modal>
//             </li>
//             <li
//               className="option mobile-option host-btn"
//               onClick={closeMobileMenu}
//             >
//               <Button
//                 htmlType="submit"
//                 type="primary"
//                 size="small"
//                 // style={{
//                 //   color: "#0e1c36",
//                 //   backgroundColor: "#f9fbf2",
//                 //   borderColor: "#f9fbf2",
//                 // }}
//                 onClick={showSignUpModal}
//               >
//                 Sign up
//               </Button>
//               <Modal
//                 title="Sign up"
//                 okText="Sign up"
//                 visible={isSignUpModalVisible}
//                 onOk={signUpHandleOk}
//                 onCancel={signUpHandleCancel}
//               >
//                 <SignUpForm
//                   first_name={first_name}
//                   setFirstName={setFirstName}
//                   last_name={last_name}
//                   setLastName={setLastName}
//                   city={city}
//                   setCity={setCity}
//                   state={state}
//                   setState={setState}
//                   postal_code={postal_code}
//                   setPostalCode={setPostalCode}
//                   signUpEmail={signUpEmail}
//                   setSignUpEmail={setSignUpEmail}
//                   signUpPassword={signUpPassword}
//                   setSignUpPassword={setSignUpPassword}
//                   repeatPassword={repeatPassword}
//                   setRepeatPassword={setRepeatPassword}
//                 />
//               </Modal>
//             </li>
//           </ul>
//         </div>
//         <ul className="signin-up">
//           <li className="sign-in host-btn" onClick={closeMobileMenu}>
//             <Button
//               htmlType="submit"
//               type="dashed"
//               size="small"
//               ghost="true"
//               style={{
//                 color: "#f9fbf2",
//                 borderColor: "#f9fbf2",
//               }}
//               onClick={showSignInModal}
//             >
//               Sign in
//             </Button>
//             <Modal
//               bodyStyle={{ backgroundColor: "black" }}
//               okText="Sign in"
//               title="Sign in"
//               visible={isSignInModalVisible}
//               onOk={signInHandleOk}
//               onCancel={signInHandleCancel}
//               // style={{
//               //   backgroundColor: "#c3073f",
//               //   color: "#1a1a1d",
//               // }}
//             >
//               <LoginForm
//                 signInEmail={signInEmail}
//                 setSignInEmail={setSignInEmail}
//                 signInPassword={signInPassword}
//                 setSignInPassword={setSignInPassword}
//               />
//             </Modal>
//           </li>
//           <li className=" host-btn" onClick={closeMobileMenu}>
//             <Button
//               htmlType="submit"
//               type="primary"
//               size="small"
//               style={{
//                 color: "#0e1c36",
//                 backgroundColor: "#f9fbf2",
//                 borderColor: "#f9fbf2",
//               }}
//               onClick={showSignUpModal}
//             >
//               Sign Up
//             </Button>
//             <Modal
//               title="Sign up"
//               okText="Sign up"
//               visible={isSignUpModalVisible}
//               onOk={signUpHandleOk}
//               onCancel={signUpHandleCancel}
//             >
//               <SignUpForm
//                 first_name={first_name}
//                 setFirstName={setFirstName}
//                 last_name={last_name}
//                 setLastName={setLastName}
//                 city={city}
//                 setCity={setCity}
//                 state={state}
//                 setState={setState}
//                 postal_code={postal_code}
//                 setPostalCode={setPostalCode}
//                 signUpEmail={signUpEmail}
//                 setSignUpEmail={setSignUpEmail}
//                 signUpPassword={signUpPassword}
//                 setSignUpPassword={setSignUpPassword}
//                 repeatPassword={repeatPassword}
//                 setRepeatPassword={setRepeatPassword}
//               />
//             </Modal>
//           </li>
//         </ul>
//         <div className="mobile-menu" onClick={handleClick}>
//           {click ? (
//             <CloseMenu className="menu-icon" />
//           ) : (
//             <MenuIcon className="menu-icon" />
//           )}
//         </div>
//       </div>
//       <div className="header-background-image"></div>
//     </>
//   );
// };

// export default Header;
