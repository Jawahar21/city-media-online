import { combineReducers } from "redux";
import { IAction } from "../interfaces/IAction";
import { IMovie } from "../interfaces/IMovie";
import * as actions from "./actions";

export const movies = (state: IMovie[] = [], action: IAction) => {
  switch (action.type) {
    case actions.FETCH_MOVIES_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  movies,
});
