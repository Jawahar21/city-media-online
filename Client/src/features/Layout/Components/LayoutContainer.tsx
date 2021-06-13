import { connect } from "react-redux";
import { fetchGenresStarted } from "../../../data/Genre/actions";
import { Layout } from "./Layout";
import { ILayoutDispatchProps } from "./types/ILayoutDispatchProps";

const mapDispatchToProps: ILayoutDispatchProps = {
  onFetchGenres: fetchGenresStarted,
};

export const LayoutContainer = connect<undefined, ILayoutDispatchProps>(
  undefined,
  mapDispatchToProps
)(Layout);
