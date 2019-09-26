import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getFilm = () => dispatch => {
  // A different way to return a function - shown in the TK videos
  // Might be confusing because it isn't as explicit as Brian's lecture
  dispatch({ type: FETCHING });
  axios
    .get("https://ghibliapi.herokuapp.com/films")
    .then(resolve => dispatch({ type: FETCH_SUCCESS, payload: resolve.data }))
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: `${error.response.status} ${error.response.statusText}` }));
  // Another trick learned from the TK videos
  // console.log(error.response) returns an object with this information
  // just intentionally mess up the .get url to see it/test it
};
