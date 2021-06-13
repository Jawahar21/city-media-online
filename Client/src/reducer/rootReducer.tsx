import { combineReducers } from "redux";
import { NAME as genresDataName } from "../data/Genre/constants";
import { reducer as genresDataReducer } from "../data/Genre/reducers";
import { NAME as moviesDataName } from "../data/Movie/constants";
import { reducer as moviesDataReducer } from "../data/Movie/reducers";

const rootReducer = combineReducers({
  [genresDataName]: genresDataReducer,
  [moviesDataName]: moviesDataReducer,
});

export default rootReducer;
