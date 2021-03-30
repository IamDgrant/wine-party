const SORT_BY_ALPHABET = "sort/sortByAlphabet";
const SORT_BY_PRICE = "sort/sortByPrice";
const SORT_BY_RATING = "sort/sortByRating";
// const LOAD_DATA = "sort/loadData";
const FILTER_BY_CITY = "sort/filterByCity";
const FILTER_BY_STATE = "sort/filterByState";
const FILTER_BY_SOMMELIER = "sort/filterBySommelier";
const FILTER_BY_MIXOLOGIST = "sort/filterByMixologist";

export const sortByAlphabet = (payload) => (
    console.log(payload),
    {
  type: SORT_BY_ALPHABET,
  payload,
});

export const sortByPrice = (payload) => ({
  type: SORT_BY_PRICE,
  payload,
});

export const sortByRating = (payload) => ({
  type: SORT_BY_RATING,
  payload,
});

export const filterByCity = (payload) => ({
  type: FILTER_BY_CITY,
  payload,
});

export const filterByState = (payload) => ({
  type: FILTER_BY_STATE,
  payload,
});

export const filterBySommelier = (payload) => ({
  type: FILTER_BY_SOMMELIER,
  payload,
});

export const filterByMixologist = (payload) => ({
  type: FILTER_BY_MIXOLOGIST,
  payload,
});

// const loadData = (payload) => ({
//   type: LOAD_DATA,
//   payload,
// });

const sortAsc = (arr, field) => {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return 1;
    }
    if (b[field] > a[field]) {
      return -1;
    }
    return 0;
  });
};

const sortDesc = (arr, field) => {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return -1;
    }
    if (b[field] > a[field]) {
      return 1;
    }
    return 0;
  });
};

const initialState = {};

const reducer = (state = initialState, action) => {
    console.log("REDUCER PAYLOAD", action.payload);
  switch (action.type) {
    case SORT_BY_ALPHABET:
        
      let sortedNamesArr =
        action.payload.direction === "asc"
          ? sortAsc(action.payload, "first_name")
          : sortDesc(action.payload, "first_name");

      return {
        ...state,
        payload: sortedNamesArr,
      };
    case SORT_BY_PRICE:
      let sortedPriceArr =
        action.payload.direction === "asc"
          ? sortAsc(state.filteredHosts, "price")
          : sortDesc(state.filteredHosts, "price");

      return {
        ...state,
        filteredHosts: sortedPriceArr,
      };
    case SORT_BY_RATING:
      let sortedRatingArr =
        action.payload.direction === "asc"
          ? sortAsc(state.filteredHosts, "rating")
          : sortDesc(state.filteredHosts, "rating");

      return {
        ...state,
        filteredHosts: sortedRatingArr,
      };
    case FILTER_BY_CITY:
      let newState = Object.assign({}, state);
      //the value received from our presentational component
      let value = action.payload.value;
      let filteredValues = state.city.filter((city) => {
        //look for objects with the received value in their ‘name’ or ‘designer’ fields
        return city.name.toLowerCase().includes(value);
      });
      let appliedFilters = state.appliedFilters;
      //if the value from the input box is not empty
      if (value) {
        //check if the filter already exists in the tracking array
        let index = appliedFilters.indexOf(FILTER_BY_CITY);
        if (index === -1)
          //if it doesn’t, add it.
          appliedFilters.push(FILTER_BY_CITY);
        //change the filtered products to reflect the change
        newState.payload = filteredValues;
      } else {
        //if the value is empty, we can assume everything has been erased
        let index = appliedFilters.indexOf(FILTER_BY_CITY);
        //in that case, remove the current filter
        appliedFilters.splice(index, 1);
        if (appliedFilters.length === 0) {
          //if there are no filters applied, reset the products to normal.
          newState.filteredCities = newState.cities;
        }
      }
      return newState;
    case FILTER_BY_STATE:
      //filter by price
      return state;
    case FILTER_BY_SOMMELIER:
      //filter by price
      return state;
    case FILTER_BY_MIXOLOGIST:
      //filter by price
      return state;
    //    case LOAD_DATA:
    //        //load data
    //        return state;
    default:
      return state;
  }
};
export default reducer;
