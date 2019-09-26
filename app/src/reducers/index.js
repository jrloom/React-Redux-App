import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

export const initialState = {
  data: [],
  isFetching: false,
  error: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
