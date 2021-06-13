import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
