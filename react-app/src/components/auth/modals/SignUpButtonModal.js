import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import SignUpForm from "../SignUpForm";
import { createUser } from "../../../store/session";
import "../../styling/modalStyle.css";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory("/");

  const onSignUp = async (e) => {
    // let newErrors = [];
    if (password === repeatPassword) {
      const newUser = await dispatch(
        createUser({ firstName, lastName, city, state, email, password })
      );
      if (newUser.ok) history.push("/");
      // .then(() => {
      //   setFirstName("");
      //   setLastName("");
      //   setCity("");
      //   setState("");
      //   setEmail("");
      //   setPassword("");
      // })
      // .catch(async (res) => {
      //   const data = await res.json();
      //   if (data && data.errors) {
      //     newErrors = data.errors;
      //     // setErrors(newErrors);
      //   }
      // });
    }
  };

  // const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <button
        className="bg-transparent hover:bg-yellow-100 hover:text-white py-0 px-4 border border-white hover:border-transparent rounded form_title"
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
              <div className="modal border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-white rounded-t">
                  <h1 className="form_title text-2xl">Sign Up</h1>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <SignUpForm
                  firstName={firstName} 
                  setFirstName={setFirstName}
                  lastName={lastName}
                  setLastName={setLastName}
                  City={city}
                  setCity={setCity}
                  state={state}
                  setState={setState}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  repeatPassword={repeatPassword}
                  setRepeatPassword={setRepeatPassword}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-start justify-end p-4 border-b border-solid border-white rounded-t">
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
                      className="bg-transparent hover:bg-yellow-100 hover:text-white px-3 border border-white hover:border-transparent rounded form_title"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => {
                        setShowModal(false)
                      onSignUp()}}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
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
