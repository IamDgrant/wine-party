import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import placeholderPic from "../assets/images/empty-profile-picture-png.png";
import { photoUpload } from "../store/session";
import { Modal } from "antd";

const UserProfile = () => {
  const [isSeeEventModalVisible, setSeeEventModalVisible] = useState(false);
  const [photoFile, setPhotoFile] = useState();

  const sessionUser = useSelector((state) => state.session.user);

  const [photoUrl, setPhotoUrl] = useState(
    sessionUser ? sessionUser.photoUrl : ""
  );

  const dispatch = useDispatch();

  // const [user, setUser] = useState({});
  // // Notice we use useParams here instead of getting the params
  // // From props.
  // const { userId }  = useParams();

  // useEffect(() => {
  //   if (!userId) {
  //     return
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId]);

  // if (!user) {
  //   return null;
  // }

  const handleUpload = (e) => {
    setPhotoFile(e.target.files[0]);
  };

  const submit = async (e) => {
    e.preventDefault();
    await dispatch(photoUpload(photoFile));
    setSeeEventModalVisible(false);
  };

  const showSeeEventModal = () => {
    setSeeEventModalVisible(true);
  };

  const seeEventHandleOk = () => {
    setSeeEventModalVisible(false);
  };

  const seeEventHandleCancel = () => {
    setSeeEventModalVisible(false);
  };

  return (
    <div className="user-menu-btn">
      <button
        className="profile-update-btn"
        type="text"
        size="medium"
        style={{
          color: "#0e1c36",
          backgroundColor: "#ffff",
          size: "large",
          borderColor: "#f9fbf2",
          fontFamily: "Bebas Neue",
        }}
        onClick={showSeeEventModal}
      >
        {sessionUser.profile_image != null ? (
          <img
            src={sessionUser.profile_image}
            alt="UserPhoto"
            className="user-pic"
          ></img>
        ) : (
          <img
            src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
            alt="Avatar"
            className="user-pic"
          ></img>
        )}
      </button>
      <Modal
        title="User Settings"
        visible={isSeeEventModalVisible}
        onOk={seeEventHandleOk}
        onCancel={seeEventHandleCancel}
        style={{
          backgroundColor: "#f9fbf2",
          color: "#0e1c36",
        }}
      >
        <div className="form-container sign-up-container">
          <form encType="multipart/form-data" onSubmit={submit}>
            <input
              id="myuniqueid"
              type="file"
              name="user_file"
              onChange={handleUpload}
            ></input>
            {/* <label>Upload Photo</label> */}
            {/* <button type="submit"></button> */}
          </form>
          {/*footer*/}
          <div className="">
            <div className="px-1">
              <button
                className=""
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={setSeeEventModalVisible(true)}
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                className=""
                type="submit"
                style={{ transition: "all .15s ease" }}
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default UserProfile;
