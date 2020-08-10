import React, { Fragment, useContext, useEffect } from "react";

import MoviesContext from "../../context/movies/moviesContext";

import Movies from "./Movies";
import Paginate from "../pagination/Paginate";
import Spinner from "../spinner/Spinner";

function MoviesPage({ match, history }) {
  const moviesContext = useContext(MoviesContext);
  const { movies, loadingMovies, getMovies, totalPages } = moviesContext;

  useEffect(() => {
    getMovies(match.params.filter, match.params.page);
    // eslint-disable-next-line
  }, [match.params.filter, match.params.page]);

  const handlePageChange = (page) => {
    match.params.page = page;
    history.push(`/movies/${match.params.filter}/${page}`);
  };

  if (movies === null || movies === undefined) {
    return null;
  }

  return (
    <Fragment>
      {movies !== null && !loadingMovies ? (
        <Fragment>
          <Movies movies={movies} loadingMovies={loadingMovies} />
          <Paginate
            totalPages={totalPages}
            currentPage={Number(match.params.page)}
            pageNeighbors={3}
            paginateFunc={handlePageChange}
          />
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
}

export default MoviesPage;
