import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HotelsList from "./pages/HotelsList";
import { fetchHotels } from "./redux/actions";
import { connect } from "react-redux";
import Spinner from "./components/Spinner";
export const AppContext = createContext();

export const App = ({ hotels, dates, city, loading, fetchHotels }) => {
  if (loading) return <Spinner />;
  return (
    <Router>
      <AppContext.Provider
        value={{
          hotels,
          fetchHotels,
          dates,
          city
        }}
      >
        <header className="d-flex justify-content-center mt-2">
          <Link to="/">
            <h1>My booking app</h1>
          </Link>
        </header>
        <main className="d-flex justify-content-center mt-5">
          <Route exact path="/" component={Home} />
          <Route path="/hotels" component={HotelsList} />
        </main>
      </AppContext.Provider>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    hotels: state.hotels,
    city: state.city,
    dates: state.dates,
    loading: state.loading
  };
};

const mapDispatchToProps = {
  fetchHotels
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
