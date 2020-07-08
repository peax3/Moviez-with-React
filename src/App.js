import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";

import Home from "./components/home/Home";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
