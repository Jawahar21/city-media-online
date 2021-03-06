import * as commonConstants from "../constants";
import { IAction } from "../interfaces/IAction";
import { IDynamicObject } from "../interfaces/IDynamicObject";
import { IMovie } from "../interfaces/IMovie";
import * as constants from "./constants";

export const FETCH_MOVIES_STARTED = `${commonConstants.PACKAGE}/${constants.NAME}/FETCH_MOVIES_STARTED`;
export const FETCH_MOVIES_SUCCEEDED = `${commonConstants.PACKAGE}/${constants.NAME}/FETCH_MOVIES_SUCCEEDED`;

export const UPDATE_GENRE_STARTED = `${commonConstants.PACKAGE}/${constants.NAME}/UPDATE_GENRE_STARTED`;
export const UPDATE_GENRE_SUCCEEDED = `${commonConstants.PACKAGE}/${constants.NAME}/UPDATE_GENRE_SUCCEEDED`;

///////////////////////////////////////////// ACTION GENERATORS START ///////////////////////////////////////

export const fetchMoviesStarted = (): IAction => ({
  type: FETCH_MOVIES_STARTED,
});

export const fetchMoviesSucceeded = (
  movies: IDynamicObject<IMovie>
): IAction => ({
  payload: movies,
  type: FETCH_MOVIES_SUCCEEDED,
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const updateGenreStarted = (
  movieID: number,
  updatedGenreID: number
): IAction => ({
  payload: { movieID, updatedGenreID },
  type: UPDATE_GENRE_STARTED,
});

export const updateGenreSucceeded = (): IAction => ({
  type: UPDATE_GENRE_SUCCEEDED,
});

//////////////////////////////////////////// ACTION GENERATORS END ///////////////////////////////////////////
