import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
// import { message } from "antd";

const SearchResult = () => {
  const sessionHostsResults = useSelector((state) => state.host.host);
  const sessionHostId = useSelector((state) =>
    state.host.host ? state.host.host : null
  );

  console.log(sessionHostsResults);

  const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100,
  });

  return (
    <>
      <div className="">
        <div
          className="host-near"
          style={{
            color: "#0e1c36",
            fontFamily: "Bebas Neue",
            fontSize: "2.5vh"
          }}
        >
          Host near you
        </div>
        <Grid
          component="ul"
          columns={3}
          columnWidth={250}
          gutterWidth={5}
          gutterHeight={5}
          itemHeight={300}
          itemWidth={500}
          duration={500}
          easing="ease-out"
        >
          {sessionHostsResults &&
            sessionHostsResults.map((host) => (
              <li key={host.id}>
                <div
                  className="host-card"
                  style={{
                    backgroundImage: `url(${host.profile_image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="host-name">
                    {host.first_name} {host.last_name}
                  </div>
                  {/* <div className="host-rating">{host.rating}</div> */}
                  <div className="host-city-state">
                    {host.city}, {host.state}
                  </div>
                </div>
              </li>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default SearchResult;
