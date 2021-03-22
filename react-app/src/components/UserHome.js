import React from "react";
import { useSelector } from "react-redux";
import UserHeader from "../components/UserHeader";
import Date from "../components/Date";
import SeeEvent from "../components/auth/modals/SeeEventModal";
import "./styling/userHome.css";

const Home = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const sessionEvent = useSelector((state) => state.event.event);

  return (
    <>
      <div>
        <div className="main-content-container">
          <div className="header-image-bg">
            <UserHeader />
            {/* <div className="navBar-container">
              
            </div> */}
          </div>

          {/* <div
            className="background-image"
            // style={{
            //   backgroundImage: `url(${wine1})`,
            //   backgroundRepeat: "no-repeat",
            // }}
          > */}
        </div>

        <div className="content-container">
          {/* <div>About Wine Party</div> */}
          <div>
            <SeeEvent />
          </div>

          <div>Connect</div>
        </div>
      </div>
    </>
  );
};

export default Home;
