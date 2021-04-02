import React from "react";
import MainHeader from "../components/MainHeader";
import ProfileContent from "../components/ProfileContent";

const Profile = () => {
  return (
    <div className="main-profile-container">
      <div className="profile">
        <MainHeader />
      </div>
      <div className="p-contents">
        <ProfileContent />
      </div>
    </div>
  );
};

export default Profile;
