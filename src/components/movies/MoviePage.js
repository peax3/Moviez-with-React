import React, { useContext, Fragment, useEffect } from "react";
import moment from "moment";

import Spinner from "../spinner/Spinner";
import Actors from "../actor/Actors";
import Genres from "../genres/Genres";

import MoviesContext from "../../context/movies/moviesContext";

function MoviePage({ match }) {
  const moviesContext = useContext(MoviesContext);

  const {
    getMovie,
    movie,
    loadingMovies,
    getMovieActors,
    movieActors,
  } = moviesContext;

  useEffect(() => {
    getMovie(match.params.id);
    getMovieActors(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (loadingMovies) {
    return <Spinner />;
  }

  if (movie === null || movie === undefined) {
    return null;
  }

  const {
    tagline,
    original_title,
    vote_average,
    budget,
    genres, // is an Array
    overview,
    poster_path,
    revenue,
    release_date,
    runtime,
  } = movie;

  console.log({ original_title, runtime });

  const date = moment(release_date).format("YYYY");
  const votes = Number(vote_average).toFixed(1);

  const timeDuration = minutesToHM(runtime);

  return (
    <Fragment>
      <div className="movie mb-2">
        <div className="left">
          <div className="movie_img mb-2">
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt=""
              className="poster"
            />
          </div>
        </div>

        <div className="right">
          <div className="movie_heading mb-1">
            <h2 className="movie-title">
              {original_title} <span className="movie-date">{`(${date})`}</span>
            </h2>
            <p className="tagline">{tagline}</p>
            <p className="votes mt-1">
              <i className="fas fa-star"></i>
              {votes}
            </p>
          </div>

          <div className="movie_overview mb-1">
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>

          <div className="movie_genres mb-1">
            <h3>Genres</h3>
            {genres !== undefined && <Genres genres={genres} />}
          </div>

          <div className="movie_additional-info mb-1">
            <div>
              <h3>Duration</h3>
              <span>{timeDuration}</span>
            </div>

            <div>
              <h3>Budget</h3>
              <span>{moneyFormatter.format(budget)}</span>
            </div>

            <div>
              <h3>Revenue</h3>
              <span>{moneyFormatter.format(revenue)}</span>
            </div>
          </div>
        </div>
      </div>

      <Actors actors={movieActors} />
    </Fragment>
  );
}

export const minutesToHM = (time) => {
  if (typeof time !== "number") {
    return -1;
  }
  if (time <= 0) {
    return;
  } else if (time > 0 && time < 60) {
    return `${time}m`;
  }
  return `${Math.floor(time / 60)}h ${minutesToHM(time % 60)}`;
};

export const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export default MoviePage;
