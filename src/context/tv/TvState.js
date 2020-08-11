import React, { useReducer } from "react";

import tvContext from "./tvContext";
import tvReducer from "./tvReducer";

import {
  SET_LOADING_TV,
  GET_TV_SHOWS,
  GET_TV_SHOW,
  GET_TV_ACTORS,
  GET_TOTAL_PAGES_MOVIES,
} from "../types";

const INITIAL_STATE = {
  loadingTV: false,
  tvShows: null,
  tvShow: null,
  text: "",
  tvActors: null,
  totalPages: 1,
};

function TvState(props) {
  const [state, dispatch] = useReducer(tvReducer, INITIAL_STATE);

  const setLoading = () => dispatch({ type: SET_LOADING_TV });

  const getTvShows = async (filter = "popular", currentPage = 1) => {
    setLoading();

    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${filter}?api_key=${process.env.REACT_APP_REACT_MOVIEZ_KEY}&language=en-US&page=${currentPage}`
    );

    const data = await res.json();

    dispatch({
      type: GET_TV_SHOWS,
      payload: data.results,
    });

    getTotalPages(data.total_pages);
  };

  const getTotalPages = (pages) => {
    dispatch({
      type: GET_TOTAL_PAGES_MOVIES,
      payload: pages,
    });
  };

  const getTvShow = async (id) => {
    setLoading();

    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_REACT_MOVIEZ_KEY}&language=en-US`
    );

    const data = await res.json();

    dispatch({
      type: GET_TV_SHOW,
      payload: data,
    });
  };

  const getTvActors = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_REACT_MOVIEZ_KEY}`
    );

    const data = await res.json();

    dispatch({
      type: GET_TV_ACTORS,
      payload: data.cast,
    });
  };

  return (
    <tvContext.Provider
      value={{
        loadingTV: state.loadingTV,
        tvShow: state.tvShow,
        tvShows: state.tvShows,
        tvActors: state.tvActors,
        totalPages: state.totalPages,
        getTvShow,
        getTvShows,
        getTvActors,
      }}
    >
      {props.children}
    </tvContext.Provider>
  );
}

export default TvState;
