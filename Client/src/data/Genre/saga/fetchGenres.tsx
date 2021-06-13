import * as helpers from "../helpers";
import { call, put } from "redux-saga/effects";
import { IGenre } from "../../interfaces/IGenre";
import { fetchGenresSucceeded } from "../actions";

export function* fetchGenres() {
  try {
    const genres: IGenre[] = yield call(helpers.fetchGenres);
    yield put(fetchGenresSucceeded(genres));
  } catch (error) {
    console.log(error);
  }
}
