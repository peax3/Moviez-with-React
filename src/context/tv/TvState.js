import React, { useReducer } from "react";

import tvContext from "./tvContext";
import tvReducer from "./tvReducer";

import { SET_LOADING_TV, GET_TV_SHOWS, GET_TV_SHOW } from "../types";

const INITIAL_STATE = {
  loadingTV: false,
  tvShows: null,
  tvShow: null,
  text: "",
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
  };

  const getTvShow = async (id) => {
    setLoading();

    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_REACT_MOVIEZ_KEY}`
    );

    const data = await res.json();

    dispatch({
      type: GET_TV_SHOW,
      payload: data,
    });
  };

  return (
    <tvContext.Provider
      value={{
        loadingTV: state.loadingTV,
        tvShow: state.tvShow,
        tvShows: state.tvShows,
        getTvShow,
        getTvShows,
      }}
    >
      {props.children}
    </tvContext.Provider>
  );
}

export default TvState;
