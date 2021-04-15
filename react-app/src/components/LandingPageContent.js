import React from "react";
import RandomHost from "../components/RandomHostCard";
import spiritsBottles from "../assets/images/pexels-chris-f-1283219.jpeg";
import wineBottles from "../assets/images/pexels-adrien-olichon-2537608.jpeg";
import "../components/styling/landingPageContentStyling.css";

const LandingPageContent = () => {
  // const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="landing-content-container">
      <div className="landing-image-container">
        <div className="landing-image-inner">
          {/* <img
            className="landing-image"
            src={landingImage}
            alt="toasting wine"
          /> */}
        </div>
      </div>
      <div className="landing-featuredhost-nearby">
        <div className="landing-title">Featured host near you</div>
        <div className="host-nearby">
          <RandomHost />
        </div>
      </div>
      <div className="discover-wines">
        <div className="landing-title">Discover new wines</div>
        <div className="wine-discoveries">
          <img src={wineBottles} alt="wine bottles lined up" />
        </div>
      </div>
      <div className="discover-spirits">
        <div className="landing-title">Discover new spirits</div>
        <div className="spirits-discoveries">
          <img src={spiritsBottles} alt="spirit bottles lined up" />
        </div>
      </div>
    </div>
  );
};
export default LandingPageContent;
