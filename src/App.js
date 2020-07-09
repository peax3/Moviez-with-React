import React, { Fragment } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

import MovieState from "./context/movies/MovieState";

function App() {
  return (
    <MovieState>
      <Fragment>
        <Navbar />
        <div className="container px-1">
          <Home />
        </div>
      </Fragment>
    </MovieState>
  );
}

export default App;
