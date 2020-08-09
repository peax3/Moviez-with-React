import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homePage/HomePage";
import MoviesPage from "./components/movies/MoviesPage";
import MoviePage from "./components/movies/MoviePage";
import TvShowsPage from "./components/tv/TvShowsPage";

import * as ROUTES from "./routes/Routes";

import MovieState from "./context/movies/MovieState";
import TvState from "./context/tv/TvState";
import TvShow from "./components/tv/TvShow";

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
                path={`${ROUTES.MOVIES}/:filter`}
                render={({ match, history }) => {
                  const { filter } = match.params;
                  if (
                    filter === "popular" ||
                    filter === "top_rated" ||
                    filter === "upcoming" ||
                    filter === "now_playing"
                  ) {
                    return <MoviesPage match={match} history={history} />;
                  } else {
                    return <MoviePage match={match} />;
                  }
                }}
              />
              <Route exact path={`ROUTES.TV`} />
              <Route
                exact
                path={`${ROUTES.TV}/:filter`}
                render={({ match }) => {
                  const { filter } = match.params;
                  if (
                    filter === "popular" ||
                    filter === "airing_today" ||
                    filter === "top_rated" ||
                    filter === "on_the_air"
                  ) {
                    return <TvShowsPage match={match} />;
                  } else {
                    return <TvShow match={match} />;
                  }
                }}
              />
            </Switch>
          </div>
        </Fragment>
      </TvState>
    </MovieState>
  );
}

export default App;
