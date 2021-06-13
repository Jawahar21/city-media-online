import { connect } from "react-redux";
import { fetchGenresStarted } from "../../../data/Genre/actions";
import { fetchMoviesStarted } from "../../../data/Movie/actions";
import { Layout } from "./Layout";
import { ILayoutDispatchProps } from "./types/ILayoutDispatchProps";

const mapDispatchToProps: ILayoutDispatchProps = {
  onFetchGenres: fetchGenresStarted,
  onFetchMovies: fetchMoviesStarted,
};

export const LayoutContainer = connect<undefined, ILayoutDispatchProps>(
  undefined,
  mapDispatchToProps
)(Layout);
