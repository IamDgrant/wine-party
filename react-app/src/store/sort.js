// const SORT_BY_FIRST_NAME = "sort/sortByFirstName";
// const SORT_BY_LAST_NAME = "sort/sortByLastName";
// const SORT_BY_PRICE = "sort/sortByPrice";
// const SORT_BY_RATING = "sort/sortByRating";
// const FILTER_BY_VALUE = "sort/filterByVALUE";
// // const FILTER_BY_FIRST_NAME = "sort/filterByFirstName";
// // const FILTER_BY_LAST_NAME = "sort/filterByCity";
// // const FILTER_BY_CITY = "sort/filterByCity";
// // const FILTER_BY_STATE = "sort/filterByState";
// // const FILTER_BY_POSTAL_CODE = "sort/filterByPostalCode";
// // const FILTER_BY_SOMMELIER = "sort/filterBySommelier";
// // const FILTER_BY_MIXOLOGIST = "sort/filterByMixologist";

// export const sortByFirstName = (payload) => (
//     {
//   type: SORT_BY_FIRST_NAME,
//   payload,
// });

// export const sortByLastName = (payload) => (
//     {
//   type: SORT_BY_LAST_NAME,
//   payload,
// });

// export const sortByPrice = (payload) => ({
//   type: SORT_BY_PRICE,
//   payload,
// });

// export const sortByRating = (payload) => ({
//   type: SORT_BY_RATING,
//   payload,
// });

// export const filterByValue = (payload) => ({
//   type: FILTER_BY_VALUE,
//   payload,
// });

// // export const filterByLastName = (payload) => ({
// //   type: FILTER_BY_LAST_NAME,
// //   payload,
// // });

// // export const filterByCity = (payload) => ({
// //   type: FILTER_BY_CITY,
// //   payload,
// // });

// // export const filterByState = (payload) => ({
// //   type: FILTER_BY_STATE,
// //   payload,
// // });

// // export const filterByPostalCode = (payload) => ({
// //   type: FILTER_BY_POSTAL_CODE,
// //   payload,
// // });

// // export const filterBySommelier = (payload) => ({
// //   type: FILTER_BY_SOMMELIER,
// //   payload,
// // });

// // export const filterByMixologist = (payload) => ({
// //   type: FILTER_BY_MIXOLOGIST,
// //   payload,
// // });

// // const loadData = (payload) => ({
// //   type: LOAD_DATA,
// //   payload,
// // });

// const sortAsc = (arr, field) => {
//   return arr.sort(function (a, b) {
//     if (a[field] > b[field]) {
//       return 1;
//     }
//     if (b[field] > a[field]) {
//       return -1;
//     }
//     return 0;
//   });
// };

// const sortDesc = (arr, field) => {
//   return arr.sort(function (a, b) {
//     if (a[field] > b[field]) {
//       return -1;
//     }
//     if (b[field] > a[field]) {
//       return 1;
//     }
//     return 0;
//   });
// };

// const initialState = {};

// const reducer = (state = initialState, action) => {
//   let newState;
//     // console.log("REDUCER PAYLOAD", action.payload);
//   switch (action.type) {
//     case SORT_BY_FIRST_NAME:
//       let sortedFirstNamesArr =
//         action.payload.direction === "asc"
//           ? sortAsc(action.payload, "first_name")
//           : sortDesc(action.payload, "first_name");
//       return {
//         ...state,
//         payload: sortedFirstNamesArr,
//       };
//     case SORT_BY_LAST_NAME:
//       let sortedLastNamesArr =
//         action.payload.direction === "asc"
//           ? sortAsc(action.payload, "last_name")
//           : sortDesc(action.payload, "last_name");
//       return {
//         ...state,
//         payload: sortedLastNamesArr,
//       };
//     case SORT_BY_PRICE:
//       let sortedPriceArr =
//         action.payload.direction === "asc"
//           ? sortAsc(state.filteredHosts, "price")
//           : sortDesc(state.filteredHosts, "price");
//       return {
//         ...state,
//         filteredHosts: sortedPriceArr,
//       };
//     case SORT_BY_RATING:
//       let sortedRatingArr =
//         action.payload.direction === "asc"
//           ? sortAsc(state.filteredHosts, "rating")
//           : sortDesc(state.filteredHosts, "rating");
//       return {
//         ...state,
//         filteredHosts: sortedRatingArr,
//       };
//     case FILTER_BY_VALUE:
//       const value = action.payload.value;
//       const filteredValues = hosts
//       // let newState = Object.assign({}, state);
//       // let value = action.payload.value;
//       // let filteredValues = state.city.filter((city) => {
//       //   return city.name.toLowerCase().includes(value);
//       // });
//       // let appliedFilters = state.appliedFilters;
//       // if (value) {
//       //   let index = appliedFilters.indexOf(FILTER_BY_CITY);
//       //   if (index === -1)
//       //     appliedFilters.push(FILTER_BY_CITY);
//       //   newState.payload = filteredValues;
//       // } else {
//       //   let index = appliedFilters.indexOf(FILTER_BY_CITY);
//       //   appliedFilters.splice(index, 1);
//       //   if (appliedFilters.length === 0) {
//       //     newState.filteredCities = newState.cities;
//       //   }
//       // }
//       return newState;
//     // case FILTER_BY_STATE:
//     //   return state;
//     // case FILTER_BY_SOMMELIER:
//     //   return state;
//     // case FILTER_BY_MIXOLOGIST:
//     //   return state;
//     //    case LOAD_DATA:
//     //        //load data
//     //        return state;
//     default:
//       return state;
//   }
// };
// export default reducer;
