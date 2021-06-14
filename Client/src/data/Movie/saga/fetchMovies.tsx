import { call, put, select } from "redux-saga/effects";
import { setSelectedGenre } from "../../../features/Genre/actions";
import { CacheService } from "../../CacheService/CacheService";
import { getGenres } from "../../Genre/selectors";
import { IDynamicObject } from "../../interfaces/IDynamicObject";
import { IGenre } from "../../interfaces/IGenre";
import { IMovie } from "../../interfaces/IMovie";
import { fetchMoviesStarted, fetchMoviesSucceeded } from "../actions";
import * as helpers from "../httpRequestHelpers";
import { getMovies } from "../selectors";

/**
 * This saga makes an API call fetch the movies of the selected genre.
 * If uses the CacheService to check if the movies of that required genre are already fetched
 * If fetched it simply ignores it.
 * @param action the action with the payload with triggered the saga. Contains genreID
 */
export function* fetchMovies(action: ReturnType<typeof setSelectedGenre>) {
  try {
    // These started and succeeded actions can be used to show and hide a loading spinner while making an API call.
    yield put(fetchMoviesStarted());
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
    // we can show a toaster message kind of indication upon failures here.
    console.log(error);
  }
}
