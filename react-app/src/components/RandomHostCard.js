import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
import { seeRandomHost } from "../store/host";
import "../components/styling/randomHostCardStyling.css"

const RandomHost = () => {
  const dispatch = useDispatch();
  const sessionHost = useSelector((state) => state.host.host);

  useEffect(() => {
    dispatch(seeRandomHost());
  }, [dispatch]);

  const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100,
  });

  return (
    sessionHost && (
      <div className="random-host">
        <Grid
          component="ul"
          columns={1}
          columnWidth={250}
          // gutterWidth={5}
          // gutterHeight={5}
          itemHeight={300}
          itemWidth={500}
          // duration={500}
          // easing="ease-out"
        >
          {sessionHost && (
            <div
              className="host-card"
              style={{
                backgroundImage: `url(${sessionHost.profile_image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="host-name">
                {sessionHost.first_name} {sessionHost.last_name}
              </div>
              {/* <div className="host-rating">{host.rating}</div> */}
              <div className="host-city-state">
                {sessionHost.city}, {sessionHost.state}
              </div>
            </div>
          )}
        </Grid>
      </div>
    )
  );
};

export default RandomHost;
