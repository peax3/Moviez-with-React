import React, { useContext, Fragment, useEffect } from "react";

import Spinner from "../spinner/Spinner";

import TvContext from "../../context/tv/tvContext";

function TvShow({ match }) {
  const tvContext = useContext(TvContext);

  const { getTvShow, tvShow, loadingTV } = tvContext;

  useEffect(() => {
    const listener = getTvShow(match.params.filter);

    return () => listener();
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
              {name} <span>{vote_average}</span>
            </h2>
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
              <h3>Run Time</h3>
              <span>{episode_run_time}</span>
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
