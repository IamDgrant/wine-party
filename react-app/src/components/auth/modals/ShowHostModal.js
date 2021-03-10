import React, { useState } from "react";

const ShowHost = () => {
  const [showModal, setShowModal] = useState(false);

  

  return (
    <>
      <button
        className="login-btn bg-transparent hover:bg-gray-100 hover:bg-opacity-50 text-white font-semibold px-2 border-double border-4  border-white rounded shadow"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Find Host
      </button>
      {showModal ? (
        <>
       
        </>
      ) : null}
    </>
  );
};

export default ShowHost;
