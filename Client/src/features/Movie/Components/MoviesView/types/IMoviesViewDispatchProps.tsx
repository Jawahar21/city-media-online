import { setSelectedMovie } from "../../../actions";

export interface IMoviesViewDispatchProps {
  // action dispatch to set the selected movie ID in store.
  onSetSelectedMovieID: (
    selectedMovieID: number
  ) => ReturnType<typeof setSelectedMovie>;
}
