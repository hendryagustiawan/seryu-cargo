import axios from "axios";
import { GET_NOW_PLAYING, GET_TOP_RATED, GET_MOVIE_BY_ID } from "../types";
import { errorMsg } from "../../lib/toastNotification";

const baseURL = "https://api.themoviedb.org/";
const access_token = localStorage.getItem("access_token");

export const getNowPlaying = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${baseURL}3/movie/now_playing`, {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    dispatch({
      type: GET_NOW_PLAYING,
      payload: response.data,
    });
  } catch (error) {
    errorMsg(error);
  }
};

export const getTopRated = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${baseURL}3/movie/top_rated?language=en-US&page=1`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    dispatch({
      type: GET_TOP_RATED,
      payload: response.data,
    });
  } catch (error) {
    errorMsg(error);
  }
};

export const getMovieById = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${baseURL}3/movie/${id}?language=en-US`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    dispatch({
      type: GET_MOVIE_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    errorMsg(error);
  }
};
