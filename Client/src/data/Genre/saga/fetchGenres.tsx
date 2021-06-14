import { call, put } from "redux-saga/effects";
import { IDynamicObject } from "../../interfaces/IDynamicObject";
import { IGenre } from "../../interfaces/IGenre";
import { fetchGenresSucceeded } from "../actions";
import * as helpers from "../httpRequestHelpers";

/**
 * This method is to make and API call to fetch the genres from the server and store them after mapping to required format.
 * This maps the list of items into a object by thier IDs as keys.
 */
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
