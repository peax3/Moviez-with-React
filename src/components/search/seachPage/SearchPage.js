import React, { Fragment, useContext, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

import Spinner from "../../spinner/Spinner";
import Movies from "../../movies/Movies";
import TvShows from "../../tv/TvShows";
import Paginate from "../../pagination/Paginate";

import SearchContext from "../../../context/search/searchContext";

const SearchPage = (props) => {
  const params = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const currentPage = new URLSearchParams(location.search).get("page") || 1;
  const history = useHistory();

  const searchContext = useContext(SearchContext);

  const {
    loading,
    getSearchResults,
    movieResults,
    tvResults,
    totalPagesMovies,
    totalPagesTV,
  } = searchContext;

  useEffect(() => {
    getSearchResults(query, currentPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, currentPage]);

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    history.push(`/search/${e.target.value}?query=${query}`);
  };

  const handlePageChange = (page) => {
    history.push(`/search/${params.filter}?query=${query}&page=${page}`);
  };

  let toDisplay;

  if (params.filter === "movie") {
    toDisplay = (
      <MovieDisplay
        movies={movieResults}
        totalPages={totalPagesMovies}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    );
  } else if (params.filter === "tv") {
    toDisplay = (
      <TvDisplay
        tvShows={tvResults}
        totalPages={totalPagesTV}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    );
  }

  return (
    <Fragment>
      <p className="search-query mb-1">
        Search result for <span>"{query}"</span>
      </p>
      <ul className="search-nav mb-1">
        <li>
          <button
            className={`btn btn-transparent ${
              params.filter === "movie" ? "active" : ""
            }`}
            value="movie"
            onClick={clickHandler}
          >
            Movies
          </button>
        </li>
        <li>
          <button
            className={`btn btn-transparent ${
              params.filter === "tv" ? "active" : ""
            }`}
            value="tv"
            onClick={clickHandler}
          >
            TV
          </button>
        </li>
      </ul>
      {movieResults !== null && tvResults !== null && !loading ? (
        <Fragment>{toDisplay}</Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

const MovieDisplay = ({
  movies,
  totalPages,
  currentPage,
  handlePageChange,
}) => {
  return (
    <Fragment>
      {movies.length === 0 ? (
        <p>There are no movie results for your query</p>
      ) : (
        <Fragment>
          <Movies movies={movies} />
          <Paginate
            totalPages={totalPages}
            currentPage={Number(currentPage)}
            pageNeighbors={3}
            paginateFunc={handlePageChange}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

const TvDisplay = ({ tvShows, totalPages, currentPage, handlePageChange }) => {
  return (
    <Fragment>
      {tvShows.length === 0 ? (
        <p>There are no tv results for your query</p>
      ) : (
        <Fragment>
          <TvShows tvShows={tvShows} />
          <Paginate
            totalPages={totalPages}
            currentPage={Number(currentPage)}
            pageNeighbors={3}
            paginateFunc={handlePageChange}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default SearchPage;
