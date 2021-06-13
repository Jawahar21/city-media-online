import { fetchGenresStarted } from "../../../../data/Genre/actions";
import { fetchMoviesStarted } from "../../../../data/Movie/actions";

export interface ILayoutDispatchProps {
  onFetchGenres: () => ReturnType<typeof fetchGenresStarted>;
  onFetchMovies: () => ReturnType<typeof fetchMoviesStarted>;
}
