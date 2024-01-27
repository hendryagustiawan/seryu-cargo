import { GET_NOW_PLAYING, GET_TOP_RATED, GET_MOVIE_BY_ID } from "../types";

const initialState = {
  nowPlaying: [],
  topRated: [],
  detailMovie: {},
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_NOW_PLAYING:
      return { ...state, nowPlaying: payload };
    case GET_TOP_RATED:
      return { ...state, topRated: payload };
    case GET_MOVIE_BY_ID:
      return { ...state, detailMovie: payload };
    default:
      return state;
  }
};

export default movieReducer;
