import { setSelectedMovie } from "../../../actions";

export interface IMoviesViewDispatchProps {
  onSetSelectedMovieID: (
    selectedMovieID: number
  ) => ReturnType<typeof setSelectedMovie>;
}
