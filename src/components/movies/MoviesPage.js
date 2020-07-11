import React, { Fragment, useContext, useEffect } from "react";

import MoviesContext from "../../context/movies/moviesContext";

import Movies from "./Movies";

function MoviesPage({ match }) {
  console.log(match);
  const moviesContext = useContext(MoviesContext);
  const { movies, loadingMovies, getMovies } = moviesContext;

  useEffect(() => {
    getMovies(match.params.filter, 1);
    // eslint-disable-next-line
  }, [match.params.filter]);

  return (
    <Fragment>
      <Movies movies={movies} loadingMovies={loadingMovies} />
    </Fragment>
  );
}

export default MoviesPage;
