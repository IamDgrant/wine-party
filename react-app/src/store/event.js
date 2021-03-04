const SET_EVENT = "event/SetEvent";
const REMOVE_EVENT = "event/removeEvent";
const GET_EVENT = "event/getEvent";

const setEvent = (event) => ({
  type: SET_EVENT,
  payload: event,
});

const getEvent = (event) => ({
  type: GET_EVENT,
  payload: event,
});

const removeEvnet = (eventId) => ({
  type: REMOVE_EVENT,
  payload: eventId,
});

export const createEvent = ({ eventName, eventDate, city, state }) => async (
  dispatch
) => {
  const res = await fetch("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventName,
      eventDate,
      city,
      state,
    }),
  });
  const data = await res.json();
  dispatch(setEvent(data));
};

export const deleteEvent = (eventId) => async (dispatch) => {
  console.log("hit");
  const res = await fetch(`/api/events/${eventId}`, {
    method: "DELETE",
  });
  const deleted = await res.json();
  console.log(deleted);
};

export const seeEvent = () => async (dispatch) => {
  const res = await fetch("/api/events/");
  const data = await res.json();
  dispatch(getEvent(data.events));
};

export const seeHostEvent = (id) => async (dispatch) => {
  const res = await fetch(`/api/events/host/${id}`);
  const data = await res.json();
  dispatch(getEvent(data.events));
  return data;
};

const initialState = { task: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_EVENT: {
      if (state.task) {
        const newtask = [...state.task, action.payload];
        return { ...state, task: newtask };
      }
      return { ...state, task: action.payload };
    }
    case GET_EVENT:
      return { ...state, task: action.payload };
    default:
      return state;
  }
}

export default reducer;