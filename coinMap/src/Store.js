import { Platform } from 'react-native';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from "redux-saga";

import reducer from './Reducers';
import { watcherSaga } from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// create a redux store with our reducer above and middleware
const Store = createStore(reducer,compose(applyMiddleware(sagaMiddleware)));

// run the saga
sagaMiddleware.run(watcherSaga);

export default Store;
