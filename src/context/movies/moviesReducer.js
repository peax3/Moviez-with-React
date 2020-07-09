import { SET_LOADING_MOVIES, GET_MOVIES } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loadingMovies: false,
      };

    case SET_LOADING_MOVIES:
      return {
        ...state,
        loadingMovies: true,
      };

    default:
      return state;
  }
};
