// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { deleteEvent, seeEvent } from "../store/event";

// const DeleteOneEvent = ({ event }) => {

//   const dispatch = useDispatch();
//   // const sessionUser = useSelector((state) => state.session.user);
//   const sessionEvent = useSelector((state) => state.event.event);


//   // const eventId = sessionEvent.id;
//   // const user_id = event.user_id;

//   const EventDelete = async () => {
//     await dispatch(deleteEvent(eventId));
//     dispatch(seeEvent());
//   };

//   return (
//     <>
//       <button className="delete-button" onClick={EventDelete}>
//         ❌
//       </button>
//     </>
//   );
// };

// export default DeleteOneEvent;
