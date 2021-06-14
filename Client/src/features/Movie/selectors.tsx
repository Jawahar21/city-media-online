import * as commonConstants from "../constants";
import * as constants from "./constants";

export const getSelectedMovieID = (state: object): number =>
  state[commonConstants.PACKAGE][constants.NAME].selectedMovieID;
