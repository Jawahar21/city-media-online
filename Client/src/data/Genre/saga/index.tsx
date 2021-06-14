import { all, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import { fetchGenres } from "./fetchGenres";

export function* saga() {
  yield all([
      takeEvery(actions.FETCH_GENRES_STARTED, fetchGenres)
    ]);
}
