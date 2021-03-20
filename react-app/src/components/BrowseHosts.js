import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { browseAllHost } from "../store/host";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
import "../components/styling/browseHostStyling.css";

const BrowseHosts = () => {
  const dispatch = useDispatch();
  const sessionHost = useSelector((state) => state.host.host);
  console.log(sessionHost?.hosts);

  // console.log(sessionHost.profile_image);

  useEffect(() => {
    dispatch(browseAllHost());
  }, [dispatch]);

  const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100,
  });

  // const { simple, pinterest } = layout;

  return (
    <>
      <Grid
        component="ul"
        columns={5}
        columnWidth={250}
        gutterWidth={5}
        gutterHeight={5}
        itemHeight={300}
        itemWidth={500}
        duration={500}
        easing="ease-out"
      >
        {sessionHost &&
          sessionHost.hosts.map((host) => (
            <li key={host.id}>
              <div
                className="host-card"
                style={{
                  backgroundImage: `url(${host.profile_image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  // backgroundSize: "cover",
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
    </>
  );
};

export default BrowseHosts;
