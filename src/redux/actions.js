import { getHotels, getCoordinates } from "../api/api";
import { weatherKey } from "../api/config";
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

export const fetchWeather = city => async dispatch => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${weatherKey}`
    );

    const data = await response.json();
    const temperature = Math.floor(data.list[0].main.temp);

    dispatch({
      type: types.FETCH_WEATHER,
      payload: temperature
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_WEATHER_ERROR,
      payload: err
    });
  }
};
