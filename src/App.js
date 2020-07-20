import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homePage/HomePage";
import MoviesPage from "./components/movies/MoviesPage";
import MoviePage from "./components/movies/MoviePage";

import * as ROUTES from "./routes/Routes";

import MovieState from "./context/movies/MovieState";
import TvState from "./context/tv/TvState";

function App() {
  return (
    <MovieState>
      <TvState>
        <Fragment>
          <Navbar />
          <div className="container px-1">
            <Switch>
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route
                path={`${ROUTES.MOVIES}/:filter(popular|top_rated|upcoming|now_playing)`}
                component={MoviesPage}
              />
              <Route
                exact
                path={`${ROUTES.MOVIES}/:id`}
                component={MoviePage}
              />
              <Route exact path={`ROUTES.TV`} />
            </Switch>
          </div>
        </Fragment>
      </TvState>
    </MovieState>
  );
}

export default App;
