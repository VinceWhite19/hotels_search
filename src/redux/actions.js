import { getHotels, getCoordinates } from "../api/api";
import * as types from "./types";

const hotelsUpdate = payload => {
  return {
    type: types.FETCH_HOTELS,
    payload: payload
  };
};
const setLoading = () => {
  return {
    type: types.SET_LOADING
  };
};

export const fetchHotels = (city, dates) => async dispatch => {
  dispatch(setLoading());
  dispatch({
    type: types.UPDATE_SEARCH,
    payload: { city, dates }
  });

  try {
    const coordinates = await getCoordinates(city);
    const hotels = await getHotels(coordinates, dates);
    dispatch(hotelsUpdate(hotels));
  } catch (err) {
    dispatch({
      type: types.FETCH_HOTELS_ERROR,
      payload: err
    });
  }
};
