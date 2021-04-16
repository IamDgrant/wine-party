import React from "react";
import MainHeader from "../components/MainHeader";
import ProfileContent from "../components/ProfileContent";

const Profile = () => {
  return (
    <div className="main-profile-container">
      <div className="p-contents">
        <ProfileContent />
      </div>
      <div className="profile">
        <MainHeader />
      </div>
    </div>
  );
};

export default Profile;
