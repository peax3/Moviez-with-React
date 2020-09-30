import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import MovieContext from "../../context/movies/moviesContext";
import TvContext from "../../context/tv/tvContext";

import Movies from "../movies/Movies";
import TvShows from "../tv/TvShows";
import Spinner from "../spinner/Spinner";

function Home(props) {
  const movieContext = useContext(MovieContext);
  const tvContext = useContext(TvContext);

  const { movies, loadingMovies, getMovies } = movieContext;

  const { tvShows, getTvShows, loadingTV } = tvContext;

  useEffect(() => {
    getMovies();
    getTvShows();

    // eslint-disable-next-line
  }, []);

  if (movies === null || tvShows === null) {
    return null;
  }

  let moviesToShow;

  let tvToShow;

  if (movies !== null && movies !== undefined)
    moviesToShow = movies.slice(0, 8);

  if (tvShows !== null && tvShows !== undefined) tvToShow = tvShows.slice(0, 8);

  return (
    <Fragment>
      <section>
        <h2 className="mb-1 heading-w-link">
          Popular Movies{" "}
          <span>
            <Link to="/movies/popular">
              View All <i className="fas fa-arrow-right"></i>
            </Link>
          </span>
        </h2>
        {moviesToShow !== null && !loadingMovies ? (
          <Movies movies={moviesToShow} />
        ) : (
          <Spinner />
        )}
      </section>

      <section className="pt-5">
        <h2 className="mb-1 heading-w-link">
          Popular Tv Shows{" "}
          <span>
            <Link to="/tv/popular">
              View All <i className="fas fa-arrow-right"></i>
            </Link>
          </span>
        </h2>
        {tvToShow !== null && !loadingTV ? (
          <TvShows tvShows={tvToShow} />
        ) : (
          <Spinner />
        )}
      </section>
    </Fragment>
  );
}

export default Home;
