import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { CardImage, CardBody } from "./card";

import * as ROUTES from "../../routes/Routes";

function MovieCard({ movie }) {
  const { id, title, vote_average, release_date, poster_path } = movie;

  const date = !release_date
    ? null
    : moment(release_date).format("MMM DD, YYYY");

  const votes = Number(vote_average).toFixed(1);

  return (
    <div className="movie-card">
      <Link to={`${ROUTES.MOVIES}/${id}`}>
        <CardImage poster={poster_path} alt="movie poster" />
      </Link>

      <CardBody title={title} votes={votes} date={date} />
    </div>
  );
}

export default MovieCard;
