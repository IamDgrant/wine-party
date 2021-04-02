import React, { useSelector, useEffect } from "react";
import Header from "../components/Header";
import About from "../components/About";
import RandomHost from "../components/RandomHostCard";
import "./styling/splashPageStyle.css";

const SplashPage = () => {
  // const sessionUser = useSelector((state) => state.session.user);

  // if (sessionUser) {
  //   return <Redirect to="/home" />;
  // }

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position);
  //   });
  // }, [dispatch]);

  return (
    <>
      <div className="main-content-container">
        <div className="header-image-bg">
          <Header />
        </div>
        <div className="content-container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div id="about">
            <About />
          </div>

          <br></br>
          <RandomHost />
        </div>
        {/* <div className="footer-container"></div> */}
      </div>
    </>
  );
};

export default SplashPage;
