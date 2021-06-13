import { combineReducers } from "redux";
import { IAction } from "../../data/interfaces/IAction";
import * as actions from "./actions";

export const selectedGenreID = (state: number = 0, action: IAction) => {
  switch (action.type) {
    case actions.SET_SELECTED_GENRE:
      return action.payload;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  selectedGenreID,
});
