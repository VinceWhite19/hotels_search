import * as types from "./types";

const initialState = {
  hotels: [],
  city: "",
  dates: [new Date(), new Date()],
  loading: false,
  temperature: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        loading: false
      };
    case types.UPDATE_SEARCH:
      return {
        ...state,
        ...action.payload
      };
    case types.FETCH_WEATHER:
      return {
        ...state,
        temperature: action.payload
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
