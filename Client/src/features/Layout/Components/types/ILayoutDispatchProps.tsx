import { fetchGenresStarted } from "../../../../data/Genre/actions";

export interface ILayoutDispatchProps {
  onFetchGenres: () => ReturnType<typeof fetchGenresStarted>;
}
