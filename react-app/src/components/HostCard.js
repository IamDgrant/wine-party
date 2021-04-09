import React from "react";

const HostCard = ({profile_image}) => {
  return (
    <>
      <div className="host-card-container">
        <div className="host-image-container">
          PICTURE
          <img src={profile_image} alt="host profile image" />
        </div>
        <div className="host-about-container">
          <div className="host-name-card"></div>
          <div className="host-type-card"></div>
          <div className="host-about-card"></div>
          <div className="host-specialty-card"></div>
        </div>
      </div>
    </>
  );
};

export default HostCard;
