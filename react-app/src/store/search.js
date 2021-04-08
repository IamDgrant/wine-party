const GET_HOSTS = "members/getHosts";

const getPartyHosts = (inputs) => ({
  type: GET_HOSTS,
  payload: inputs,
});

export const getHosts = (search, id) => async (dispatch) => {
  const res = await fetch(`/api/users/${search}/${id}`, { method: "GET" });
  const data = await res.json();
  dispatch(getPartyHosts(data));
  return data;
};

const initialState = { inputs: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOSTS:
      return { ...state, inputs: action.payload };
    default:
      return state;
  }
}

export default reducer;
