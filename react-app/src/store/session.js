const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";
const SET_PHOTO = "session/setPhoto";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const setPhoto = (photoUrl) => ({
  type: SET_PHOTO,
  payload: photoUrl,
})


export const createUser = (user) => async (dispatch) => {
  // console.log("YES!!!!!!!");
  const res = await fetch(`/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  console.log(data);
  dispatch(setUser(data));
  return res;
};

export const restoreUser = () => async (dispatch) => {
  const res = await fetch("/api/auth");
  const data = await res.json();
  if (res.ok) {
    dispatch(setUser(data));
  }
};

export const login = (email, password) => async (dispatch) => {
  console.log("here", email);
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    dispatch(setUser(data));
  }
  return res;
};

export const logout = () => async (dispatch) => {
  const res = await fetch("/api/auth/logout", {
    method: "DELETE",
  });

  const data = await res.json();
  if (data.message === "User logged out") {
    dispatch(removeUser());
  }
  return res;
};

export const photoUpload = (file) => async (dispatch) => {
  let photoUrl;
  const formData = new FormData();
  formData.append("user_file", file);
  const res = await fetch("/api/users/update/profile", {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    // console.log('ITS HITTING!!!!!', res);
    // console.log(res);
    photoUrl = await res.json();
    console.log(photoUrl);
    dispatch(setPhoto(photoUrl));
  }
};

const initialState = { user: null };

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null });
      return newState;
    case SET_PHOTO:
      return { ...state, user: {...state.user, profile_image: action.payload.url}}
    default:
      return state;
  }
};

export default reducer;
