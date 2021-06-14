import { IAction } from "../../data/interfaces/IAction";
import * as commonConstants from "../constants";
import * as constants from "./constants";

export const SET_SELECTED_MOVIE = `${commonConstants.PACKAGE}/${constants.NAME}/SET_SELECTED_MOVIE`;

///////////////////////////////////////////// ACTION GENERATORS START ///////////////////////////////////////

export const setSelectedMovie = (selectedMovieID: number): IAction => ({
  payload: selectedMovieID,
  type: SET_SELECTED_MOVIE,
});

//////////////////////////////////////////// ACTION GENERATORS END ///////////////////////////////////////////
