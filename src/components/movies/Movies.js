import React from "react";

import Card from "../card/Card";
import Spinner from "../spinner/Spinner";

function Movies({ movies, loadingMovies }) {
  if (loadingMovies) {
    return <Spinner />;
  }

  if (movies === null || movies === undefined) {
    return null;
  }

  return (
    <div>
      {/* {movies.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))} */}
      working
    </div>
  );
}

export default Movies;
