import React, { useReducer } from "react";
import movieContext from "./moviesContext";
import movieReducer from "./moviesReducer";

import { SET_LOADING_MOVIES, GET_MOVIES, GET_MOVIE } from "../types";

const INITIAL_STATE = {
  loadingMovies: false,
  movies: null,
  movie: null,
};

function MovieState(props) {
  const [state, dispatch] = useReducer(movieReducer, INITIAL_STATE);

  const setLoading = () => dispatch({ type: SET_LOADING_MOVIES });

  const getMovies = async (filter = "popular", currentPage = 1) => {
    setLoading();

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${filter}?api_key=${process.env.REACT_APP_REACT_MOVIEZ_KEY}&language=en-US&page=${currentPage}`
    );

    const data = await res.json();

    dispatch({
      type: GET_MOVIES,
      payload: data.results,
    });
  };

  const getMovie = async (id) => {
    setLoading();

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_REACT_MOVIEZ_KEY}`
    );

    const data = await res.json();

    dispatch({
      type: GET_MOVIE,
      payload: data,
    });
  };

  return (
    <movieContext.Provider
      value={{
        loadingMovies: state.loadingMovies,
        movies: state.movies,
        movie: state.movie,
        getMovies,
        getMovie,
      }}
    >
      {props.children}
    </movieContext.Provider>
  );
}

export default MovieState;
