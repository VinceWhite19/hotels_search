import React from "react";
import PropTypes from "prop-types";

const HotelItem = ({ name, image, city, temperature }) => {
  return (
    <div className="card flex-row col-12 p-3">
      <div className="col-8 py-3">
        <h2>{name}</h2>
        <p>Weather: {temperature}C</p>
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
