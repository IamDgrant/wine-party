const GET_USERS = "users/get_users";

const getUsers = (users) => ({
  type: GET_USERS,
  users,
});

export const GetAllUsers = () => async (dispatch) => {
  const res = await fetch("api/users");
  const data = res.json();
  dispatch(getUsers(data));
};

const initialState = {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USERS:
        const allUsers = {};
        action.payload.forEach((user) => {
          allUsers[user.id] = user;
        });
        return allUsers;
      default:
        return state;
    }
  }

  export default reducer;