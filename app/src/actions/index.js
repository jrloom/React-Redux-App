import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

const baseURL = "https://ghibliapi.herokuapp.com/";

export const getData = () => dispatch => {
  axios
    .get(baseURL + "films")
    .then(resolve => dispatch({ type: FETCH_SUCCESS, payload: resolve.data }))
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: `${error.response.status} ${error.response.statusText}` }));
};
