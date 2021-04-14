import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetHost } from "../store/host";
import UserMainHeader from "../components/UserMainHeader";
import UserHomeContent from "../components/UserHomeContent";

import "./styling/userHome.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetHost());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="main-user-container">
          <div className="content-header">
            <UserMainHeader />
          </div>
          <div className="user-content">
            <UserHomeContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
