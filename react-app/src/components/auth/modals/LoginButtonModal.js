import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LoginForm from "../LoginForm";
// import "../../styling/loginButtonStyle.css";
import { login } from "../../../store/session";
import { Button } from 'antd';

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async () => {
    const user = await dispatch(login(email, password));
    if (user.ok) history.push("/");
    setShowModal(false);
  };

  return (
    <>
      <button
        className="login-btn"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Log in
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Log in</h3>
                  <Button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </Button>
                </div>
                {/*body*/}
                <div className="form-container sign-up-container">
                  {/* <form onSubmit={onLogin}> */}
                  <div className="relative p-3 flex-auto">
                    <LoginForm
                      email={email}
                      setEmail={setEmail}
                      password={password}
                      setPassword={setPassword}
                    />
                  </div>

                  {/* </form> */}
                  {/*footer*/}
                  <div className="flex items-center justify-end p-4 border-t border-solid border-white rounded-b">
                    <div className="px-1">
                      <button
                        className="bg-transparent hover:bg-grey-200 hover:text-grey px-4 border border-white hover:border-white rounded form_title"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                    <div>
                      <button
                        className="bg-transparent hover:bg-yellow-100 hover:text-white px-4 border border-white hover:border-transparent rounded form_title"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => {
                          onLogin();
                        }}
                      >
                        Log in
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

export default LoginModal;
