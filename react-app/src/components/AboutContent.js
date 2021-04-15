import React from "react";
import "../components/styling/aboutContentStyling.css";
import aboutImg from "../assets/images/pexels-max-vakhtbovych-6758502.jpeg"
import Footer from "../components/Footer" 

const AboutContent = () => {
  return (
<div className="about-content-container">
      <div className="about-title">About</div>
      <div className="wine-about-img">
        <img
          src={aboutImg}
          alt="wine glass on tray"
          style={{ minWidth: "600px"}}
        />
      </div>
      <div className="about-text">
          Wine Party is the only place where you can search for and reserve a Certified
          Sommelier or Certified Mixologist for your next event. It was
          conceived by our founder Andre Grant, who himself is an aficionado of wine &
          spirits! His personal favorite being Bourbon, especially Four Roses
          Single Barrel. 
          <br></br>
          <br></br>
          When Wine Party isn't just about wine. It is truly about connection.
          Connecting everyday people, to exclusive and luxury experiences that
          most otherwise do not have access to. How many of us have had the
          experience of a Sommelier, talking about and giving us true history 
          and perspective on your favorite wine? Or perhaps learning the
          history of and having the live experience of a champagne sabering? This
          is what Wine Party is about, connecting you to those experiences.
          <br></br>
          <br></br>
           Now, let’s find your host!
        </div>
        <div className="user-footer-content">
            <Footer />
          </div>
    </div>
  );
};

export default AboutContent;
