import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
import { seeRandomHost } from "../store/host";
import "../components/styling/randomHostCardStyling.css";

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

  const sommelier = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="wine-glass"
      className="svg-inline--fa fa-wine-glass fa-w-9"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 512"
    >
      <path
        fill="#ffffff"
        d="M216 464h-40V346.81c68.47-15.89 118.05-79.91 111.4-154.16l-15.95-178.1C270.71 6.31 263.9 0 255.74 0H32.26c-8.15 0-14.97 6.31-15.7 14.55L.6 192.66C-6.05 266.91 43.53 330.93 112 346.82V464H72c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h208c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40z"
      ></path>
    </svg>
  );

  const mixologist = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="glass-martini"
      className="svg-inline--fa fa-glass-martini fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#ffffff"
        d="M502.05 57.6C523.3 36.34 508.25 0 478.2 0H33.8C3.75 0-11.3 36.34 9.95 57.6L224 271.64V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40h-56V271.64L502.05 57.6z"
      ></path>
    </svg>
  );

  const addBtn = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="plus-square"
      className="svg-inline--fa fa-plus-square fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="#ffffff"
        d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
      ></path>
    </svg>
  );

  return (
    <div className="random-host">
      <div
        className="host-near"
        style={{
          color: "#0e1c36",
          fontFamily: "Bebas Neue",
          fontSize: "2.5vh",
        }}
      >
        <div className="title">Featured Host</div>
        {/* <div className="host-bio">{sessionHost.about}</div> */}
      </div>
      <Grid
        component="ul"
        columns={1}
        columnWidth={250}
        itemHeight={400}
        itemWidth={250}
      >
        {sessionHost && (
          <div
            className="random-host-card"
            style={{
              backgroundImage: `url(${sessionHost.profile_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            >
            <div className="hosts"></div>
              <div className="add-host">
                <button>{addBtn}</button>
              </div>
              <div className="host-name-type">
                <div className="host-name">
                  {sessionHost.first_name} {sessionHost.last_name}
                </div>
                <div className="somm">
                  {sessionHost.sommelier === true ? sommelier : null}{" "}
                </div>
                <div className="mix">
                  {sessionHost.mixologist === true ? mixologist : null}{" "}
                </div>
              </div>

              <div className="host-city-state">
                {sessionHost.city}, {sessionHost.state}
              </div>
              {/* <div className="host-type"></div> */}
              {/* <div className="host-rating">
                <Rate disabled defaultValue={4} />
              </div> */}
          </div>
        )}
      </Grid>
    </div>
  );
};

export default RandomHost;
