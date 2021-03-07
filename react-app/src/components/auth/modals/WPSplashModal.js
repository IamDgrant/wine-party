import React, { useState } from "react";

import SignUpLoginForm from "../SignUpLoginForm";
import "../../styling/wpSplashModal.css";

const SignUpLoginModal = () => {
  const [showModal, setShowModal] = useState(false);

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
          <SignUpLoginForm />
        </>
      ) : null}
    </>
  );
};

export default SignUpLoginModal;
