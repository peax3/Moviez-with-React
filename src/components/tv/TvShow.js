import React, { useContext, Fragment, useEffect } from "react";
import moment from "moment";

import Spinner from "../spinner/Spinner";
import Actors from "../actor/Actors";

import TvContext from "../../context/tv/tvContext";
import { minutesToHM } from "../movies/MoviePage";

function TvShow({ match }) {
  const tvContext = useContext(TvContext);

  const { getTvShow, tvShow, loadingTV, getTvActors, tvActors } = tvContext;

  useEffect(() => {
    getTvShow(match.params.id);
    getTvActors(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (loadingTV) {
    return <Spinner />;
  }

  if (tvShow === null || tvShow === undefined) {
    return null;
  }

  const {
    backdrop_path,
    vote_average,
    genres, // is an Array
    overview,
    poster_path,
    name,
    episode_run_time,
    first_air_date,
    number_of_episodes,
    number_of_seasons,
  } = tvShow;

  const date = moment(first_air_date).format("MMM YYYY");

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
            <h2 className="movie_title">
              {name} <span className="movie-date">(first aired {date})</span>
            </h2>

            <p className="votes mt-1">
              <i className="fas fa-star"></i>
              {vote_average}
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
              <h3>Run Time</h3>
              <span>{minutesToHM(Number(episode_run_time))}</span>
            </div>

            <div>
              <h3>Seasons</h3>
              <span>{`${number_of_seasons} Seasons`}</span>
            </div>

            <div>
              <h3>Episdodes</h3>
              <span>{`${number_of_episodes} Episodes`}</span>
            </div>
          </div>
        </div>
      </div>

      <Actors actors={tvActors} />
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

export default TvShow;
