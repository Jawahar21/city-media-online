import { all, takeEvery } from "redux-saga/effects";
import { SET_SELECTED_GENRE } from "../../../features/Genre/actions";
import { UPDATE_GENRE_STARTED } from "../actions";
import { fetchMovies } from "./fetchMovies";
import { updateGenre } from "./updateGenre";

export function* saga() {
  yield all([
      takeEvery(SET_SELECTED_GENRE, fetchMovies),
      takeEvery(UPDATE_GENRE_STARTED, updateGenre)
    ]);
}
