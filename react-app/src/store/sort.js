const SORT_BY_ALPHABET = "sort/sortByAlphabet";
const SORT_BY_RATE = "sort/sortByRate";
const LOAD_DATA = "sort/loadData";
const FILTER_BY_RATE = "sort/filterByRate";

const sortByPrice = (payload) => ({
  type: SORT_BY_RATE,
  payload,
});

const filterByPrice = (payload) => ({
  type: FILTER_BY_RATE,
  payload,
});

const sortByAlphabet = (payload) => ({
  type: SORT_BY_ALPHABET,
  payload,
});

// const loadData = (payload) => ({
//   type: LOAD_DATA,
//   payload,
// });


const initialState = {};

const reducer = (state = initialState, action) => {
   switch (action.type) {
       case SORT_BY_ALPHABET:
           //sort alphabetically
           return state;
       case SORT_BY_RATE:
           //sort by price
           return state;
       case FILTER_BY_RATE:
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
