import { call, put, select } from "redux-saga/effects";
import { setSelectedGenre } from "../../../features/Genre/actions";
import { CacheService } from "../../CacheService/CacheService";
import { fetchGenresStarted } from "../../Genre/actions";
import { getGenres } from "../../Genre/selectors";
import { IDynamicObject } from "../../interfaces/IDynamicObject";
import { IGenre } from "../../interfaces/IGenre";
import { IMovie } from "../../interfaces/IMovie";
import { fetchMoviesSucceeded } from "../actions";
import * as helpers from "../httpRequestHelpers";
import { getMovies } from "../selectors";

export function* fetchMovies(action: ReturnType<typeof setSelectedGenre>) {
  try {
    yield put(fetchGenresStarted());
    if (!CacheService.CheckIfMoviesOfGenreAreFetched(action.payload)) {
      const genres: IDynamicObject<IGenre> = yield select(getGenres);
      const newMoviesResponse: IMovie[] = yield call(
        helpers.fetchMovies,
        action.payload
      );
      const newMovies: IDynamicObject<IMovie> = {};
      newMoviesResponse.forEach((movie: IMovie) => {
        movie.genreName = genres[movie.GenreId].name;
        newMovies[movie.id] = movie;
      });
      const currentMovies: IDynamicObject<IMovie> = yield select(getMovies);
      const updatedMovies: IDynamicObject<IMovie> = Object.assign(
        {},
        currentMovies,
        newMovies
      );
      yield put(fetchMoviesSucceeded(updatedMovies));
      CacheService.AddGenreIDToFetchedList(action.payload);
    }
  } catch (error) {
    console.log(error);
  }
}
