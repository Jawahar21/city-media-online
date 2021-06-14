import { call, put, select } from "redux-saga/effects";
import { getGenres } from "../../Genre/selectors";
import { IDynamicObject } from "../../interfaces/IDynamicObject";
import { IGenre } from "../../interfaces/IGenre";
import { IMovie } from "../../interfaces/IMovie";
import {
  fetchMoviesSucceeded,
  updateGenreStarted,
  updateGenreSucceeded,
} from "../actions";
import * as helpers from "../httpRequestHelpers";
import { getMovies } from "../selectors";

export function* updateGenre(action: ReturnType<typeof updateGenreStarted>) {
  const genres: IDynamicObject<IGenre> = yield select(getGenres);
  const currentMovies: IDynamicObject<IMovie> = yield select(getMovies);
  const updatedMovie: IMovie = yield call(
    helpers.updateGenre,
    action.payload?.movieID,
    action.payload?.updatedGenreID
  );
  updatedMovie.genreName = genres[updatedMovie.GenreId].name;
  const updatedMovies: IDynamicObject<IMovie> = Object.assign(
    {},
    currentMovies,
    { [updatedMovie.id]: updatedMovie }
  );
  yield put(fetchMoviesSucceeded(updatedMovies));
  yield put(updateGenreSucceeded());
}
