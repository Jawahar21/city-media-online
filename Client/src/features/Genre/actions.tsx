import { IAction } from "../../data/interfaces/IAction";
import * as commonConstants from "../constants";
import * as constants from "./constants";

export const SET_SELECTED_GENRE = `${commonConstants.PACKAGE}/${constants.NAME}/SET_SELECTED_GENRE`;

///////////////////////////////////////////// ACTION GENERATORS START ///////////////////////////////////////

export const setSelectedGenre = (selectedGenreID: number): IAction => ({
  payload: selectedGenreID,
  type: SET_SELECTED_GENRE,
});

//////////////////////////////////////////// ACTION GENERATORS END ///////////////////////////////////////////
