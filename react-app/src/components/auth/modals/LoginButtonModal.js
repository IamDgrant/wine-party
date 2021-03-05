import React, { useState } from "react";
import LoginForm from "../LoginForm"

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-transparent hover:bg-yellow-100 hover:text-white py-0 px-4 border border-white hover:border-transparent rounded form_title"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Log in
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
                <h1 className="form_title text-2xl" >Log in</h1>
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
                  <LoginForm />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 bg-transparent hover:bg-yellow-100 hover:text-white py-0 px-4 border border-white hover:border-transparent rounded form_title"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-transparent hover:bg-yellow-100 hover:text-white py-0 px-4 border border-white hover:border-transparent rounded form_title"
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false) }
                  >
                    Log in
                  </button>
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
