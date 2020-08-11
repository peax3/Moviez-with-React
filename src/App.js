import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";

import HomePage from "./components/homePage/HomePage";
import MoviesPage from "./components/movies/MoviesPage";
import MoviePage from "./components/movies/MoviePage";
import TvShowsPage from "./components/tv/TvShowsPage";
import TvShow from "./components/tv/TvShow";

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
                exact
                path={`${ROUTES.MOVIES}/:filter(popular|now_playing|top_rated|upcoming)/:page?`}
                component={MoviesPage}
              />

              <Route
                path={`${ROUTES.MOVIES}/:id`}
                exact
                component={MoviePage}
              />

              <Route
                exact
                path={`${ROUTES.TV}/:filter(popular|airing_today|top_rated|on_the_air)/:page?`}
                component={TvShowsPage}
              />

              <Route path={`${ROUTES.TV}/:id`} exact component={TvShow} />
            </Switch>
          </div>
        </Fragment>
      </TvState>
    </MovieState>
  );
}

export default App;
