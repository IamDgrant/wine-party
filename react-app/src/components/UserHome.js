import React from "react";
import { useSelector } from "react-redux";
import UserHeader from "../components/UserHeader";
// import TimeUntilEvent from "../components/TimeLeft";
// import SeeEvent from "../components/auth/modals/SeeEventModal";
import "./styling/userHome.css";

const Home = () => {
  const sessionUser = useSelector((state) => state.session.user);
  // const sessionEvent = useSelector((state) => state.event.event);

  return (
    <>
      <div>
        <div className="main-content-container">
          <div className="header-image-bg">
            <UserHeader />
              <div className="welcome">Welcome, {sessionUser.first_name}!</div>
            <div className="welcome">
            </div>
            <div className="date">
              {/* <TimeUntilEvent /> */}
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="suggested-hosts">Suggested Hosts</div>
          {/* <div>About Wine Party</div> */}
          {/* <div>
            <SeeEvent />
          </div> */}

          {/* <div>Connect</div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
