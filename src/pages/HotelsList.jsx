import React from "react";
import HotelItem from "../components/HotelItem";
import AppContextHOC from "../HOC/AppContextHOC";
import PropTypes from "prop-types";

const Hotels = ({ hotels, dates, city, temperature, fetchWeather }) => {
  fetchWeather(city);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h3>
            Destination: <strong>{city}</strong>
          </h3>
        </div>
        <div className="col-6 d-flex justify-content-around">
          <span>
            Check-in date: <strong>{dates.length > 0 && dates[0]}</strong>
          </span>
          <span>
            Check-out date: <strong>{dates.length > 0 && dates[1]} </strong>
          </span>
        </div>
      </div>
      <div className="row">
        {hotels &&
          hotels.map((hotel, i) => (
            <HotelItem
              key={i}
              name={hotel.hotel.name}
              image={hotel.hotel.media && hotel.hotel.media[0].uri}
              temperature={temperature}
              city={city}
            />
          ))}
      </div>
    </div>
  );
};

Hotels.propTypes = {
  hotels: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  dates: PropTypes.array.isRequired
};
export default AppContextHOC(Hotels);
