import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import LocationPin from "../map/LocationPin"
import "../styling/mapStyling.css"

const Map = ({ location, zoomLevel }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const mapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  console.log(process.env.GOOGLE_MAPS_API_KEY);

  const cityState = `${sessionUser.city}, ${sessionUser.state}`


  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultCenter={sessionUser.postal_code}
          defaultZoom={5}
        >
          <LocationPin
            lat={25.76652}
            lng={-80.20359}
            text={cityState}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
