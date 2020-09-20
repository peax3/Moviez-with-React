import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { CardImage, CardBody } from "./card";

import * as ROUTES from "../../routes/Routes";

function TvCard({ tv }) {
  const { id, name, first_air_date, vote_average, poster_path } = tv;

  const date = moment(first_air_date).format("MMM DD, YYYY");
  const votes = Number(vote_average).toFixed(1);

  return (
    <div className="movie-card">
      <Link to={`${ROUTES.TV}/${id}`}>
        <CardImage poster={poster_path} alt="movie poster" />
      </Link>

      <CardBody title={name} votes={votes} date={date} />
    </div>
  );
}

export default TvCard;
