const SET_HOST = "host/SetHost";
const REMOVE_HOST = "host/removeHost";
const GET_HOST = "host/getHost";

const setHost = (host) => ({
  type: SET_HOST,
  payload: host,
});

const getHost = (host) => ({
  type: GET_HOST,
  payload: host,
});

const removeHost = (hostId) => ({
  type: REMOVE_HOST,
  payload: hostId,
});

// export const createHost = ({ eventName, eventDate, city, state }) => async (
//   dispatch
// ) => {
//   const res = await fetch("/api/events", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       eventName,
//       eventDate,
//       city,
//       state,
//     }),
//   });
//   const data = await res.json();
//   dispatch(setEvent(data));
// };

export const browseAllHost = () => async (dispatch) => {
  const res = await fetch("/api/hosts");
  const data = await res.json();
  dispatch(getHost(data));
  return data;
};

export const seeHost = (search, sommelier, mixologist) => async (dispatch) => {
  const res = await fetch("/api/hosts/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ search, sommelier, mixologist }),
  });
  const data = await res.json();
  dispatch(getHost(data.hosts));
  console.log(data.hosts);
  return data;
};

export const seeRandomHost = () => async (dispatch) => {
  const res = await fetch("/api/hosts/random");
  const data = await res.json();
  dispatch(getHost(data));
  return data;
};

export const deleteHost = (hostId) => async (dispatch) => {
  const res = await fetch(`/api/hosts/${hostId}`, {
    method: "DELETE",
  });
  const deleted = await res.json();
  console.log(deleted);
};

// export const seeHost = () => async (dispatch) => {
//   const res = await fetch("/api/hosts/search",);
//   const data = await res.json();
//   dispatch(getHost(data.hosts));
//   return data
// };

export const seeHostEvent = (id) => async (dispatch) => {
  const res = await fetch(`/api/events/host/${id}`);
  const data = await res.json();
  dispatch(getHost(data.hosts));
  return data;
};

const initialState = { host: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_HOST: {
      if (state.host) {
        const newhost = [...state.host, action.payload];
        return { ...state, host: newhost };
      }
      return { ...state, host: action.payload };
    }
    case GET_HOST:
      return { ...state, host: action.payload };
    default:
      return state;
  }
}

export default reducer;
