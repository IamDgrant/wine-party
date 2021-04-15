import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
// import LocationPin from "../map/LocationPin";
import "../styling/mapStyling.css";

const EventMap = () => {
  // const sessionUser = useSelector((state) => state.session.user);
  // const sessionEvents = useSelector((state) => state.event.event);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(async (position) => {
        await setIsLatitude(position.coords.latitude);
        await setIsLongitude(position.coords.longitude);
      });
    }
  }, []);

  const [isLatitude, setIsLatitude] = useState("");
  const [isLongitude, setIsLongitude] = useState("");

  // console.log("lat:", isLatitude);
  // console.log("lng:", isLongitude);

  const mapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  Geocode.setApiKey(mapsKey);
  Geocode.setLocationType("ROOFTOP");

  // const userCurrentLocation = async () => {
  //    await Geocode.fromAddress(`${sessionUser.city}, ${sessionUser.state}`).then(
  //      (response) => {
  //      const { lat, lng } = response.results[0].geometry.location;
  //     return lat
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // };

  // console.log(userCurrentLocation());

  const mapStyles = {
    width: "75%",
    height: "37.5vh",
  };

  const defaultCenter = {
    lat: isLatitude,
    lng: isLongitude,
  };

  // const cityState = `${sessionUser.city}, ${sessionUser.state}`;

  // const todaysDate = new Date();

  // const upcomingEvents = sessionEvents.filter((events) => {
  //   return new Date(events.event_date) > todaysDate;
  // });
  // const previousEvents = sessionEvents.filter((events) => {
  //   return new Date(events.event_date) < todaysDate;
  // });

  return (
    <div className="map">
      <div className="google-map">
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          />
          {/* {upcomingEvents &&
            upcomingEvents.map((eventLocation) => {
              console.log(
                Geocode.fromAddress(
                  `${eventLocation.event_city}, ${eventLocation.event_state}}`
                ).then(
                  (response) => {
                    const { lat, lng } = response.results[0].geometry.location;
                    console.log(lat, lng);
                    return lat, lng
                  },
                  (error) => {
                    console.error(error);
                  }
                )
              );

              console.log(eventLocation.event0_city, eventLocation.event_state);
            })} */}
          <Marker
          title={'The marker`s title will appear as a tooltip.'}
            defaultZoom={4}
            defaultCenter={{ lat: isLatitude, lng: isLongitude }}
            // defaultCenter={{
            //   lat: isLatitude,
            //   lng: isLongitude,
            // }}
          />
        </LoadScript>

        {/* <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: { myLatitude },
            lng: { myLongitude },
          }}
        /> */}

        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultCenter={sessionUser.postal_code}
          defaultZoom={5}
        >
          <LocationPin lat={25.76652} lng={-80.20359} text={cityState} />
        </GoogleMapReact> */}
      </div>
    </div>
  );
};

export default EventMap;
