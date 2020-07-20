import React from "react";
import { Link } from "react-router-dom";

import { CardImage, CardBody } from "./card";

import * as ROUTES from "../../routes/Routes";

function TvCard({ tv }) {
  const { id, name, first_air_date, vote_average, poster_path } = tv;

  return (
    <div className="movie-card">
      <Link to={`${ROUTES.TV}/${id}`}>
        <CardImage poster={poster_path} alt="movie poster" />
      </Link>

      <CardBody title={name} votes={vote_average} date={first_air_date} />
    </div>
  );
}

export default TvCard;
