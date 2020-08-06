import {
  SET_LOADING_TV,
  GET_TV_SHOWS,
  GET_TV_SHOW,
  GET_TV_ACTORS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING_TV:
      return {
        ...state,
        loadingTV: true,
      };

    case GET_TV_SHOW:
      return {
        ...state,
        tvShow: action.payload,
        loadingTV: false,
      };

    case GET_TV_SHOWS:
      return {
        ...state,
        tvShows: action.payload,
        loadingTV: false,
      };

    case GET_TV_ACTORS:
      return {
        ...state,
        tvActors: action.payload,
      };

    default:
      return state;
  }
};
