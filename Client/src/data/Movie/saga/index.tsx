import { all, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import { fetchMovies } from "./fetchMovies";

export function* saga() {
  yield all([
      takeEvery(actions.FETCH_MOVIES_STARTED, fetchMovies)
    ]);
}
