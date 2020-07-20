import React from "react";
import { Link } from "react-router-dom";

import { CardImage, CardBody } from "./card";

import * as ROUTES from "../../routes/Routes";

function MovieCard({ movie }) {
  const { id, title, vote_average, release_date, poster_path } = movie;

  return (
    <div className="movie-card">
      <Link to={`${ROUTES.MOVIES}/${id}`}>
        <CardImage poster={poster_path} alt="movie poster" />
      </Link>

      <CardBody title={title} votes={vote_average} date={release_date} />
    </div>
  );
}

export default MovieCard;
