import React from "react";
import "../components/styling/aboutStyle.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="welcome">
          <h1>Welcome to Wine Party!</h1>
          <br></br>
          <br></br>
        </div>
        <div className="about-text">
          The only place where you can search for and reserve a Certified
          Sommelier or Certified Mixologist for your next event. It was
          conceived by our founder Andre Grant, who himself is an aficionado of wine &
          spirits! His personal favorite being Bourbon, especially Four Roses
          Single Barrel. 
          <br></br>
          <br></br>
          When Wine Party was launched, it wasn't just about wine. It was truly about connection.
          Connecting everyday people, to exclusive and luxury experiences that
          most otherwise did not have access to. How many of us, have had the
          experience of a Sommelier, talking about and giving us true history 
          and perspective on your favorite wine? Or perhaps learning about the
          history of and having the live experience of a champagne sabering? This
          is what Wine Party is about, connecting you to those experiences.
          <br></br>
          <br></br>
           Now, let’s find your host!
        </div>
      </div>
    </>
  );
};

export default About;
