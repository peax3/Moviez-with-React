import {
  GET_SEARCH_RESULTS_MOVIES,
  GET_SEARCH_RESULTS_TV,
  UPDATE_LOADING_SEARCH,
  GET_TOTAL_PAGES_SEARCH_MOVIES,
  GET_TOTAL_PAGES_SEARCH_TV,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS_TV:
      return {
        ...state,
        tvResults: action.payload,
      };

    case GET_SEARCH_RESULTS_MOVIES:
      return {
        ...state,
        movieResults: action.payload,
      };

    case UPDATE_LOADING_SEARCH:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_TOTAL_PAGES_SEARCH_MOVIES:
      return {
        ...state,
        totalPagesMovies: action.payload,
      };

    case GET_TOTAL_PAGES_SEARCH_TV:
      return {
        ...state,
        totalPagesTv: action.payload,
      };

    default:
      return state;
  }
};
