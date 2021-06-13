import { IDynamicObject } from "../interfaces/IDynamicObject";
import { IGenre } from "../interfaces/IGenre";
import * as commonConstants from "../constants";
import * as constants from "./constants";

export const getGenres = (state: object): IDynamicObject<IGenre> =>
  state[commonConstants.PACKAGE][constants.NAME].genres;
