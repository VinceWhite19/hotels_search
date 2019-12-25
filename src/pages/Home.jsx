import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import SearchForm from "../components/SearchForm";
import AppContextHOC from "../HOC/AppContextHOC";

const Home = ({ fetchHotels }) => {
  const [city, setCity] = useState("");
  const [dates, setDates] = useState([new Date(), new Date()]);

  const onChangeDate = dates => setDates(dates);

  const onChange = e => setCity(e.target.value);
  const history = useHistory();

  const onSubmit = async e => {
    e.preventDefault();
    const datesISO = dates.map(date => date.toISOString().split("T")[0]);
    fetchHotels(city, datesISO);
    history.push("/hotels");
  };

  return (
    <SearchForm
      city={city}
      dates={dates}
      onChange={onChange}
      onChangeDate={onChangeDate}
      onSubmit={onSubmit}
    />
  );
};

Home.propTypes = {
  fetchHotels: PropTypes.func.isRequired
};

export default AppContextHOC(Home);
