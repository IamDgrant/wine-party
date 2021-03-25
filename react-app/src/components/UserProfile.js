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
    await dispatch(photoUpload(photoFile))
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
        ) : ( <img src={placeholderPic} alt="Avatar" className="user-pic"></img>
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
    // </div>
    // {showModal ? (
    //   <>
    //     <div
    //       className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-w-full"
    //       // onClick={() => setShowModal(false)}
    //     >
    //       <div className="relative w-auto my-6 mx-auto max-w-3xl">
    //         {/*content*/}
    //         <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
    //           <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
    //             <h3 className="text-3xl font-semibold">Profile Settings</h3>
    //             <button
    //               className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
    //               onClick={() => setShowModal(false)}
    //             >
    //               <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
    //                 ×
    //               </span>
    //             </button>
    //           </div>
    //           {/*body*/}
    //           <div className="form-container sign-up-container">
    //             <form encType="multipart/form-data" onSubmit={submit}>
    //               <input
    //                 id="myuniqueid"
    //                 type="file"
    //                 name="user_file"
    //                 onChange={handleUpload}
    //               ></input>
    //               {/* <label>Upload Photo</label> */}
    //               {/* <button type="submit"></button> */}
    //             </form>
    //             {/*footer*/}
    //             <div className="flex items-center justify-end p-4 border-t border-solid border-white rounded-b">
    //               <div className="px-1">
    //                 <button
    //                   className="bg-transparent hover:text-red-200 px-4 border border-white hover:border-white rounded form_title"
    //                   type="button"
    //                   style={{ transition: "all .15s ease" }}
    //                   onClick={() => setShowModal(false)}
    //                 >
    //                   Cancel
    //                 </button>
    //               </div>
    //               <div>
    //                 <button
    //                   className="bg-transparent hover:text-green-200 px-4 border border-white hover:border-transparent rounded"
    //                   type="submit"
    //                   style={{ transition: "all .15s ease" }}
    //                   onClick={submit}
    //                 >
    //                   Submit
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    //   </>
    // ) : null}
  );
};
export default UserProfile;
