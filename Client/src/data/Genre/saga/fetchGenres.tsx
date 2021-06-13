import { call, put } from "redux-saga/effects";
import { IDynamicObject } from "../../interfaces/IDynamicObject";
import { IGenre } from "../../interfaces/IGenre";
import { fetchGenresSucceeded } from "../actions";
import * as helpers from "../httpRequestHelpers";

export function* fetchGenres() {
  try {
    const genres: IGenre[] = yield call(helpers.fetchGenres);
    const genresMap: IDynamicObject<IGenre> = {};
    genres.forEach((genre: IGenre) => {
      genresMap[genre.id] = genre;
    });
    yield put(fetchGenresSucceeded(genresMap));
  } catch (error) {
    console.log(error);
  }
}
