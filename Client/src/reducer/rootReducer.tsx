import { combineReducers } from "redux";
import { PACKAGE as dataPackage } from "../data/constants";
import { PACKAGE as featuresPackage } from "../features/constants";
import { NAME as genresDataName } from "../data/Genre/constants";
import { reducer as genresDataReducer } from "../data/Genre/reducers";
import { NAME as moviesDataName } from "../data/Movie/constants";
import { reducer as moviesDataReducer } from "../data/Movie/reducers";
import { NAME as genreFeaturesName } from "../features/Genre/constants";
import { reducer as genreFeaturesReducer } from "../features/Genre/reducers";

const rootReducer = combineReducers({
  [dataPackage]: combineReducers({
    [genresDataName]: genresDataReducer,
    [moviesDataName]: moviesDataReducer,
  }),
  [featuresPackage]: combineReducers({
    [genreFeaturesName]: genreFeaturesReducer,
  }),
});

export default rootReducer;
