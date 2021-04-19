import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seeRandomHost } from "../store/host";
import "../components/styling/randomHostCardStyling.css";

const RandomHost = () => {
  const dispatch = useDispatch();
  const sessionHost = useSelector((state) => state.host.host);

  useEffect(() => {
      dispatch(seeRandomHost());
  }, [dispatch]);

  return (
    <div className="random-host-container">
      <div
        className="random-host-card"
        style={{
          backgroundImage: `url(${sessionHost?.profile_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="about-QandA-container">
        <div className="host-QandA">
          <div className="question1">
            {sessionHost?.sommelier === true ? (
              <p>Q: Why did you become a sommelier?</p>
            ) : (
              <p>Q: Why did you become a Mixologist?</p>
            )}
          </div>
          <div className="answer">
            {sessionHost?.sommelier === true ? (
              <p>
                A: "I've always loved wine and it's amazing that I can share my
                love of wine, it's history and origins with others!"
              </p>
            ) : (
              <p>
                A: "I have always loved spirits. It's amazing to share the
                history and story of the different spirits of the world!"
              </p>
            )}
          </div>
          <div className="question2">
            {sessionHost?.sommelier === true ? (
              <p>Q: What is your favorite wine?</p>
            ) : (
              <p>Q: What is your favorite spirit?</p>
            )}
          </div>
          <div className="answer">
            {sessionHost?.sommelier === true ? (
              <p>
                A: "Great question, my favorite wine is Rosé! It's fruity citrus
                flavor, mixed in with flower accents are sublime!
              </p>
            ) : (
              <p>
                A: "Great question, my favorite spirit is Bourbon! I love the
                big vanilla, oak, and caramel notes!"
              </p>
            )}
          </div>
        </div>
        {/* <div className="host-about">eijfnie</div> */}
      </div>
    </div>
  );
};

export default RandomHost;
