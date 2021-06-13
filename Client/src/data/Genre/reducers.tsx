import { combineReducers } from "redux";
import { IAction } from "../interfaces/IAction";
import { IGenre } from "../interfaces/IGenre";
import * as actions from "./actions";

export const genres = (state: IGenre[] = [], action: IAction) => {
  switch (action.type) {
    case actions.FETCH_GENRES_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  genres,
});
