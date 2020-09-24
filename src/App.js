import React, { useState, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navigation/Navbar";

import HomePage from "./components/homePage/HomePage";
import MoviesPage from "./components/movies/MoviesPage";
import MoviePage from "./components/movies/MoviePage";
import TvShowsPage from "./components/tv/TvShowsPage";
import TvShow from "./components/tv/TvShow";
import SearchPage from "./components/search/seachPage/SearchPage";
import SearchForm from "./components/search/SearchForm";

import * as ROUTES from "./routes/Routes";

import MovieState from "./context/movies/MovieState";
import TvState from "./context/tv/TvState";
import SearchState from "./context/search/SearchState";
import SideNav from "./components/navigation/sideNav/SideNav";

function App() {
  const [showSideNav, setShowSideNav] = useState(false);

  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  const closeShowSideNav = () => {
    setShowSideNav(false);
  };

  return (
    <MovieState>
      <TvState>
        <SearchState>
          <Fragment>
            <SideNav show={showSideNav} hide={closeShowSideNav} />
            <Navbar hamburgerToggle={showSideNavHandler} />

            <div className="container px-1">
              <div className="my-3">
                <SearchForm />
              </div>
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

                <Route
                  path={`${ROUTES.SEARCH}/:filter`}
                  exact
                  component={SearchPage}
                />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </Fragment>
        </SearchState>
      </TvState>
    </MovieState>
  );
}

export default App;
