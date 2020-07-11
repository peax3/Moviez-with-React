import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../routes/Routes";

function MovieCard({ movie }) {
  const { id, title, vote_average, release_date, poster_path } = movie;

  return (
    <div className="movie-card">
      <Link to={`${ROUTES.MOVIES}/${id}`}>
        <img
          src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="movie poster"
        />
      </Link>
      <div className="movie-info">
        <div>
          <span>{title}</span>
          <span>{vote_average}</span>
        </div>
        <span>{release_date}</span>
      </div>
    </div>
  );
}

export default MovieCard;
