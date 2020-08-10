import React from "react";

import MovieCard from "../card/MovieCard";
import Spinner from "../spinner/Spinner";

function Movies({ movies, loadingMovies }) {
  // if (loadingMovies) {
  //   return <Spinner />;
  // }

  // if (movies === null || movies === undefined) {
  //   return null;
  // }

  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Movies;
