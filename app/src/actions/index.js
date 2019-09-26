import axios from "axios";

export const FETCHING = "FETCH_FILM_START";
export const FETCH_SUCCESS = "FETCH_FILM_SUCCESS";
export const FETCH_FAILURE = "FETCH_FILM_FAILURE";

export const getFilm = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("")
    .then(resolve => {
      console.log(resolve.data);
    })
    .catch(error => {
      console.log(error);
    });
};
