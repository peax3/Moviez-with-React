import React, { Fragment, useContext, useEffect } from "react";

import MoviesContext from "../../context/movies/moviesContext";

import Movies from "./Movies";
import Paginate from "../pagination/Paginate";

function MoviesPage({ match, history }) {
  const moviesContext = useContext(MoviesContext);
  const { movies, loadingMovies, getMovies, totalPages } = moviesContext;

  useEffect(() => {
    getMovies(match.params.filter, 1);
    // eslint-disable-next-line
  }, [match.params.filter]);

  const handlePageChange = (page) => {
    console.log(page);
    history.push(`${match.params.filter}/${page}`);
  };

  return (
    <Fragment>
      <Movies movies={movies} loadingMovies={loadingMovies} />
      <Paginate
        totalPages={totalPages}
        presentPage={5}
        pageNeighbors={3}
        paginateFunc={handlePageChange}
      />
    </Fragment>
  );
}

export default MoviesPage;
