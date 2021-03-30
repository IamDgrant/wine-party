// const SET_STATE = "state/setState";
// const GET_STATE = "state/getState";

// const setState = (state) => ({
//   type: SET_STATE,
//   payload: state,
// });

// const getState = (state) => ({
//   type: GET_STATE,
//   payload: state,
// });






//  const cscAPIKey = process.env.REACT_APP_CSC_API_KEY;

//  const headers = new Headers();

//  headers.append(
//    "X-CSCAPI-KEY",
//    "RktnbTNta3BOVjVwOWo1a25RZzVmcGk4b3p4ajJLYm1PMlpsNlVlRg=="
//  );

//  const fetchCscUrl = `https://api.countrystatecity.in/v1/countries/US/states`;

//  const requestOptions = {
//    method: "GET",
//    headers: headers,
//    redirect: "follow",
//  };

// export const cscFetch = () = async () => {
//     const res = await fetch(fetchCscUrl, requestOptions);
//     // console.log(res);
//     if (res.ok) {
//       const data = await res.json();
//       dispatch(getState(data))
//       return data;
//     }
//   };

//   const initialState = { state: null };

// function reducer(state = initialState, action) {
//   let newState;
//   switch (action.type) {
//     case SET_STATE: {
//       if (state.state) {
//         const newstate = [...state.state, action.payload];
//         return { ...state, state: newstate };
//       }
//       return { ...state, state: action.payload };
//     }
//     case GET_STATE:
//       return { ...state, state: action.payload };
//     default:
//       return state;
//   }
// }

// export default reducer;
