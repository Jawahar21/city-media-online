import { call, put } from "redux-saga/effects";
import { IMovie } from "../../interfaces/IMovie";
import { fetchMoviesSucceeded } from "../actions";
import * as helpers from "../helpers";

export function* fetchMovies() {
  try {
    const movies: IMovie[] = yield call(helpers.fetchMovies);
    yield put(fetchMoviesSucceeded(movies));
  } catch (error) {
    console.log(error);
  }
}
