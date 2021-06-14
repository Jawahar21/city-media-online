import { connect } from "react-redux";
import { getGenres } from "../../../../data/Genre/selectors";
import { setSelectedGenre } from "../../actions";
import { getSelectedGenreID } from "../../selectors";
import { GenresView } from "./GenresView";
import { IGenresViewDataProps } from "./types/IGenresViewDataProps";
import { IGenresViewDispatchProps } from "./types/IGenresViewDispatchProps";

const mapStateToProps = (state: any): IGenresViewDataProps => ({
  genres: getGenres(state),
  selectedGenreID: getSelectedGenreID(state),
});

const mapDispatchToProps: IGenresViewDispatchProps = {
  onSetSelectedGenreID: setSelectedGenre,
};

export const GenresViewContainer = connect<
  IGenresViewDataProps,
  IGenresViewDispatchProps
>(
  mapStateToProps,
  mapDispatchToProps
)(GenresView);
