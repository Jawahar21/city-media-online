import { all, takeEvery } from "redux-saga/effects";
import { SET_SELECTED_GENRE } from "../../../features/Genre/actions";
import { fetchMovies } from "./fetchMovies";

export function* saga() {
  yield all([
      takeEvery(SET_SELECTED_GENRE, fetchMovies)
    ]);
}
