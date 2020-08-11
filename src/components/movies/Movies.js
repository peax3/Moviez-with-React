import React from "react";

import MovieCard from "../card/MovieCard";

function Movies({ movies }) {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Movies;
