import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetHost } from "../store/host";
import UserMainHeader from "../components/UserMainHeader";
import UserHomeContent from "../components/UserHomeContent";
import Footer from "../components/Footer";

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
          <div className="user-content">
            <UserHomeContent />
          </div>
          <div className="content-header">
            <UserMainHeader />
          </div>

          <div className="user-footer-content">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
