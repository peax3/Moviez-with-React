import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homePage/HomePage";
import MoviesPage from "./components/movies/MoviesPage";

import * as ROUTES from "./routes/Routes";

import MovieState from "./context/movies/MovieState";

function App() {
  return (
    <MovieState>
      <Fragment>
        <Navbar />
        <div className="container px-1">
          <Switch>
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route path={`${ROUTES.MOVIES}/:filter`} component={MoviesPage} />
          </Switch>
        </div>
      </Fragment>
    </MovieState>
  );
}

export default App;
