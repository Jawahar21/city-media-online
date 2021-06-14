import { fetchGenresStarted } from "../../../../data/Genre/actions";

export interface ILayoutDispatchProps {
  // action dispatch to fetch genres on load.
  onFetchGenres: () => ReturnType<typeof fetchGenresStarted>;
}
