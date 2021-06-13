import * as commonConstants from "../constants";
import * as constants from "./constants";

export const getSelectedGenreID = (state: object): number =>
  state[commonConstants.PACKAGE][constants.NAME].selectedGenreID;
