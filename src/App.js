import React, { Fragment } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homePage/HomePage";

import MovieState from "./context/movies/MovieState";

function App() {
  return (
    <MovieState>
      <Fragment>
        <Navbar />
        <div className="container px-1">
          <HomePage />
        </div>
      </Fragment>
    </MovieState>
  );
}

export default App;
