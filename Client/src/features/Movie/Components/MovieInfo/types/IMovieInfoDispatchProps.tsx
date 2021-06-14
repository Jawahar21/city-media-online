import { updateGenreStarted } from "../../../../../data/Movie/actions";

export interface IMovieInfoDispatchProps {
  onUpdateGenre: (
    movieID: number,
    updatedGenreID: number
  ) => ReturnType<typeof updateGenreStarted>;
}
