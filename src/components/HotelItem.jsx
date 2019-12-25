import React from "react";
import ReactWeather from "react-open-weather";
import "react-open-weather/lib/css/ReactWeather.css";
import { weatherKey } from "../api/config";
import PropTypes from "prop-types";

const HotelItem = ({ name, image, city }) => {
  return (
    <div className="card flex-row col-12 p-3">
      <div className="col-8 py-3">
        <h2>{name}</h2>
        <ReactWeather
          forecast="today"
          apikey={weatherKey}
          type="city"
          city={city}
        />
      </div>
      <div className="col-4">
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

HotelItem.propTypes = {
  city: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string
};

export default HotelItem;
