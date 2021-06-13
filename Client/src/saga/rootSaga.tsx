import { all } from "redux-saga/effects";
import {saga as dataSaga}  from '../data/saga';

export default function* rootSaga() {
  yield all([
    dataSaga()
  ]);
}
