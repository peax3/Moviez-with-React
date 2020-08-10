import React, { useContext, Fragment, useEffect } from "react";

import Spinner from "../spinner/Spinner";
import Actors from "../actor/Actors";

import MoviesContext from "../../context/movies/moviesContext";

function MoviePage({ match }) {
  const moviesContext = useContext(MoviesContext);

  console.log(match);

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
    backdrop_path,
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

  return (
    <Fragment>
      <div className="movie my-1">
        <div className="left">
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt=""
            className="poster"
          />
        </div>
        <div className="right px-2">
          <div className="title mb-2">
            <h2>
              {original_title} <span>{vote_average}</span>
            </h2>
            <p>{tagline}</p>
          </div>

          <div className="overview mb-2">
            <h3>overview</h3>
            <p>{overview}</p>
          </div>

          <div className="genres mb-2">
            <h3>genres</h3>
            {genres !== undefined && <Genres genres={genres} />}
          </div>

          <div className="additional-info">
            <div>
              <h3>Duration</h3>
              <span>{runtime}</span>
            </div>

            <div>
              <h3>Budget</h3>
              <span>{budget}</span>
            </div>

            <div>
              <h3>Revenue</h3>
              <span>{revenue}</span>
            </div>
          </div>
        </div>
      </div>

      <Actors actors={movieActors} />
    </Fragment>
  );
}

function Genres({ genres }) {
  return (
    <Fragment>
      {genres.map((genre) => (
        <span key={genre.id}>{genre.name}</span>
      ))}
    </Fragment>
  );
}

export default MoviePage;
