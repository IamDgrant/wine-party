import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../styling/loginButtonStyle.css";
import placeholderPic from "../../../images/empty-profile-picture-png.png";
import { photoUpload } from "../../../store/session";

const ProfileModal = () => {
  const sessionUser = useSelector((state) =>
    state.session.user ? state.session.user : null
  );
  const dispatch = useDispatch();
  // const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [photoFile, setPhotoFile] = useState();
  const [photoUrl, setPhotoUrl] = useState(
    sessionUser ? sessionUser.photoUrl : ""
  );

  // const update = async (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     uploadFile({
  //       firstName,
  //       lastName,
  //       city,
  //       state,
  //       email,
  //     })
  //   );
  //   //     if (user.ok) history.push("/");

  // };

  const handleUpload = (e) => {
    setPhotoFile(e.target.files[0]);
  };

  const submit = async (e) => {
    e.preventDefault();
    await dispatch(photoUpload(photoFile))
    setShowModal(false);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateCity = (e) => {
    setCity(e.target.value);
  };
  const updateState = (e) => {
    setState(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-12/12 sm:w-12/12 px-4 mt-4">
          <button
            className="profile-update-btn bg-transparent px-2 rounded"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => setShowModal(true)}
          >
            {sessionUser.profileImage != null ? (
              <img
                src={sessionUser.profileImage}
                alt="UserPhoto"
                className="profile_pic shadow rounded-full max-w-full h-auto align-middle border-none"
              ></img>
            ) : (
              <img
                src={placeholderPic}
                alt="Avatar"
                className="profile_pic shadow rounded-full max-w-full h-auto align-middle border-none"
              ></img>
            )}
          </button>

          {/* <img src={sessionUser.profileImage} alt="UserPhoto" className="profile_pic shadow rounded-full max-w-full h-auto align-middle border-none" /> */}
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-w-full"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Profile Settings</h3>
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
                <div className="form-container sign-up-container">
                  <form encType="multipart/form-data" onSubmit={submit}>
                    <input
                      id="myuniqueid"
                      type="file"
                      name="user_file"
                      onChange={handleUpload}
                    ></input>
                    <label>Upload Photo</label>
                    {/* <button type="submit"></button> */}
                  </form>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-4 border-t border-solid border-white rounded-b">
                    <div className="px-1">
                      <button
                        className="bg-transparent hover:text-red-200 px-4 border border-white hover:border-white rounded form_title"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                    <div>
                      <button
                        className="bg-transparent hover:text-green-200 px-4 border border-white hover:border-transparent rounded"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                        onClick={submit}
                      >
                        Submit
                      </button>
                    </div>
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
};

export default ProfileModal;
