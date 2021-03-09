import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEvent, seeEvent } from "../store/event";

const eventUpdate = ({ event }) => {
    import { useDispatch, useSelector } from "react-redux";
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const eventId = event.id;
  const userId = event.userId;

  const deleteOneTask = async () => {
    await dispatch(deleteEvent(eventId));
    // if (projectID) {
    //   dispatch(seeProjectTask(projectID));
    // } else {
    dispatch(seeEvent());
    // }
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-transparent hover:text-green-200 px-4 border-double border-4 border-gray-400 rounded"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Delete Event
      </button>
    </>
  );
};

export default eventUpdate;
