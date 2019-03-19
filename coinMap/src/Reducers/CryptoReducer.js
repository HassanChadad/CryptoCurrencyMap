import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL
} from '../sagas/types'

/**
 * State containing different variables.
 * isFetching: to render the page when fetching is finished
 * data: stores the data received from the API
 */
const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
}

/**
 * Function that checks the type and update the state depending on it.
 * @param {*} state 
 * @param {*} action 
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null
      });

    case GET_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload, // load the data retrieved from API to data in state
        hasError: false,
        errorMessage: null
      });

    case GET_DATA_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err
      });

    default:
      return state;
  }
}
