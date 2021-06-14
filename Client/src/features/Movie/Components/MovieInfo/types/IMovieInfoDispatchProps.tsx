import { updateGenreStarted } from "../../../../../data/Movie/actions";

export interface IMovieInfoDispatchProps {
  // action dispatch to trigger saga for updating the genre of the movie
  onUpdateGenre: (
    movieID: number,
    updatedGenreID: number
  ) => ReturnType<typeof updateGenreStarted>;
}
