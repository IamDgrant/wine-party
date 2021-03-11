import React, { useState } from "react";
import HostCardModal from "../modals/HostCardModal";

const ShowHost = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-transparent hover:text-green-200 px-4 border-double border-4 border-gray-400 rounded"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Find Host
      </button>
      {showModal ? (
        <>
          <div className="host-card-modal">
            <HostCardModal />
          </div>
        </>
      ) : null}
    </>
  );
};

export default ShowHost;
