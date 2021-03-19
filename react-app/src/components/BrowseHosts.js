import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { browseAllHost } from "../store/host";
import { CSSGrid, measureItems, makeResponsive } from 'react-stonecutter';

const BrowseHosts = () => {
  const dispatch = useDispatch();
  const sessionHost = useSelector((state) => state.host.host);
  console.log(sessionHost?.hosts);

  useEffect(() => {
    dispatch(browseAllHost());
  }, [dispatch]);

  const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100
  });

  // const { simple, pinterest } = layout;

  return (
    <>
      <div>
        <Grid
          component="ul"
          columns={5}
          columnWidth={250}
          gutterWidth={5}
          gutterHeight={5}
          itemHeight={200}
          duration={500}
          easing="ease-out"
        >
          {sessionHost &&
            sessionHost?.hosts.map((host) => (
              <li key={host.id}>{host.first_name} {host.last_name}</li>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default BrowseHosts;
