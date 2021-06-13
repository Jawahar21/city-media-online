import { setSelectedGenre } from "../../../actions";

export interface IGenresViewDispatchProps {
  onSetSelectedGenreID: (
    selectedGenreID: number
  ) => ReturnType<typeof setSelectedGenre>;
}
