import React, { useReducer } from "react";

import searchContext from "./searchContext";
import searchReducer from "./searchReducer";

import {
  GET_SEARCH_RESULTS_MOVIES,
  GET_SEARCH_RESULTS_TV,
  GET_TOTAL_PAGES_SEARCH_MOVIES,
  GET_TOTAL_PAGES_SEARCH_TV,
  UPDATE_LOADING_SEARCH,
} from "../types";

const SearchState = (props) => {
  const initialState = {
    totalPagesMovies: null,
    totalPagesTV: null,
    movieResults: null,
    tvResults: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  const updateLoading = (flag) => {
    dispatch({
      type: UPDATE_LOADING_SEARCH,
      payload: flag,
    });
  };

  const getSearchResults = async (query, currentPage = 1) => {
    updateLoading(true); // set loading to true

    // request fro both movie and tv results
    const response = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_REACT_MOVIEZ_KEY}&language=en-US&query=${query}&page=${currentPage}&include_adult=false`
      ),
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_REACT_MOVIEZ_KEY}&language=en-US&query=${query}&page=${currentPage}&include_adult=false`
      ),
    ]);

    const data = await Promise.all(response.map((res) => res.json()));
    const [movies, tv] = data;

    dispatch({
      type: GET_SEARCH_RESULTS_MOVIES,
      payload: movies.results,
    });

    dispatch({
      type: GET_SEARCH_RESULTS_TV,
      payload: tv.results,
    });

    getTotalPagesMovies(movies.total_pages);
    getTotalPagesTV(tv.total_pages);

    updateLoading(false); // set loading to false
  };

  const getTotalPagesMovies = (pages) => {
    dispatch({
      type: GET_TOTAL_PAGES_SEARCH_MOVIES,
      payload: pages,
    });
  };

  const getTotalPagesTV = (pages) => {
    dispatch({
      type: GET_TOTAL_PAGES_SEARCH_TV,
      payload: pages,
    });
  };

  return (
    <searchContext.Provider
      value={{
        totalPagesMovies: state.totalPagesMovies,
        totalPagesTV: state.totalPagesTV,
        loading: state.loading,
        movieResults: state.movieResults,
        tvResults: state.tvResults,
        getSearchResults,
      }}
    >
      {props.children}
    </searchContext.Provider>
  );
};

export default SearchState;
