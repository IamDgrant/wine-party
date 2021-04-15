const SET_EVENT = "event/SetEvent";
const GET_EVENT = "event/getEvent";
const UPDATE_EVENT = "session/updateEvent";
// const REMOVE_EVENT = "event/removeEvent";

const setEvent = (event) => ({
  type: SET_EVENT,
  payload: event,
});

const getEvent = (event) => ({
  type: GET_EVENT,
  payload: event,
});

const updateEvent = (data) => ({
  type: UPDATE_EVENT,
  payload: data,
});

// const removeEvent = (eventId) => ({
//   type: REMOVE_EVENT,
//   payload: eventId,
// });

export const createEvent = ({
  selectedHostId,
  event_name,
  event_date,
  event_city,
  event_state,
  event_postal_code,
}) => async (dispatch) => {
  // console.log('HOST', selectedHostId);
  const res = await fetch("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      selectedHostId,
      event_name,
      event_date,
      event_city,
      event_state,
      event_postal_code,
    }),
  });
  const data = await res.json();
  // console.log(data);
  dispatch(setEvent(data));
};

export const update_Event = (updateData) => async (dispatch) => {
  const {
    currentEventId,
    selectedHostId,
    event_date,
    event_city,
    event_state,
    event_postal_code,
  } = updateData;
  // console.log("MADE IT HERE ID", currentEventId);
  // console.log("MADE IT HERE selectedHostId", selectedHostId);
  const res = await fetch(`/api/events/update/${currentEventId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      currentEventId,
      selectedHostId,
      event_date,
      event_city,
      event_state,
      event_postal_code,
    }),
  });
  // console.log(res);
  if (res.ok) {
    const data = await res.json();
    dispatch(updateEvent(data));
  }
  return res;
};

export const deleteEvent = (eventId) => async (dispatch) => {
  const res = await fetch(`/api/events/${eventId}`, {
    method: "DELETE",
  });
  const deleted = await res.json();
  // dispatch(removeEvent())
  console.log(deleted);
};

export const seeEvent = () => async (dispatch) => {
  const res = await fetch("/api/events/");
  const data = await res.json();
  dispatch(getEvent(data.events));
};

export const seeEventId = (id) => async (dispatch) => {
  const res = await fetch(`/api/events/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  dispatch(getEvent(data));
};

export const seeHostEvent = (id) => async (dispatch) => {
  const res = await fetch(`/api/events/host/${id}`);
  const data = await res.json();
  dispatch(getEvent(data.events));
  return data;
};

const initialState = { event: [] };

function reducer(state = initialState, action) {
  // let newState;
  switch (action.type) {
    case SET_EVENT: {
      if (state.event) {
        const newevent = [...state.event, action.payload];
        return { ...state, event: newevent };
      }
      return { ...state, event: action.payload };
    }
    case GET_EVENT:
      return { ...state, event: action.payload };
    case UPDATE_EVENT:
      return { ...state, user: action.payload };
    // case REMOVE_EVENT:
    //   return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default reducer;
