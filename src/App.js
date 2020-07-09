import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

import MovieState from "./context/movies/MovieState";

function App() {
  return (
    <MovieState>
      <div className="container">
        <Navbar />
        <Home />
      </div>
    </MovieState>
  );
}

export default App;
