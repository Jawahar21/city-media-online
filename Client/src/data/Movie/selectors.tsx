import { IDynamicObject } from "../interfaces/IDynamicObject";
import { IMovie } from "../interfaces/IMovie";
import * as commonConstants from "../constants";
import * as constants from "./constants";

export const getMovies = (state: any): IDynamicObject<IMovie> => {
  return state[commonConstants.PACKAGE][constants.NAME].movies;
};
