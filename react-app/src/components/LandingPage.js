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

// console.log(navigator);

  useEffect(() => {
    navigator.geolocation.watchPosition(
      function(position) {
        console.log(position);
      },
      function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }, []);

  return (
      <div className="main-landing-container">
        <div className="landing-header">
          <LandingHeader />
        </div>
        <div className="landing-contents">
          <LandingPageContent />
        </div>
      </div>
  );
};

export default LandingPage;
