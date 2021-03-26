const SET_REVIEW = "session/setReview";
const REMOVE_REVIEW = "session/removeReview";

const setReview = (review) => ({
  type: SET_REVIEW,
  payload: review,
});

const removeReview = () => ({
  type: REMOVE_REVIEW ,
});

export const createReview = (review) => async (dispatch) => {
  const res = await fetch(`/api/auth/review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  const data = await res.json();
  dispatch(setReview(data));
  return res;
};


const initialState = { review: null };

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_REVIEW:
      return { ...state, review: action.payload };
    case REMOVE_REVIEW:
      newState = Object.assign({}, state, { review: null });
      return newState;
    default:
      return state;
  }
};

export default reducer;