import {
  SET_LOADING_MOVIES,
  GET_MOVIES,
  GET_MOVIE,
  GET_MOVIE_ACTORS,
  GET_TOTAL_PAGES_MOVIES,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loadingMovies: false,
      };

    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loadingMovies: false,
      };

    case SET_LOADING_MOVIES:
      return {
        ...state,
        loadingMovies: true,
      };

    case GET_MOVIE_ACTORS:
      return {
        ...state,
        movieActors: action.payload,
      };

    case GET_TOTAL_PAGES_MOVIES:
      return {
        ...state,
        totalPages: action.payload,
      };

    default:
      return state;
  }
};
