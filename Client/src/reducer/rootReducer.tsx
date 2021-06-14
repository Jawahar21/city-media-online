import { combineReducers } from "redux";
import { PACKAGE as dataPackage } from "../data/constants";
import { NAME as genresDataName } from "../data/Genre/constants";
import { reducer as genresDataReducer } from "../data/Genre/reducers";
import { NAME as moviesDataName } from "../data/Movie/constants";
import { reducer as moviesDataReducer } from "../data/Movie/reducers";
import { PACKAGE as featuresPackage } from "../features/constants";
import { NAME as genreFeaturesName } from "../features/Genre/constants";
import { reducer as genreFeaturesReducer } from "../features/Genre/reducers";
import { NAME as movieFeaturesName } from "../features/Movie/constants";
import { reducer as movieFeaturesReducer } from "../features/Movie/reducers";

const rootReducer = combineReducers({
  [dataPackage]: combineReducers({
    [genresDataName]: genresDataReducer,
    [moviesDataName]: moviesDataReducer,
  }),
  [featuresPackage]: combineReducers({
    [genreFeaturesName]: genreFeaturesReducer,
    [movieFeaturesName]: movieFeaturesReducer,
  }),
});

export default rootReducer;
