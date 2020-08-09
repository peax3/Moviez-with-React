import React, { useReducer } from "react";
import movieContext from "./moviesContext";
import movieReducer from "./moviesReducer";

import {
  SET_LOADING_MOVIES,
  GET_MOVIES,
  GET_MOVIE,
  GET_MOVIE_ACTORS,
  GET_TOTAL_PAGES_MOVIES,
} from "../types";

const INITIAL_STATE = {
  loadingMovies: false,
  movies: null,
  totalPages: 1,
  movie: null,
  movieActors: null,
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

    dispatch({
      type: GET_TOTAL_PAGES_MOVIES,
      payload: data.total_pages,
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

  const getMovieActors = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_REACT_MOVIEZ_KEY}`
    );

    const data = await res.json();

    dispatch({
      type: GET_MOVIE_ACTORS,
      payload: data.cast,
    });
  };

  return (
    <movieContext.Provider
      value={{
        loadingMovies: state.loadingMovies,
        movies: state.movies,
        movie: state.movie,
        movieActors: state.movieActors,
        totalPages: state.totalPages,
        getMovies,
        getMovie,
        getMovieActors,
      }}
    >
      {props.children}
    </movieContext.Provider>
  );
}

export default MovieState;
