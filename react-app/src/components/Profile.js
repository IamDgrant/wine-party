import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EventCard from "../components/EventCard";
import SearchHost from "./SearchHost";
import ProfileModal from "../components/auth/modals/ProfileModal";
import SearchResultsCard from "../components/SearchResultsCard";
import ShowPreviousEvent from "../components/auth/modals/PreviousEventModal"
import { photoUpload} from "../store/session"
import party from "../images/helena-yankovska-w0KnLkqCkr4-unsplash.jpg";
import "../components/styling/profileMiddle.css"

// import ProfileNavbar from "../components/ProfileNavbar";
// import ProfileFooter from "../components/ProfileFooter";

const Profile = () => {
  const dispatch = useDispatch()
  const todaysDate = new Date();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionEvent = useSelector((state) => state.event.event);

  const [photoFile, setPhotoFile] = useState();
  const [photoUrl, setPhotoUrl] = useState(
    sessionUser ? sessionUser.photoUrl : ""
  );

  console.log(sessionEvent);

  const futureEvents = sessionEvent.filter((events) => {
    return new Date(events.event_date) > todaysDate;
  });

  const pastEvents = sessionEvent.filter((events) => {
    return new Date(events.event_date) < todaysDate;
  });

  const handleUpload = (e) => {
    setPhotoFile(e.target.files[0]);
  }

  const submit = (e) => {
    e.preventDefault();
    dispatch(photoUpload(photoFile)).then((res) => {
      setPhotoUrl(res.url);
    });
  }

  return (
    <>
<div>
  {sessionUser.first_name} {sessionUser.last_name}
</div>
<div>
  {sessionEvent.event_name} {sessionEvent.event_date}
</div>
    </>
  );
}


export default Profile;