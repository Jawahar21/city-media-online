import { setSelectedGenre } from "../../../actions";

export interface IGenresViewDispatchProps {
  // action to set the selected genre ID in redux store.
  onSetSelectedGenreID: (
    selectedGenreID: number
  ) => ReturnType<typeof setSelectedGenre>;
}
