import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EventCard from "../components/EventCard";
import SearchHost from "./SearchHost";
import ProfileModal from "../components/auth/modals/ProfileModal";
import SearchResultsCard from "../components/SearchResultsCard";
import { photoUpload} from "../store/session"
import party from "../images/helena-yankovska-w0KnLkqCkr4-unsplash.jpg";

// import ProfileNavbar from "../components/ProfileNavbar";
// import ProfileFooter from "../components/ProfileFooter";

export default function Profile() {
  const dispatch = useDispatch()
  const todaysDate = new Date();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionEvent = useSelector((state) => state.event.event);

  const [photoFile, setPhotoFile] = useState();
  const [photoUrl, setPhotoUrl] = useState(
    sessionUser ? sessionUser.photoUrl : ""
  );

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
      {/* <ProfileNavbar transparent /> */}
      <main className="profile-page ">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${party})`,
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute"></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-black">
          <div className="container mx-auto px-4 bg-black">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <ProfileModal />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-8 px-3 mt-32 sm:mt-0">
                      <SearchHost />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {futureEvents.length}
                        </span>
                        <span className="text-sm text-gray-500">
                          Upcoming Events
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {pastEvents.length}
                        </span>
                        <span className="text-sm text-gray-500">
                          Previous Events
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-results flex justify-between">
                  <div className="event-card">
                    <div>
                      <EventCard />
                    </div>
                  </div>
                  <div className="search-results">
                    <div>
                      <SearchResultsCard />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    {sessionUser.first_name} {sessionUser.last_name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    {sessionUser.city}, {sessionUser.state}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        {sessionUser.about}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <ProfileFooter /> */}
    </>
  );
}
