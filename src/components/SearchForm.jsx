import React from "react";
import PropTypes from "prop-types";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const SearchForm = props => {
  const { city, onSubmit, onChange, onChangeDate, dates } = props;
  return (
    <form onSubmit={onSubmit} className="col-6 text-center">
      <div className="form-group">
        <label className="h3">Find deals on hotels...</label>
        <input
          type="text"
          className="form-control"
          name="city"
          value={city}
          onChange={onChange}
          placeholder="Enter destination point (e.g. Paris)"
        />
      </div>
      <div className="form-group">
        <label className="mx-2" htmlFor="city">
          Select check-in and check-out dates
        </label>
        <DateRangePicker
          onChange={onChangeDate}
          value={dates}
          minDate={new Date()}
          format="y-MM-dd"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Let's go
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  city: PropTypes.string,
  dates: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeDate: PropTypes.func.isRequired
};
export default SearchForm;
