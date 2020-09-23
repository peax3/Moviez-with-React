import React, { Fragment } from "react";

const Genres = ({ genres }) => {
  return (
    <Fragment>
      {genres.map((genre) => (
        <span key={genre.id}>{genre.name}</span>
      ))}
    </Fragment>
  );
};

export default Genres;
