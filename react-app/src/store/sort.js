const SORT_BY_ALPHABET = "sort/sortByAlphabet";
const SORT_BY_PRICE = "sort/sortByPrice";
const SORT_BY_RATING = "sort/sortByRating";
// const LOAD_DATA = "sort/loadData";
const FILTER_BY_CITY = "sort/filterByCity";
const FILTER_BY_STATE = "sort/filterByState";
const FILTER_BY_SOMMELIER = "sort/filterBySommelier";
const FILTER_BY_MIXOLOGIST = "sort/filterByMixologist";

export const sortByAlphabet = (payload) => (
    // console.log(payload),
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
    // console.log("REDUCER PAYLOAD", action.payload);
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
      let value = action.payload.value;
      let filteredValues = state.city.filter((city) => {
        return city.name.toLowerCase().includes(value);
      });
      let appliedFilters = state.appliedFilters;
      if (value) {
        let index = appliedFilters.indexOf(FILTER_BY_CITY);
        if (index === -1)
          appliedFilters.push(FILTER_BY_CITY);
        newState.payload = filteredValues;
      } else {
        let index = appliedFilters.indexOf(FILTER_BY_CITY);
        appliedFilters.splice(index, 1);
        if (appliedFilters.length === 0) {
          newState.filteredCities = newState.cities;
        }
      }
      return newState;
    case FILTER_BY_STATE:
      return state;
    case FILTER_BY_SOMMELIER:
      return state;
    case FILTER_BY_MIXOLOGIST:
      return state;
    //    case LOAD_DATA:
    //        //load data
    //        return state;
    default:
      return state;
  }
};
export default reducer;
