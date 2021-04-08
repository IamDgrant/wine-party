import React, { useSelector, useEffect } from "react";
import { Redirect } from "react-router-dom";
import LandingHeader from "../components/LandingPageHeader";
import LandingPageContent from "../components/LandingPageContent";
import RandomHost from "../components/RandomHostCard";
import "../components/styling/landingPageStyling.css";

const LandingPage = () => {
// const sessionUser = useSelector((state) => state.session.user);

//   if (sessionUser) {
//     return <Redirect to="/home" />;
//   }

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position);
  //   });
  // }, [dispatch]);

  return (
      <div className="main-landing-container">
        <div className="landing-header">
          <LandingHeader />
        </div>
        <div className="landing-contents">
          <LandingPageContent />
        </div>
        <div className="landing-random-host-container">
          {/* <RandomHost /> */}
        </div>
      </div>
  );
};

export default LandingPage;
