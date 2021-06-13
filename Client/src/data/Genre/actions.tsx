import * as commonConstants from "../constants";
import { IAction } from "../interfaces/IAction";
import { IGenre } from "../interfaces/IGenre";
import * as constants from "./constants";

export const FETCH_GENRES_STARTED = `${commonConstants.PACKAGE}/${constants.NAME}/FETCH_GENRES_STARTED`;
export const FETCH_GENRES_SUCCEEDED = `${commonConstants.PACKAGE}/${constants.NAME}/FETCH_GENRES_SUCCEEDED`;

///////////////////////////////////////////// ACTION GENERATORS START ///////////////////////////////////////

export const fetchGenresStarted = (): IAction => ({
  type: FETCH_GENRES_STARTED,
});

export const fetchGenresSucceeded = (genres: IGenre[]): IAction => ({
  payload: genres,
  type: FETCH_GENRES_SUCCEEDED,
});

//////////////////////////////////////////// ACTION GENERATORS END ///////////////////////////////////////////