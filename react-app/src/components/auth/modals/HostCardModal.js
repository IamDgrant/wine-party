import React from "react";

const ShowHostCard = ({ activeHostIndex, sessionHost, setActiveHostIndex }) => {
  // const activeHost = sessionHost[activeHostIndex];

  const nextHostHandler = () => {
    if (activeHostIndex < sessionHost.length - 1) {
      setActiveHostIndex(activeHostIndex++);
      setActiveHostIndex = sessionHost[activeHostIndex];
    }
  };

  const previousHostHandler = () => {
    if (activeHostIndex > 0) {
      setActiveHostIndex(activeHostIndex--);
      setActiveHostIndex = sessionHost[activeHostIndex];
    }
  };

  return (
    <div className="main-host-profile-container flex">
      <div className="profile-image">{activeHostIndex.profile_image}</div>
      <div className="host-name-container">
        {activeHostIndex.first_name} {activeHostIndex.last_name}
      </div>
      <div className="certs-container"></div>
      <div className="rating-container"></div>
      <div className="about-container"></div>
      <div
        className="right-btn"
        type="button"
        onClick={previousHostHandler}
      ></div>
      <div className="left-btn">
        <button type="button" onClick={nextHostHandler}></button>
      </div>
    </div>
  );
};

export default ShowHostCard;
