import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL
  } from './types';


/**
 *  watcher saga: watches for actions dispatched to the store, starts worker saga
 */ 
export function* watcherSaga() {
  yield takeLatest(GET_DATA, workerSaga);
}

const getData = () => {
    return axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
  }

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(getData);
        yield put({ type: GET_DATA_SUCCESS, payload: response.data.Data })
      } 
      catch (error) {
        yield put({ type: GET_DATA_FAIL, payload: error })
      }
}